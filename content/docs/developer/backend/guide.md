---
title: "Guide"
menu:
    developer:
        parent: "Backend"
        weight: 10
---

The Virtool backend is written in Python and requires Python 3.8 or later to run.

# Startup

A number of services are setup during the `aiohttp` start-up sequence.

## HTTP Client

An shared HTTP client object is created when the backend is started.

This client session should be used to make all outgoing HTTP requests (_eg_. to GitHub or NCBI). All Virtool HTTP
headers are already set in the session. Do not spawn new client sessions.

```python3
# The session is initialized during app startup.
await virtool.app.init_http_client(app)

# A shared aiohttp.client.ClientSession object is stored in the application state.
app["client"]

```
## Executors

Read about [executing code in thread or process pools](https://docs.python.org/3/library/asyncio-eventloop.html#executing-code-in-thread-or-process-pools).

Executors are used in Virtool to run blocking IO-bound or compute-heavy functions. Executing these in the main loop can
easily slow down or block the entire application resulting in poor performance from the user's perspective.

```python3
# Initializing the executors
virtool.app.init_executors(app)

# Using the thread pool executor.
await app["run_in_thread"](io_bound_func)

# Using the process pool executor.
await app["run_in_process"](compute_heavy_func, dataset)

```

## Database

Virtool connects to MongoDB as a database backend and uses the asynchronous [`motor`](https://motor.readthedocs.io/en/stable/) driver.

The database interface (`virtool.db.core.DB`) is provided in the application state. It is a wrapper for
[`AsyncIOMotorDatabase`](https://motor.readthedocs.io/en/stable/api-asyncio/asyncio_motor_database.html) that
automatically [dispatches](#dispatcher) changes to the database collections.

```python3
# Initializing the database during app startup.
await virtool.app.init_db(app)

# Using the application database connection.
await app["db"].samples.insert_one(document)

```

## Dispatcher

Dispatching in the Virtool backend means sending websocket messages to connected clients to keep them semi-synced with
the server.

The dispatcher keeps references to open websocket connections for all clients. It handles cleanly closing the
connections when they fail or when the application shuts down.

The `dispatch()` method of the dispatcher object sends a websocket message. Calls to `dispatch()` require the positional
arguments `interface`, `operation`, and `data`.

In all cases, interfaces correspond to MongoDB collections and operations and data describe changes in MongoDB
documents. For _insert_ and _update_ operations a partial representation of the document is sent as `data`. For _delete_
operations a list of removed document IDs is sent.

| Operation | Description                                             |
| --------- | ------------------------------------------------------- |
| insert    | a new document was inserted into the collection         |
| update    | an existing document in the collection was updated      |
| delete    | an existing document(s) was removed from the collection |


# MongoDB

Virtool connects to MongoDB using the `motor` asynchronous driver.

Wrapper classes have been built around `motor.motor_asyncio.AsyncIOMotorDatabase` and `motor.motor_asyncio.AsyncIOMotorCollection`. These
classes are defined in `virtool.app.db.core`. The purpose of these wrapper classes is primary to automatically dispatch
database changes to connected clients.

# Executors

Executors are used in Virtool to run blocking IO-bound or compute-heavy functions.

Virtool provides easy access to a `ProcessPoolExecutor` and `ThreadPoolExecutor`. The instances are created on app
start.

## Use threads for IO-bound blocking functions

This will prevent the blocking function from blocking the entire application.

An example would be copying a file using `shutil.copy`. The call to `copy()` will block until the operation is complete.
Executing the function in a thread prevents it from blocking the main event loop.

```python3
src = "/mnt/data/large.gz"
dest = "/home/bob"

await app["run_in_thread"](shutil.copy, src, dest)

```

## Use processes for compute-intensive functions

This prevents CPU-intensive work from taking over the main Virtool process and slowing down the server response.

An example of such work would be performing calculations on a large piece of bioinformatic data. In this example, that
logic is contained in the function `generate_statistics()`.

```python3
results = await app["run_in_process"](generate_statistics, dataset)

```

It takes time to delegate the work to an existing process or start a new one. Balance the costs, when making the
decision to use `run_in_process()`.

## Asynchronous libraries

There are numerous Python packages with low-level support for `asyncio`. **Don't use threads and processes to do things
synchronously that would be better done using an asynchronous library**.

Examples:

-   reading and writing files in a thread or process using the built-in `open()` instead of using the `aiofiles` package
-   making database calls using `pymongo` or `redis-py` in a thread instead of using native asynchronous drivers like `motor` and `aioredis`