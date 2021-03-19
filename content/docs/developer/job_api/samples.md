---
title: "Samples"
description: "Query and modify samples"
menu:
    developer:
        identifier: job_api_samples
        parent: Job API

---

# Finalize

Finalize a sample being created by setting `ready` to `true` and setting `quality` based on request data.

## Parameters

| Name    | Type   | Required  | Description                                                                   |
| :---    | :----- | :-------- | :---------------------------------------------------------------------------- |
| quality | object | Yes       | An object containing data that will be assigned to a sample's `quality` field |

## Example

{{< request "PATCH" "/api/samples/xzcvmafq" >}}
```json
{
    "quality" : {...}
}
```
{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
    "name": "Test A",
    "host": "Vine",
    "isolate": "Isolate A1",
    "nuvs": false,
    "pathoscope": false,
    "created_at": "2018-02-07T00:25:53.786000Z",
    "imported": false,
    "archived": false,
    "user": {
        "id": "igboyes"
    },
    "id": "xzcvmafq",
    "quality": {...},
    "ready": true,
    "notes": "This is the first test.",
    "labels": ["fndjfkfn", "djfnkdhf"]
}

```
{{< /response >}}

## Errors

| Status | Message                       | Reason        |
| :----- | :------------ | :---------------------------- |
| `422`  | Invalid input | `quality` is a required field |

# Download Reads

Download a sample reads file.

The only files available to download are `reads_1.fq.gz` and `reads_2.fq.gz`.

{{< endpoint "GET" "/api/samples/:id/reads/:filename" >}}

## Example
{{< request "GET" "/api/samples/foo/reads/reads_1.fq.gz" />}}

## Response
{{< response "Status: 200 OK" />}}

## Errors

| Status | Message                             | Reason                                                                           |
| :----- | :---------------------------------- | :------------------------------------------------------------------------------- |
| `404`  | Not found                           | Either the sample or file does not exist                                         |


# Download Artifacts

Download a sample artifact file.

{{< endpoint "GET" "/api/samples/:id/artifacts/:filename" >}}

## Example
{{< request "GET" "/api/samples/foo/artifacts/reads_1.fq.gz" />}}

## Response
{{< response "Status: 200 OK" />}}

## Errors

| Status | Message                             | Reason                                                                           |
| :----- | :---------------------------------- | :------------------------------------------------------------------------------- |
| `404`  | Not found                           | Either the sample or file does not exist                                         |