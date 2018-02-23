---
title: "Indexes"
type: "api"
menu:
    api:
        parent: endpoints
        weight: 60
---

## Find

```
GET /api/indexes
```

Find virus reference indexes. Takes no query or input.

**Headers**

```
Status: 200 OK
```

**Response**

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


## Get

```
GET /api/indexes/:index_id
GET /api/indexes/:index_version
```

Get indexes by their unique id or version number.

**Example**

```
GET /api/indexes/jiwncaqr
GET /api/indexes/0
```

**Headers**

```
Status: 200 OK
```

**Response**

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


## Get Unbuilt

```
GET /api/indexes/unbuilt
```

Return all history associated with unbuilt changes. This information would be included next time an index build is triggered.

**Headers**

```
Status: 200 OK
```

**Response**

```json
{
	"history": [
		{
			"method_name": "remove_isolate",
			"description": "Removed Isolate DRC 6",
			"created_at": "2018-02-06T22:14:34.267000Z",
			"virus": {
				"id": "53a851f3",
				"name": "African cassava mosaic virus",
				"version": 1
			},
			"index": {
				"id": "unbuilt",
				"version": "unbuilt"
			},
			"user": {
				"id": "igboyes"
			},
			"id": "53a851f3.1"
		}
	]
}
```


## Create

```
POST /api/indexes
```

Create an index by starting a new index build job.

**Headers**

```
Status: 201 Created
```

**Response**

```json
{
	"version": 1,
	"created_at": "2018-02-06T22:03:00.186000Z",
	"virus_count": null,
	"manifest": {
		"c93ec9a9": 1,
        ...
	},
	"ready": false,
	"has_files": true,
	"user": {
		"id": "igboyes"
	},
	"job": {
		"id": "plfttrug"
	},
	"id": "bznqwjsa"
}
```

## Find History {#find_history}

```
GET /api/indexes/:index_id/history
GET /api/indexes/:index_version/history
```

Find the virus changes that are included in a given index build.

**Example**

```
GET /api/indexes/bznqwjsa/history
GET /api/indexes/1/history
```

**Headers**

```
Status: 200 OK
```

**Response**

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
