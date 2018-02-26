---
title: "Authentication"
type: "api"
menu:
    api:
        parent: Overview
        weight: 10
---

# Explanation

Virtool uses API keys for authentication. All API endpoints will return ``403 Unauthorized`` for requests without valid authentication.

First, you will need to create an API key with the a permission scope defined by you. See the [account documentation](/account#api_key) to learn how to create API keys.

Using an API key for authentication is easy and should be familiar to developers who have made use of other HTTP-based APIs. When making requests, use Basic authentication and provide your username and API key.

# Examples

## curl

```shell
curl -X GET -u igboyes:74e8b0d15ded4c538c66fce3922d415a https://demo.virtool.ca/api/account
```

## Python ``requests``

```python
import requests
from requests.auth import HTTPBasicAuth

basic_auth = HTTPBasicAuth("igboyes", "74e8b0d15ded4c538c66fce3922d415a")

requests.get("http://localhost:9950/api/account", auth=basic_auth)
```

## Javascript ``fetch``

```javascript
let headers = new Headers();

headers.append("Authorization", `Basic ${btoa("igboyes:74e8b0d15ded4c538c66fce3922d415a"}`);

fetch("http://localhost:9950/api/account", {method: "GET", headers})
    .then(resp => resp.json())
    .then(json => console.log(json));

```



