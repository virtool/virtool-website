---
title: "Analyses"
description: "Query and modify analyses."
type: "api"
menu:
  developer:
    parent: API
---

Analyses are the results of a given Virtool analytical pipelines on a single sample.

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
