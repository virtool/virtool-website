---
title: "Indexes"
description: "Query and create virus indexes."
type: "api"
menu:
    api:
        parent: Endpoints
---

# List

{{< right read >}}

List all virus reference indexes. Takes no query or input.

```
GET /api/indexes
```

## Response

```
Status: 200 OK
```

```json
{
	"documents": [
		{
			"version": 0,
			"created_at": "2018-02-01T00:28:49.798000Z",
			"virus_count": null,
			"ready": true,
			"has_files": true,
			"user": {
				"id": "igboyes"
			},
			"job": {
				"id": "wwssuhhy"
			},
			"id": "jiwncaqr"
		}
	],
	"total_count": 1,
	"found_count": 1,
	"page_count": 1,
	"per_page": 15,
	"page": 1,
	"modified_virus_count": 0,
	"total_virus_count": 1419
}
```

## Errors

_None_


# Get

{{< right read >}}

Get the complete representation of an index.

```
GET /api/indexes/:index_id
```

## Example

```
GET /api/indexes/jiwncaqr
GET /api/indexes/0
```

## Response

```
Status: 200 OK
```

```json
{
	"version": 0,
	"created_at": "2018-02-01T00:28:49.798000Z",
	"virus_count": null,
	"manifest": {
		"c93ec9a9": 0,
        ...
	},
	"ready": true,
	"has_files": true,
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
	"viruses": [
		{
			"id": "c93ec9a9",
			"name": "Abaca bunchy top virus",
			"change_count": 1
		},
        ...
	],
	"change_count": 1419
}
```

## Errors

| Status | Message   | Reason                                        |
| :----- | :-------- | :-------------------------------------------- |
| `404`  | Not found | index identified by `index_id` does not exist |


# Create

{{< right build >}}

Create an index by starting a new index build job.

```
POST /api/indexes
```

## Response

```
Status: 201 Created
Location: /api/indexes/bznqwjsa
```

```json
{
	"version": 0,
	"created_at": "2018-04-30T20:14:30.242000Z",
	"manifest": {
		"j6sk7lnh": 0,
		"ayyhflbx": 0,
		"5hzmr0h9": 0,
		...
	},
	"ready": false,
	"has_files": true,
	"job": {
		"id": "egox4ch6"
	},
	"ref": {
		"id": "9fhr3cey"
	},
	"user": {
		"id": "igboyes"
	},
	"id": "v2fuqat2"
}
```


## Errors

| Status | Message                         | Reason                                              |
| :----- | :------------------------------ | :-------------------------------------------------- |
| `400`  | There are unverified viruses    | some viruses included in the rebuild have issues    |
| `400`  | The are no unbuilt changes      | there are no changes to include in an index rebuild |
| `403`  | Not permitted                   | client does not have the `rebuild_index` permission |
| `409`  | Index build already in progress | only one index build at a time may be in progress   |


# Find History

{{< right read >}}

Find the virus changes that are included in a given index build.

```
GET /api/indexes/:index_id/history
```

## Example

```
GET /api/indexes/bznqwjsa/history
GET /api/indexes/1/history
```

## Response

```
Status: 200 OK
```

```json
{
	"documents": [
		{
			"method_name": "remove_isolate",
			"description": "Removed Isolate Q1108",
			"created_at": "2018-02-06T22:02:43.533000Z",
			"virus": {
				"id": "c93ec9a9",
				"name": "Abaca bunchy top virus",
				"version": 1
			},
			"index": {
				"id": "bznqwjsa",
				"version": 1
			},
			"user": {
				"id": "igboyes"
			},
			"id": "c93ec9a9.1"
		}
	],
	"total_count": 1420,
	"found_count": 1,
	"page_count": 1,
	"per_page": 15,
	"page": 1
}
```

## Errors

| Status | Message   | Reason                                        |
| :----- | :-------- | :-------------------------------------------- |
| `404`  | Not found | index identified by `index_id` does not exist |
