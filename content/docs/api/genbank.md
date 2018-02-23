---
title: "Genbank"
type: "api"
---

Provides endpoints for interacting with NCBI Genbank via the Virtool server.

## Get {#get}

```
GET /api/genbank/:accession
```

Get a Virtool-style sequence document for the given accession. The data is retrieved from GenBank and converted into a
palatable format.

**Example**

```
GET /api/genbank/KJ406323
```

**Headers**
```
Status: 200 OK
```

**Response**
```json
{
    "id": "KJ406323",
    "definition": "Tobacco mosaic virus isolate TMV-tNK coat protein",
    "sequence": "ATGTCTTACAGTATCACTACTCCATCTCAGTTCGTGTTCTTGTCATCAGCGZ...",
    "host": "Solanum lycopersicum"    
}
```
