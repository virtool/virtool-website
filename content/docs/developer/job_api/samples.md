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

The request expects an encoded `json` that has a single key named `quality`.

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