---
title: "Analyses"
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 50
---

Analyses are the results of a given Virtool analytical pipelines on a single sample.

# Get

Get a complete analysis document.

```
GET /api/analyses/:analysis_id
```

## Example

```
GET /api/analyses/uskrqsxm
```

## Response

```
Status: 200 OK
```

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

## Errors

| Status | Message             | Reason                                                                           |
| :----- | :------------------ | :------------------------------------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the required sample rights to view the analysis             |
| `404`  | Not found           | `sample_id` in URL does not exist                                                |


# Remove

Remove and existing analysis.

This request will fail if the analysis is still in progress. Cancel the associated job first.

```
DELETE /api/analyses/:analysis_id
```

## Example

```
DELETE /api/analyses/:analysis_id
```

## Response

```
Status: 204 No content
```

## Errors

| Status | Message                   | Reason                                                                           |
| :----- | :------------------------ | :------------------------------------------------------------------------------- |
| `403`  | Insufficient rights       | client does not have the required sample rights to remove the analysis           |
| `404`  | Not found                 | `sample_id` in URL does not exist                                                |
| `409`  | Analysis is still running | analysis job is still in progress                                                |


# BLAST Contig

BLAST a contig that was generated as part of a NuVs analysis.

Calling this endpoint for a sequence that has already been BLASTed will result in the old result being overwritten. This request will fail with ``400 Bad Request`` for non-NuVs analyses.

```
PUT /api/analyses/:analysis_id/:sequence_index/blast
```

## Example

```
PUT /api/analyses/yzgqgbld/5/blast
```

## Response

```
Status: 200 OK
```

```json
{
	"rid": "7M1MFYJ5014",
	"ready": false,
	"last_checked_at": "2018-02-06T19:48:33.500000Z",
	"interval": 3
}
```

## Errors

| Status | Message                   | Reason                                                                           |
| :----- | :------------------------ | :------------------------------------------------------------------------------- |
| `400`  | Not a NuVs analysis       | analysis cannot be BLASTed because it is not a NuVs analysis                     |
| `403`  | Insufficient rights       | client does not have the required sample rights to remove the analysis           |
| `404`  | Not found                 | `sample_id` in URL does not exist                                                |
| `404`  | Sample not found          | sample associated with analysis was not found                                    |
| `409`  | Sequence not found        | `sequence_index` in URL does not exist                                           |
| `409`  | Analysis is still running | analysis job is still in progress and cannot be BLASTed                          |
