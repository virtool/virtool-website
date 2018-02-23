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

```
GET /api/analyses/:analysis_id
```

Get a complete analysis document.

**Headers**

```
Status: 200 OK
```

**Response**

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

```
DELETE /api/analyses/:analysis_id
```

Remove and existing analysis. This request will fail with ``409 Conflict`` if the analysis is still in progress. Cancel the associated job first.

**Example**

```
DELETE /api/analyses/:analysis_id
```

**Headers**

```
Status: 204 No content
```

# BLAST Contig

```
PUT /api/analyses/:analysis_id/:sequence_index/blast
```

BLAST a contig that was generated as part of a NuVs analysis. This request will fail with ``400 Bad Request`` for non-NuVs analyses.

**Example**

```
PUT /api/analyses/yzgqgbld/5/blast
```

**Headers**

```
Status: 200 OK
```

**Response**

```json
{
	"rid": "7M1MFYJ5014",
	"ready": false,
	"last_checked_at": "2018-02-06T19:48:33.500000Z",
	"interval": 3
}
```

# Remove BLAST

```
DELETE /api/analyses/:analysis_id/:sequence_index/blast
```

Remove a BLAST record from a NuVs contig. This request will fail with ``400 Bad Request`` for non-NuVs analyses.

**Example**

```
DELETE /api/analyses/:analysis_id/:sequence_index/blast
```

**Headers**

```
204 No content
```
