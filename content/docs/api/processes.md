---
title: "Processes"
description: "View and remove processes."
type: "api"
menu:
    api:
        parent: Endpoints
---

{{% endpoint name="List" %}}

All all existing processes.

```
GET /api/processes
```

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

{{% /endpoint %}}


{{% endpoint name="Get" %}}

Get a single process.

```
GET /api/processes/:process_id
```

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

{{% /endpoint %}}
