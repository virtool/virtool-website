---
title: "Analyses"
description: "Query and modify analyses"
menu:
    developer:
        identifier: job_api_analyses
        parent: Job API
        
---

Analyses are the results of a given Virtool analytical workflows on a single sample.

# Get

Get a complete analysis document.

Only analysis jobs have access to this endpoint and only on the analysis the are running.

{{< endpoint "GET" "/api/analyses/:id" >}}

## Example

{{< request "GET" "/api/analyses/uskrqsxm" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
    "id": "uskrqsxm",
    "created_at": "2017-10-03T21:35:54.813000Z",
    "job": {
        "id": "afovbrnx"
    },
    "files": [
      {
        "analysis": "uskrqsxm",
        "description": null,
        "format": "fasta",
        "id": 1,
        "name": "results.fa",
        "name_on_disk": "1-results.fa",
        "size": 20466,
        "uploaded_at": "2017-10-03T21:35:54.813000Z"
      }
    ],
    "workflow": "pathoscope_bowtie",
    "sample": {
        "id": "kigvhuql",
        "name": "Test 1"
    },
    "index": {
        "id": "qldihken",
        "version": 0
    },
    "user": {
        "id": "igboyes"
    },
    "subtractions": [
      {
        "id": "yhxoynb0",
        "name": "Arabidopsis Thaliana"
      }
    ],
    "ready": false
}
```

{{< /response >}}

## Errors

| Status | Message             | Reason                          |
| :----- | :------------------ | :------------------------------ |
| `403`  | Insufficient rights | Job read rights on the analysis |
| `404`  | Not found           | The analysis does not exist     |


# Upload File

Upload a file that should be persisted with the analysis.

Uploaded files will be available for download via the API or browser client.

The upload request is expected to use the encoding type `multipart/form-data`. The upload file should be accessible under the `file` key.

Additional input including the file's `name` and `format` should be included in the query string.

{{< endpoint "POST" "/api/analyses/:id/files" >}}

## Parameters

| Name   | Type   | Required  | Description                                                                             |
| :---   | :----- | :-------- | :-------------------------------------------------------------------------------------- |
| name   | string | Yes       | An original name to retain for the file                                                 |
| format | string | No        | The analysis file format (one of: `sam`, `bam`, `fasta`, `fastq`, `csv`, `tsv`, `json`) |

## Example

{{< request "POST" "/api/analyses/uskrqsxm/files?name=results.fa&format=fasta" >}}
{{< /request >}}

## Response

{{< response "Status: 201 OK" >}}
```json
{
  "analysis": "uskrqsxm",
  "description": null,
  "format": "fasta",
  "id": 1,
  "name": "results.fa",
  "name_on_disk": "1-results.fa",
  "size": 20466,
  "uploaded_at": "2017-10-03T21:35:54.813000Z"
}
```
{{</ response >}}

## Errors

| Status | Message                                  | Reason                                       |
| :----- | :--------------------------------------- | :------------------------------------------- |
| `400`  | Unsupported analysis file format         | Given format not an acceptable format        |
| `403`  | Insufficient rights                      | Upload file rights required                  |
| `404`  | Not found                                | The analysis does not exist                  |
| `409`  | File is already associated with analysis | File name was found in the analysis document |
| `422`  | Invalid query                            | `name` is a required field                   |

# Download File

Download an analysis file that is associated with the given analysis.

The file `id` corresponds to the `id` of a file found in the `files` list of a `GET` response.

{{< endpoint "GET" "/api/analyses/:id/files/:id" >}}

## Example

{{< request "GET" "/api/analyses/uskrqsxm/files/1" />}}

## Response

{{< response "Status: 200 OK" >}}
{{</ response >}}

## Errors

| Status | Message                                      | Reason                                                     |
| :----- | :------------------------------------------- | :--------------------------------------------------------- |
| `404`  | Not found                                    | The analysis file does not exist                           |
| `404`  | Uploaded file not found at expected location | The file was not found in the local `analyses` data folder |

# Finalize

Finish and set the results of an analysis.

Sets the `results` field with the passed results object and the `ready` field to `true`. After this request succeeds, the analysis is viewable in the browser client.

This request will fail with `409` on analyses that have already been finalized.

{{< endpoint "PATCH" "/api/analyses/:id" >}}

## Parameters

| Name    | Type   | Required | Description                                       |
| :------ | :----- | :------- | :------------------------------------------------ |
| results | object | Yes      | A freeform object that stores the analysis result |

## Example

{{< request "PATCH" "/api/analyses/uskrqsxm" >}}
```json
{
    "results": {
        "foo": "bar"
    }
}
```
{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
    "id": "uskrqsxm",
    "created_at": "2017-10-03T21:35:54.813000Z",
    "job": {
        "id": "afovbrnx"
    },
    "workflow": "pathoscope_bowtie",
    "sample": {
        "id": "kigvhuql",
        "name": "Test 1"
    },
    "index": {
        "id": "qldihken",
        "version": 0
    },
    "user": {
        "id": "igboyes"
    },
    "subtractions": [
      {
        "id": "yhxoynb0",
        "name": "Arabidopsis Thaliana"
      }
    ],
    "ready": true,
    "results": {
        "foo": "bar"
    }
}
```
{{</ response >}}

## Errors

| Status | Message                                     | Reason                                                 |
| :----- | :------------------------------------------ | :----------------------------------------------------- |
| `403`  | Insufficient rights                         | The job does not have the modify right on the analysis |
| `404`  | Not found                                   | Analysis does not exist                                |
| `409`  | There is already a result for this analysis | Analysis job is already finalized                      |


# Remove

**NOT IMPLEMENTED**

Remove an incomplete analysis.

Finalized analyses cannot be removed over the jobs API. This must be done via the public API or browser client. Jobs can only remove the analysis they are running.

{{< endpoint "DELETE" "/api/analyses/:id" >}}

## Example

{{< request "DELETE" "/api/analyses/:analysis_id" />}}

## Response

{{< response "Status: 204 No content" />}}

## Errors

| Status | Message               | Reason                                                                                         |
| :----- | :-------------------- | :--------------------------------------------------------------------------------------------- |
| `403`  | Insufficient rights   | Client does not have the required sample rights to remove the analysis                         |
| `404`  | Not found             | Analysis does not exist                                                                        |
| `409`  | Analysis is finalized | Analysis job is finalized with `ready` set `true`. It can only be removed from the regular API |
