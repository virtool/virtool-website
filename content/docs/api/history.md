---
title: "History"
description: "Read and revert virus history."
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 80
---

{{% endpoint name="Find" %}}

List all virus changes with the most recent changes first. All parameters are optional.

```
GET /api/history
```

## Parameters

| Name     | Type    | Default   | Description                            |
| :------- | :------ | :-------  | :------------------------------------- |
| page     | integer | 1         | page number of results to return       |
| per_page | integer | 15        | number of documents to return per page |

## Example

```
GET /api/history?page=1&per_page=2
```

## Response

```
Status: 200 OK
```

```json
{
    "page": 1,
    "per_page": 2,
    "found_count": 1542,
    "page_count": 771,
    "total_count": 1542,
    "documents": [
        {
			"method_name": "create",
			"description": "Created Switchgrass mosaic-associated virus 1",
			"created_at": "2018-02-01T00:28:32.985000Z",
			"virus": {
				"id": "2a9b332c",
				"name": "Switchgrass mosaic-associated virus 1",
				"version": 0
			},
			"index": {
				"id": "jiwncaqr",
				"version": 0
			},
			"user": {
				"id": "igboyes"
			},
			"id": "2a9b332c.0"
		},
		{
			"method_name": "create",
			"description": "Created Sweet potato virus G",
			"created_at": "2018-02-01T00:28:32.950000Z",
			"virus": {
				"id": "4ff7c77d",
				"name": "Sweet potato virus G",
				"version": 0
			},
			"index": {
				"id": "jiwncaqr",
				"version": 0
			},
			"user": {
				"id": "igboyes"
			},
			"id": "4ff7c77d.0"
		}
    ]    
}
```

## Errors

| Status | Message       | Reason                                   |
| :----- | :------------ | :--------------------------------------- |
| `422`  | Invalid query | invalid key or value in URL query string |

{{% /endpoint %}}


{{% endpoint name="Get" %}}

Get the complete representation of a single virus change.

```
GET /api/history/:change_id
```

## Example

```
GET /api/history/c93ec9a9.1
```

## Response

```
Status: 200 OK
```

```json
{
	"method_name": "edit",
	"description": "Removed abbreviation ABTV",
	"created_at": "2018-02-06T20:05:31.301000Z",
	"virus": {
		"id": "c93ec9a9",
		"name": "Abaca bunchy top virus",
		"version": 1
	},
	"index": {
		"id": "unbuilt",
		"version": "unbuilt"
	},
	"user": {
		"id": "igboyes"
	},
	"diff": [
		[
			"change",
			"abbreviation",
			[
				"ABTV",
				""
			]
		],
		[
			"change",
			"version",
			[
				0,
				1
			]
		]
	],
	"id": "c93ec9a9.1"
}
```

## Errors

| Status | Message   | Reason                |
| :----- | :-------- | :-------------------- |
| `404`  | Not found | change does not exist |

{{% /endpoint %}}


{{% endpoint name="Revert" permission="modify_virus" %}}

Revert a specific change and all changes that occurred after it. Changes that have been included in index builds cannot be reverted.

```
DELETE /api/history/:change_id
```

## Example

```
DELETE /api/history/c93ec9a9.1
```

## Response

```
Status: 204 No Content
```

## Errors

| Status | Message     | Reason                                                            |
| :----- | :---------- | :---------------------------------------------------------------- |
| `404`  | Not found   | change does not exist                                             |
| `409`  | Not unbuilt | change has been included in an index build and cannot be reverted |
