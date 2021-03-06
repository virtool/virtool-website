---
title: "Genbank"
description: "Interact with NCBI Genbank via the Virtool server."
menu:
  developer:
    parent: API
---

# Get

Get a Virtool-style sequence document for the given accession.

The data is retrieved from GenBank and converted into a palatable format.

{{< endpoint "GET" "/api/genbank/:accession" >}}

## Example

{{< request "GET" "/api/genbank/KJ406323" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
  "id": "KJ406323",
  "definition": "Tobacco mosaic virus isolate TMV-tNK coat protein",
  "sequence": "ATGTCTTACAGTATCACTACTCCATCTCAGTTCGTGTTCTTGTCATCAGCGZ...",
  "host": "Solanum lycopersicum"
}
```

{{< /response >}}

## Errors

| Status | Message                 | Reason                                       |
| :----- | :---------------------- | :------------------------------------------- |
| `404`  | Not found               | accession does not exist on Genbank          |
| `502`  | Could not reach Genbank | the Virtool server could not connect to NCBI |
