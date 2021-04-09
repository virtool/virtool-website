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

{{< endpoint "PATCH" "/api/samples/:id" >}}

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


# Upload Reads

Upload a sample reads file.

The file must be one of `reads_1.fq.gz` or `reads_2.fq.gz`.

{{< endpoint "PUT" "/api/samples/:id/reads/:name" >}}

## Parameters

| Name    | Type   | Required | Description                                                           |
| :---    | :----- | :--------| :---------------------------------------------------------------------|
| upload  | string | No       | An `id` that corresponds to a upload to be paired with the reads file |

## Example

{{< request "PUT" "/api/samples/foo/reads/reads_1.fq.gz" />}}

## Response

{{< response "Status: 201 OK" >}}
```json
{
    "id": 1,
    "name": "reads_1.fq.gz",
    "name_on_disk": "reads_1.fq.gz",
    "sample": "foo",
    "size": 9081,
    "upload": 1,
    "uploaded_at": "2015-10-06T20:00:00Z"
}
```
{{< /response >}}

## Errors

| Status | Message                                           | Reason                                                     |
| :----- | :-------------------------------------------------| :----------------------------------------------------------|
| `400`  | File name is not an accepted reads file           | File name must be one of `reads_1.fq.gz` or `reads_2.fq.gz |
| `400`  | File is not compressed                            | File must be `gzip` compressed                             |
| `404`  | Not found                                         | Sample does not exist                                      |
| `409`  | Reads file is already associated with this sample | Given file has already been uploaded                       |


# Upload Artifact

Upload a sample artifact file.

{{< endpoint "POST" "/api/samples/:id/artifacts/" >}}

### Restrictions
File type must be one of the following:
- sam
- bam
- fasta
- fastq
- csv
- tsv
- json

## Parameters

| Name    | Type   | Required | Description                         |
| :---    | :----- | :--------| :-----------------------------------|
| name    | string | Yes      | The name of the file to be uplaoded |
| type    | string | No       | The type of file being uploaded     |

## Example

{{< request "POST" "/api/samples/foo/artifacts?name=small.fq&type=fastq" />}}

## Response

{{< response "Status: 201 OK" >}}
```json
{
    "id": 1,
    "name": "small.fq",
    "name_on_disk": "1-small.fq",
    "sample": "foo",
    "size": 3130756,
    "type": "fastq",
    "uploaded_at": "2015-10-06T20:00:00Z"
}
```
{{< /response >}}

## Errors

| Status | Message                                           | Reason                                                                       |
| :----- | :-------------------------------------------------| :----------------------------------------------------------------------------|
| `400`  | Unsupported sample artifact type                  | File type is not one of the allowed types, see [Restrictions](#restrictions) |
| `404`  | Not found                                         | Sample does not exist                                                        |
| `422`  | Invalid query                                     | `name` is a required field                                                   |


# Download Reads

Download a sample reads file.

The only files available to download are `reads_1.fq.gz` and `reads_2.fq.gz`.

{{< endpoint "GET" "/api/samples/:id/reads/:filename" >}}

## Example

{{< request "POST" "/api/samples/foo/artifacts" />}}

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