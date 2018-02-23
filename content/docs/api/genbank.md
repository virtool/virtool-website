---
title: "Genbank"
type: "api"
menu:
    api:
        parent: endpoints
        weight: 130
---

Provides endpoints for interacting with NCBI Genbank via the Virtool server.

# Get {#get}

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
