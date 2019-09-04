---
title: "Backend Guide"
menu:
  developer:
    parent: "Backend"
    weight: 10
---

The Virtool backend is written in Python and requires Python 3.6.4 or later to run.

The backend provides the following functionalities:

# Organization

The Virtool server source code is organized by concern into sub-packages.

For example, code related to samples is located at `virtool/samples` and its modules are imported like `import virtool.samples.db` or `import virtool.samples.api`. These sub-packages usually contain three core module files:

| Name       | Purpose                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------- |
| `api.py`   | Definition of API handler functions and creation of `RouteDefTable`                             |
| `db.py`    | Definition of database-related module attributes and functions that perform database operations |
| `utils.py` | Utility functions, classes, and constants related to the concern                                |

More files will be present in complex sub-packages.


# Dependencies

This table describes key backend dependencies and their use in Virtool. 

Package            | Use 
-------------------|--------------------------------------------------------------------------------------
`aiofiles`         | asynchronous read and writing of files on filesystem
`aiohttp`          | asynchronous HTTP server
`aiojobs`          | long-running background asynchronous jobs that integrate with the `aiohttp` lifecycle
`aionotify`        | asynchronous watching for inotify filesystem events on the Linux operating system
`arrow`            | date-time library with improved ease-of-use compared to standard `datetime` library
`bcrypt`           | cryptographic library for hashing and salting user passwords
`Cerberus`         | checks `dict` objects against defined schemas; used for validating user input
`cx-Freeze`        | used for bundling Virtool server application into executable; will be deprecated in favour of Docker
`dictdiffer`       | utilities for diffing dicts; used for keeping incremental history of OTUs
`Mako`             | HTML templating for non-React portions of application
`motor`            | asynchronous MongoDB driver
`pytest`           | Python testing library
`pytest-aiohttp`   | pytest plugin for testing `aiohttp` applications
`pytest-cov`       | plugin for using `coverage` with `pytest`; generates test coverage reports
`pytest-mock`      | pytest plugin for using `Unitest.Mock` with pytest
`raven`            | client library for [Sentry.io](https://sentry.io)
`raven-aiohttp`    | make asynchronous API requests to [Sentry.io](https://sentry.io) using `aiohttp`
`uvloop`           | fast drop-in replacement for standard `asyncio` event loop
`visvalingamwyatt` | library for smoothing coverage curves

# Startup

A number of services are setup during the `aiohttp` start-up sequence. See `virtool.app` for the revelant code.

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

## Refreshers

This term refers to long-running async tasks that refresh Virtool data based on an internet resource. Currently
these tasks update the following:

- HMM data releases
- remote references
- software releases

These tasks are run as `aiojobs` jobs. They are initialized on startup and cancelled on shutdown.

## Version

The backend version is detected either using `git` to find the current tag name or finding a local `VERSION` file.

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

          
Operation | Description
----------|--------------------------------------------------------
insert    | a new document was inserted into the collection
update    | an existing document in the collection was updated
delete    | an existing document(s) was removed from the collection



```python3
# Initializing the dispatcher during startup.
await virtool.app.init_dispatcher(app)

# The dispatcher is accessible in the app state. Dispatch a message by calling dispatch().
await app["dispatcher"].dispatch("samples", "update", data)

```

# Database

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

- reading and writing files in a thread or process using the built-in `open()` instead of using the `aiofiles` package
- making database calls using `pymongo` or `redis-py` in a thread instead of using native asynchronous drivers like `motor` and `aioredis`


# Jobs

Key properties of jobs:

- long-running
- computationally demanding
- run in separate processes
- closely tracked with progress reported to users
- have configurable host resource limits

## Types of Jobs

Jobs are currently used for the following:

- Creating samples
- Updating legacy samples
- Creating subtractions
- Building reference indexes
- Pathoscope-based analysis for known viruses
- NuVs analysis for novel viruses


## In the database

A job document is created in response to a user action (_eg_. creating a new sample).

| Field   | Description                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------- |
| task    | the type of task being performed by the job                                                           |
| args    | args that will be accessible in the job instance and define what data and parameters the job will use |
| proc    | the maximum number of cores/threads the job will use                                                  |
| mem     | the maximum amount of RAM the job will use                                                            |
| user    | the user that started the job                                                                         |
| status  | a list of status messages that track the progress of the job                                          |

The status field of the job document is updated as the job starts and proceeds through its steps. These changes are 
dispatched to users as they happen.

## In the manager

An instance of `virtool.jobs.manager.IntegratedManager` is created when the application starts. The job manager's `run()` method continuously works to queue, start, and monitor jobs.

A new `virtool.jobs.job.Job` object is created when a user action leads to a call to the manager's `enqueue()` method. Jobs that are waiting to run or running are kept in a `dict` at `IntegratedManager._jobs`. Once jobs finish, either by error, cancellation, or successful completion, their `Job` objects are deleted from `IntegratedManager._jobs`.

The `Job` object is a subclass of `multiprocessing.Process`.

## Cancellation

Jobs can be cancelled by users through the Virtool client or an API request.

On cancellation, the job process is interrupted and the job object's `cleanup()` method is called. The job document is updated with a final cancellation `status` entry. The client will display the jobs in a cancelled state when this database change is dispatched.

## Errors

Jobs can encounter errors when calling external programs (_eg_. bowtie2) or when running Python code used for handling
results or running statistical analysis.

When an error is detected, execution of job steps is interrupted. Then the job's cleanup method is run to remove and partial
files or database documents created by the job.

An error subdocument is added to the `status` field in the job document. This is used in the Virtool client to display
an error message to the user.

## Resources

Administrators can [configure job resource limits](http://localhost:1313/docs/manual/gs_configuration/).

The Virtool instance can have global process and memory limits set on it. Individual job limits are categorized into _large_ and _small_ types. _Large_ jobs currently comprise the analysis workflows that have heavier resource requirements.

The available and used resources are tracked in the job manager. When jobs start the used resources are increased based on the requirements of the job. The reserved resources are then released when the job finishes.

# File Manager

The file manager (`virtool.files.manager.Manager`) deals with files sourced from outside Virtool.

## Files Directory

The directory at `<data_path>/files` is the storage location for externally sourced files. Each file in this location has a corresponding database document in the `files` collection.

The files database collection and the files in `<data_path>/files are automatically kept in sync. If a file is removed from the directory manually, its document will also be removed. Removing a file's database document will result in removal of the file itself.

When initially created, file documents can have an expiration time set. The file document and consequently the file itself will be removed when this time is reached.

## Watching

Virtool supports configuration of a directory from which FASTQ files will be automatically imported.

We use the library [`aionotify`](https://github.com/rbarrois/aionotify) to detect changes in the watch directory. When a file is fully written, a document is created in the `files` collection and the file is copied to the `<data_path>/files` directory.
