---
title: "Errors"
description: "Learn the errors the API can return."
type: "api"
menu:
    api:
        parent: Overview
        weight: 20
---

# JSON Errors

JSON input that cannot be parsed, results in a ``400 Bad Request`` response. No more information is provided with the
response, so make sure your JSON is formatted properly!

```json
{
    "id": "invalid_json",
    "message": "Invalid JSON"
}
```


# Authorization Errors

For some endpoints, an authorized session is required. Authorized sessions are obtained by logging in through the browser.
Accessing user-specific endpoints like ``GET /api/account`` without an authorized session will result in the following
error:

```json
{
    "id": "requires_login",
    "message": "Requires login"
}
```


# Validation Errors

JSON input data for POST and PUT endpoints and URL queries are validated using Cerberus.

Validation errors will result in a ``422 Unprocessable Entity`` response. The response data includes the default
Cerberus error report. Refer to the [Cerberus documentation](http://docs.python-cerberus.org/en/stable/usage.html).

```json
{
    "id": "invalid_input",
    "message": "Invalid input",
    "errors": {
        "foo_bar": ["unknown field"],
        "new_password": ["required field"],
        "old_password": ["required field"]
    } 
}
```

In this example, the ``foo_bar`` field is not expected in the request. The required ``new_password`` and
``old_password`` fields are missing from the request. Refer to the input definition tables for each endpoint in the
documentation to make sure your inputs are valid.
