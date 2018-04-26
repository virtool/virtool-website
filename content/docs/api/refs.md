---
title: "References"
description: "Browse, create, and manage references."
type: "api"
menu:
    api:
        parent: Endpoints
---

{{% endpoint name="List" %}}

List all references.

```
GET /api/refs
```

## Example

```
GET /api/refs
```

## Response

```
Status: 200 OK
```

```json
{
	"documents": [
		{
			"task": "pathoscope_bowtie",
			"proc": 6,
			"mem": 16,
			"user": {
				"id": "igboyes"
			},
			"id": "dqswirty",
			"state": "complete",
			"stage": "cleanup_indexes",
			"created_at": "2018-02-06T22:15:38.492000Z",
			"progress": 1
		},
		{
			"task": "create_subtraction",
			"proc": 2,
			"mem": 4,
			"user": {
				"id": "igboyes"
			},
			"id": "zzpugkyt",
			"state": "running",
			"stage": "bowtie_build",
			"created_at": "2018-02-06T22:15:52.664000Z",
			"progress": 0.6
		}
	],
	"total_count": 2,
	"found_count": 2,
	"page_count": 1,
	"per_page": 15,
	"page": 1
}
```

{{% /endpoint %}}