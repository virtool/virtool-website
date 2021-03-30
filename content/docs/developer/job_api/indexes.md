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

Upload a file that should be persisted with an index.

The upload request is expected to use the encoding type `multipart/form-data`. The file data should be made accessible under the `file` key.

The name of the file to be uploaded must be be one of the following:
* `reference.json.gz`
* `reference.fa.gz`
* `reference.1.bt2`
* `reference.2.bt2`
* `reference.3.bt2`
* `reference.4.bt4`
* `reference.rev.1.bt2`
* `reference.rev.2.bt2`

{{< endpoint "POST" "/api/indexes/:id/files" >}}

## Parameters

| Name   | Type   | Required  | Description                                                                |
| :---   | :----- | :-------- | :------------------------------------------------------------------------- |
| name   | string | Yes       | Name of a index file to upload (must be one of the file names listed above)|

## Example

{{< request "POST" "/api/indexes/uskrqsxm/files?name=reference.fa.gz" />}}

## Response

{{< response "Status: 201 OK" >}}
```json
{
  "id": 1,
  "name": "reference.fa.gz",
  "reference": "bar",
  "size": 7205747,
  "type": "fasta"
}
```
{{</ response >}}

## Errors

| Status | Message                     | Reason                                                                 |
| :----- | :-------------------------- | :--------------------------------------------------------------------- |
| `400`  | Unsupported index file name | Given file is not one of the accepted file names, see `name` parameter |
| `403`  | Insufficient rights         | Upload file rights required                                            |
| `404`  | Not found                   | Index does not exist                                                   |
| `409`  | File name already exists    | File is already associated with this index                             |
| `422`  | Invalid query               | `name` is a required field

# Download Files

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
| `404`  | Not found                   | The file or index does not exist                                       |


# Finalize

Finish an index build job.

{{< endpoint "PATCH" "/api/indexes/:id" >}}

## Example

{{< request "PATCH" "/api/indexes/uskrqsxm" />}}

## Response

{{< request "PATCH" "/api/indexes/uskrqsxm" >}}
```json
{
    "created_at": "2015-10-06T20:00:00Z",
    "has_files": true,
    "has_json": false,
    "id": "u3cuwaoq",
    "job": {
        "id": "xjqvxigh"
    },
    "manifest": "manifest",
    "ready": true,
    "reference": {
        "id": "foo"
    },
    "user": {
        "id": "test"
    },
    "version": 9
}
```
{{</ response >}}

## Errors
| Status | Message                                                             | Reason                                                                |
| :----- | :-------------------------------------------------------------------| :---------------------------------------------------------------------|
| `404`  | Index does not exist                                                | No index associated with given id                                     |
| `404`  | Reference associated with index does not exist                      | Reference id linked to index does not exist                           |
| `409`  | A FASTA file must be uploaded in order to finalize index            | A `reference.fa.gz` file is required to finalize any index            |
| `409`  | Reference requires that all Bowtie2 index files have been uploaded  | Genome references require that all BT2 index files have been uploaded |