---
title: "Backend Resources"
menu:
  developer:
    parent: "Backend"
    weight: 20
---

# Documentation

## [`asyncio`](https://docs.python.org/3/library/asyncio.html)

The `asyncio` library supports asynchronous programming in Python.

Important Sections:

- [Event Loops](https://docs.python.org/3/library/asyncio-eventloop.html#event-loop)
  - [`get_event_loop()`](https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.get_event_loop)
  - [`loop.run_until_complete()`](https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.loop.run_until_complete)
  - [`loop.run_in_executor()`](https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.loop.run_in_executor)
  - [`loop.set_default_executor()`](https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.loop.set_default_executor)
- [Coroutines and Tasks](https://docs.python.org/3/library/asyncio-task.html#coroutines-and-tasks)
  - [Coroutines](https://docs.python.org/3/library/asyncio-task.html#coroutines)
  - [Awaitables](https://docs.python.org/3/library/asyncio-task.html#awaitables)
  - [Creating Tasks](https://docs.python.org/3/library/asyncio-task.html#creating-tasks)
  - [Sleeping](https://docs.python.org/3/library/asyncio-task.html#sleeping)
  - [Running Tasks Concurrently](https://docs.python.org/3/library/asyncio-task.html#running-tasks-concurrently)
  - [Shielding From Cancellation](https://docs.python.org/3/library/asyncio-task.html#shielding-from-cancellation)
  - [Task Object](https://docs.python.org/3/library/asyncio-task.html#task-object)
- [Exceptions](https://docs.python.org/3/library/asyncio-exceptions.html)

## [`aiohttp`](https://aiohttp.readthedocs.io/en/stable/index.html)

An HTTP server and client written for `asyncio`.

Virtool contributors should understand all parts of the `aiohttp` server components. Most features of the server are used in Virtool.

The `aiohttp` client has minimal use in Virtool. It is used for making simple requests to GitHub and NCBI.

## [MongoDB](https://docs.mongodb.com/v3.6/)

Virtool currently uses MongoDB >=3.6.

The official MongoDB documentation includes detailed information about the following:

- [CRUD Operations](https://docs.mongodb.com/v3.6/crud/)
- [Aggregation](https://docs.mongodb.com/v3.6/aggregation/)
- [Indexes](https://docs.mongodb.com/v3.6/indexes/)

If you are working on Virtool-MongoDB security, see the following:

- [Security](https://docs.mongodb.com/v3.6/security/)

### `motor`

Virtool uses the `motor` asynchronous MongoDB driver to connect to the database and perform operations. We suggest starting by following [the tutorial here](https://motor.readthedocs.io/en/stable/tutorial-asyncio.html).

You have to refer to the [`asyncio`-focussed API documentation for `motor`](https://motor.readthedocs.io/en/stable/api-asyncio/index.html). Sections related to Virtool are:

- [`AsyncIOMotorClient`](https://motor.readthedocs.io/en/stable/api-asyncio/asyncio_motor_client.html)
- [`AsyncIOMotorDatabase`](https://motor.readthedocs.io/en/stable/api-asyncio/asyncio_motor_database.html)
- [`AsyncIOMotorCollection`](https://motor.readthedocs.io/en/stable/api-asyncio/asyncio_motor_collection.html)
- [`AsyncIOMotorCursor`](https://motor.readthedocs.io/en/stable/api-asyncio/cursors.html)

## 
