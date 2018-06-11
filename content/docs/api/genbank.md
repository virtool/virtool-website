---
title: "Genbank"
description: "Interact with NCBI Genbank via the Virtool server."
type: "api"
menu:
    api:
        parent: Endpoints
---

# Get

Get a Virtool-style sequence document for the given accession.

The data is retrieved from GenBank and converted into a palatable format.

```
GET /api/genbank/:accession
```

## Example

```
GET /api/genbank/KJ406323
```

## Response

```
Status: 200 OK
```

```json
{
    "id": "KJ406323",
    "definition": "Tobacco mosaic virus isolate TMV-tNK coat protein",
    "sequence": "ATGTCTTACAGTATCACTACTCCATCTCAGTTCGTGTTCTTGTCATCAGCGZ...",
    "host": "Solanum lycopersicum"    
}
```

## Errors

| Status | Message       | Reason                                             |
| :----- | :------------ | :------------------------------------------------- |
| `404`  | Not found     | accession does not exist on Genbank                |
