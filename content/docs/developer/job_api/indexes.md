---
title: "Indexes"
description: "Query and create virus indexes."
menu:
    developer:
        identifier: job_api_indexes
        parent: Job API
---

# Get

Get the complete representation of an index.

{{< endpoint "GET" "/api/indexes/:id" >}}

## Example

{{< request "GET" "/api/indexes/jiwncaqr" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
	"version": 0,
	"created_at": "2018-02-01T00:28:49.798000Z",
	"manifest": {
		"c93ec9a9": 0,
        ...
	},
	"ready": false,
	"user": {
		"id": "igboyes"
	},
	"job": {
		"id": "wwssuhhy"
	},
	"id": "jiwncaqr",
	"contributors": [
		{
			"id": "igboyes",
			"count": 1419
		}
	],
	"change_count": 1419
}
```

{{< /response >}}

## Errors

| Status | Message             | Reason                                         |
| :----- | :------------------ | :--------------------------------------------- |
| `403`  | Insufficient rights | The job does not have read rights on the index |
| `404`  | Not found           | The index does not exist                       |

# Upload File

**Not Implemented**

Upload files that

# Finalize

**Not Implemented**

Finish an index build job.

{{< endpoint "PATCH" "/api/indexes/:id" >}}

## Example

```
PATCH /api/indexes/:id
```