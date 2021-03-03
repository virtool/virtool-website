---
title: "Samples"
description: "Query and modify samples"
menu:
    developer:
        identifier: job_api_samples
        parent: Job API

---

# Finalize

Finalize a sample being created by setting `ready` to `True` and setting `quality` based on request data.

The request expects an encoded `json`, and the data should be made accessible under a `quality` key.

## Example

{{< request "PATCH" "/api/samples/xzcvmafq" >}}
{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
    "id": "xzcvmafq",
    "quality": {
        "quality": {

        }
    },
    "ready": true
}
```
{{< /response >}}

## Errors

| Status | Message                       | Reason        |
| :----- | :------------ | :---------------------------- |
| `422`  | Invalid input | `quality` is a required field |