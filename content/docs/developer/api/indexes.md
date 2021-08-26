---
title: "Indexes"
description: "Query and create virus indexes."
menu:
    developer:
        parent: API
---

# Find

{{< right read >}}

List all virus reference indexes. Takes no query or input.

{{< endpoint "GET" "/api/indexes" >}}

## Example

{{< request "GET" "/api/indexes" />}}

## Response

{{< response "Status: 200 OK" >}}

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

{{< /response >}}

## Errors

_None_

# List Latest Indexes

{{< right read >}}

List the latest, ready index builds for all references.

{{< endpoint "GET" "/api/indexes?ready=true" >}}

## Example

{{< request "GET" "/api/indexes?ready=true" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
[
    {
        "id": "0egezq4w",
        "version": 0,
        "reference": {
            "id": "nleoiawn",
            "name": "Plant Viruses"
        }
    },
    {
        "id": "nz6j0wwk",
        "version": 1,
        "reference": {
            "id": "mifz0ya0",
            "name": "Clone of Plant Viruses"
        }
    }
]
```

{{< /response >}}

# Get

{{< right read >}}

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

{{< /response >}}

## Errors

| Status | Message   | Reason                                        |
| :----- | :-------- | :-------------------------------------------- |
| `404`  | Not found | index identified by `index_id` does not exist |

# Download Files

{{< right read >}}

Download index files. The accepted filenames are:

- reference.json.gz
- reference.fa.gz
- reference.1.bt2
- reference.2.bt2
- reference.3.bt2
- reference.4.bt4
- reference.rev.1.bt2
- reference.rev.2.bt2

{{< endpoint "GET" "/api/indexes/:id/files/:filename" >}}

## Example

{{< request "GET" "/api/indexes/uskrqsxm/files/reference.json.gz" />}}

## Response

{{< response "Status: 200 OK" />}}

## Errors

| Status | Message                     | Reason                                                                 |
| :----- | :-------------------------- | :--------------------------------------------------------------------- |
| `404`  | Not found                   | The file or index does not exist              
| `403`  | Insufficient Rights         | User does not have read rights on reference 
# Create

See [**References** API Documentation](/docs/developer/api/refs/#create-index)

# Find History

{{< right read >}}

Find the virus changes that are included in a given index build.

{{< endpoint "GET" "/api/indexes/:id/history" >}}

## Example

```
GET /api/indexes/bznqwjsa/history
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
