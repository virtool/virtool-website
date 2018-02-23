---
title: "Analyses"
type: "api"
menu:
    api:
        parent: endpoints
        weight: 40
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

# Remove

Remove and existing analysis. This request will fail with ``409 Conflict`` if the analysis is still in progress. Cancel the associated job first.

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

# BLAST Contig

BLAST a contig that was generated as part of a NuVs analysis. This request will fail with ``400 Bad Request`` for non-NuVs analyses.

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

# Remove BLAST

Remove a BLAST record from a NuVs contig. This request will fail with ``400 Bad Request`` for non-NuVs analyses.

```
DELETE /api/analyses/:analysis_id/:sequence_index/blast
```

## Example

```
DELETE /api/analyses/:analysis_id/:sequence_index/blast
```

## Response

```
204 No content
```
