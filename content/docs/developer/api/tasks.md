---
title: "Tasks"
description: "View and remove tasks."
menu:
    developer:
        parent: API
---

# List

List all existing tasks.

{{< endpoint "GET" "/api/tasks" >}}

## Example

{{< request "GET" "/api/tasks" />}}

## Response

{{< response "Status: 200 OK" >}}
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
{{< /response >}}

# Get

Get a single task.

{{< endpoint "GET" "/api/tasks/:id" >}}

## Example

{{< request "GET" "/api/tasks/pqbed16v" />}}

## Response

{{< response "Status: 200 OK" >}}
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
{{< /response >}}

## Errors

| Status | Message   | Reason                                  |
| :----- | :-------- | :-------------------------------------- |
| `404`  | Not found | process does not exist                  |
