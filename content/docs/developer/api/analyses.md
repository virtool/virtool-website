---
title: "Analyses"
description: "Query and modify analyses."
menu:
    developer:
        parent: API
---

Analyses are the results of a given Virtool analytical workflows on a single sample.

# Get

{{< right read >}}

Get a complete analysis document.

{{< endpoint "GET" "/api/analyses/:id" >}}

## Example

{{< request "GET" "/api/analyses/uskrqsxm" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
    "id": "uskrqsxm",
    "ready": true,
    "created_at": "2017-10-03T21:35:54.813000Z",
    "job": {
        "id": "afovbrnx"
    },
    "algorithm": "pathoscope_bowtie",
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
    "read_count": 23953,
    "diagnosis": [...]
```

{{< /response >}}

## Errors

| Status | Message                      | Reason                                                               |
| :----- | :--------------------------- | :------------------------------------------------------------------- |
| `400`  | Parent sample does not exist | the parent sample for the analysis could not be found                |
| `403`  | Insufficient rights          | client does not have the required sample rights to view the analysis |
| `404`  | Not found                    | `analysis_id` in URL does not exist                                  |

# Remove

{{< right write >}}

Remove and existing analysis.

This request will fail if the analysis is still in progress. Cancel the associated job first.

{{< endpoint "DELETE" "/api/analyses/:id" >}}

## Example

{{< request "DELETE" "/api/analyses/:analysis_id" />}}

## Response

{{< response "Status: 204 No content" />}}

## Errors

| Status | Message                      | Reason                                                                 |
| :----- | :--------------------------- | :--------------------------------------------------------------------- |
| `400`  | Parent sample does not exist | the parent sample for the analysis could not be found                  |
| `403`  | Insufficient rights          | client does not have the required sample rights to remove the analysis |
| `404`  | Not found                    | analysis does not exist                                                |
| `409`  | Analysis is still running    | analysis job is still in progress                                      |

# BLAST Contig

{{< right write >}}

BLAST a contig that was generated as part of a NuVs analysis.

Calling this endpoint for a sequence that has already been BLASTed will result in the old result being overwritten. This request will fail with {{< inline-status 400 >}} for non-NuVs analyses.

{{< endpoint "PUT" "/api/analyses/:id/:sequence_index/blast" >}}

## Example

{{< request "PUT" "/api/analyses/yzgqgbld/5/blast" >}}

```json
{}
```

{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
    "rid": "7M1MFYJ5014",
    "ready": false,
    "last_checked_at": "2018-02-06T19:48:33.500000Z",
    "interval": 3
}
```

{{< /response >}}

## Errors

| Status | Message                      | Reason                                                                 |
| :----- | :--------------------------- | :--------------------------------------------------------------------- |
| `400`  | Parent sample does not exist | sample associated with analysis was not found                          |
| `403`  | Insufficient rights          | client does not have the sample rights required to change the analysis |
| `404`  | Analysis not found           | analysis does not exist                                                |
| `404`  | Sequence not found           | sequence does not exist                                                |
| `409`  | Not a NuVs analysis          | analysis cannot be BLASTed because it is not a NuVs analysis           |
| `409`  | Analysis is still running    | analysis job is still in progress and cannot be BLASTed                |


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


# Download Analysis Document

Download a CSV or Excel file that represents an pathoscope analysis document.

Supports `csv` or `xlsx` extensions.

{{< endpoint "GET" "/api/analyses/document/:id.extension" >}}

## Example

{{< request "GET" "/api/analyses/document/uskrqsxm.csv" />}}

## Response

{{< response "Status: 200 OK" >}}
{{</ response >}}

## Errors

| Status | Message                                      | Reason                      |
| :----- | :------------------------------------------- | :---------------------------|
| `404`  | Not found                                    | The analysis does not exist |