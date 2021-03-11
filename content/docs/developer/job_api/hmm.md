---
title: "HMM"
description: "Manage and query HMM annotations and files."
menu:
developer:
identifier: job_api_hmm 
parent: Job API
---

# Get {#get}

Get the complete representation of a single HMM annotation.

{{< endpoint "GET" "/api/hmms/:id" >}}

## Example

{{< request "GET" "/api/hmms/zltnktou" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
  "families": {
    "None": 1,
    "Geminiviridae": 203
  },
  "total_entropy": 72.08,
  "length": 136,
  "cluster": 3,
  "entries": [
    {
      "accession": "NP_040323.1",
      "gi": "9626084",
      "organism": "Pepper huasteco yellow vein virus",
      "name": "AL2 protein"
    },
    {
      "accession": "NP_044924.1",
      "gi": "9629639",
      "organism": "Tomato mottle Taino virus",
      "name": "transactivator protein"
    }
  ],
  "genera": {
    "Begomovirus": 197,
    "Topocuvirus": 1,
    "None": 2,
    "Curtovirus": 4
  },
  "mean_entropy": 0.53,
  "count": 216,
  "names": [
    "AC2 protein",
    "C2 protein",
    "AC2"
  ],
  "hidden": false,
  "id": "zltnktou"
}
```

{{< /response >}}

## Errors

| Status | Message   | Reason                        |
| :----- | :-------- | :---------------------------- |
| `404`  | Not found | HMM annotation does not exist |

# Download Profiles

Get the `profiles.hmm` used in analysis workflows requiring `hmmer`.

{{< endpoint "GET" "/download/hmms/profiles.hmm" >}}

## Example

{{< request "GET" "/download/hmms/profiles.hmm" />}}

## Response

{{< response "Status: 200 OK" />}}

## Error

| Status | Message   | Reason                                                          |
| :----- | :-------- | :-------------------------------------------------------------- |
| `404`  | Not found | HMM data hasn't been installed or `profiles.hmm` does not exist |

# Download HMM Annotations

Get a gzipped JSON file `annotations.json.gz` containing a list of representations of all HMM annotations.

## Example

{{< endpoint "GET" "/api/hmms/files/annotations.json.gz" >}}

## Response

{{< response "Status: 200 OK" />}}



