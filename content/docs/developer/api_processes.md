---
title: "Processes"
description: "View and remove processes."
type: "api"
menu:
    api:
        parent: Endpoints
---

# List

All all existing processes.

{{< endpoint "GET" "/api/processes" >}}

## Example

```
GET /api/processes
```

## Response

```
Status: 200 OK
```

```json
[
	{
		"created_at": "2018-05-02T23:04:15.376000Z",
		"progress": 1,
		"step": "create_history",
		"step_count": 0,
		"type": "import_reference",
		"id": "pqbed16v"
	},
	{
		"created_at": "2018-05-02T23:11:38.494000Z",
		"progress": 1,
		"step": "create_history",
		"step_count": 0,
		"type": "import_reference",
		"id": "d9tn5khk"
	}
]
```

# Get

Get a single process.

{{< endpoint "GET" "/api/processes/:id" >}}

## Example

```
GET /api/processes/pqbed16v
```

## Response

```
Status: 200 OK
```

```json
{
	"created_at": "2018-05-02T23:04:15.376000Z",
	"progress": 1,
	"step": "create_history",
	"step_count": 0,
	"type": "import_reference",
	"id": "pqbed16v"
}
```

## Errors

| Status | Message   | Reason                                  |
| :----- | :-------- | :-------------------------------------- |
| `404`  | Not found | process does not exist                  |
