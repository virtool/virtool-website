---
title: "Testing the Backend"
menu:
  developer:
    parent: "Backend"
    weight: 30
---

Tests are implemented using the [pytest](https://docs.pytest.org/en/latest/) framework.

Tests can be quickly run by installing all dependencies and executing:

```bash
pytest
```

# API Tests

As much logic as possible should happen outside of API handler functions. Functions called in API handlers can be mocked. A server instance and backing MongoDB database is created for each test so writing a lot of API tests or creating large test matrices for API handlers can greatly increase testing time.

## Order of funcargs

For easy readability the order of funcargs passed to test functions follows the order:

- values passed in from parametrization
- fixtures from `pytest` itself and plugin libraries
- the `spawn_client` fixture if necessary
- all Virtool fixtures in alphabetical order

**_Good_**

```python3
@pytest.mark.parametrize("not_found", [False, True])
async def test_get(not_found, mocker, spawn_client, resp_is, static_time):
    client = await spawn_client(authorize=True)
```

**_Bad_**

```python3
@pytest.mark.parametrize("not_found", [False, True])
async def test_get(resp_is, not_found, static_time, spawn_client, mocker):
    client = await spawn_client(authorize=True)
```

## Error responses

All potential error responses for an API endpoint should be tested.
