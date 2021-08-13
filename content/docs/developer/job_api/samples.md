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

| Name    | Type   | Required | Description                                                                   |
| :------ | :----- | :------- | :---------------------------------------------------------------------------- |
| quality | object | Yes      | An object containing data that will be assigned to a sample's `quality` field |

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

| Status | Message       | Reason                        |
| :----- | :------------ | :---------------------------- |
| `422`  | Invalid input | `quality` is a required field |


# Upload Reads

Upload a sample reads file.

The file must be one of `reads_1.fq.gz` or `reads_2.fq.gz`.

{{< endpoint "PUT" "/api/samples/:id/reads/:name" >}}

## Parameters

| Name   | Type   | Required | Description                                                           |
| :----- | :----- | :------- | :-------------------------------------------------------------------- |
| upload | string | No       | An `id` that corresponds to a upload to be paired with the reads file |

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
| :----- | :------------------------------------------------ | :--------------------------------------------------------- |
| `400`  | File name is not an accepted reads file           | File name must be one of `reads_1.fq.gz` or `reads_2.fq.gz |
| `400`  | File is not compressed                            | File must be `gzip` compressed                             |
| `404`  | Not found                                         | Sample does not exist                                      |
| `409`  | Reads file is already associated with this sample | Given file has already been uploaded                       |


# Upload Artifact

Upload a sample artifact file.

{{< endpoint "POST" "/api/samples/:id/artifacts" >}}

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

| Name | Type   | Required | Description                         |
| :--- | :----- | :------- | :---------------------------------- |
| name | string | Yes      | The name of the file to be uplaoded |
| type | string | No       | The type of file being uploaded     |

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

| Status | Message                          | Reason                                                                       |
| :----- | :------------------------------- | :--------------------------------------------------------------------------- |
| `400`  | Unsupported sample artifact type | File type is not one of the allowed types, see [Restrictions](#restrictions) |
| `404`  | Not found                        | Sample does not exist                                                        |
| `422`  | Invalid query                    | `name` is a required field                                                   |


# Download Reads

Download a sample reads file.

The only files available to download are `reads_1.fq.gz` and `reads_2.fq.gz`.

{{< endpoint "GET" "/api/samples/:id/reads/:filename" >}}

## Example

{{< request "GET" "/api/samples/foo/reads/reads_1.fq.gz" />}}

## Response

{{< response "Status: 200 OK" />}}

## Errors

| Status | Message   | Reason                                   |
| :----- | :-------- | :--------------------------------------- |
| `404`  | Not found | Either the sample or file does not exist |


# Download Artifact

Download a sample artifact file.

{{< endpoint "GET" "/api/samples/:id/artifacts/:filename" >}}

## Example
{{< request "GET" "/api/samples/foo/artifacts/quality.tsv" />}}

## Response
{{< response "Status: 200 OK" />}}

## Errors

| Status | Message   | Reason                                   |
| :----- | :-------- | :--------------------------------------- |
| `404`  | Not found | Either the sample or file does not exist |


# Create Cache

Create a cache.

Caches are used to store processed reads created during the analysis of a sample. They are identified by a workflow-defined key that is unique within the sample. Keys should be derived from parameters used to create the data being stored in the cache.

Future analysis runs can check for an existing cache before running the read processing.

{{< endpoint "POST" "/api/samples/:id/caches" >}}

## Example

{{< request "POST" "/api/samples/xj8721aa/caches" />}}

```json
{
    "key": "skewer-a8o5nklskh"
}
```

## Response

{{< response "Status: 201 Created" >}}
```json
{
    "id": "sjlk2901",
    "created_at": "2018-02-07T00:25:53.786000Z",
    "files": [],
    "key": "skewer-a8o5nklskh",
    "legacy": false,
    "missing": false,
    "paired": false,
    "ready": false,
    "sample": {
        "id": "xj8721aa"
    }
}
```
{{< /response >}}

## Parameters

| Name | Type   | Required | Description                                           |
| :--- | :----- | :------- | :---------------------------------------------------- |
| key  | string | Yes      | The key for the cache the is unique within the sample |


## Errors

| Status | Message                                       | Reason                    |
| :----- | :-------------------------------------------- | :------------------------ |
| `404`  | Not found                                     | Sample does not exist     |
| `409`  | Cache with key already exists for this sample | Cache was already created |


# Finalize Cache

Caches must be finalized after being created and having required reads uploaded.

Finalization requires a valid FastQC quality object to be attached to the cache record. Once finalized, a cache will be available to other
analyses using the same cache key on the sample sample.

{{< endpoint "PATCH" "/api/samples/:id/caches/:key" >}}

## Parameters

| Name    | Type   | Required | Description                                  |
| :------ | :----- | :------- | :------------------------------------------- |
| quality | object | Yes      | The FastQC quality JSON object for the cache |

## Example

{{< request "PATCH" "/api/samples/xj8721aa/caches/skewer-a8o5nklskh" />}}

```json
{
    "quality": {...}
}
```

## Response

{{< response "Status: 200 OK" >}}
```json
{
    "id": "sjlk2901",
    "created_at": "2018-02-07T00:25:53.786000Z",
    "files": [
        
    ],
    "key": "skewer-a8o5nklskh",
    "legacy": false,
    "missing": false,
    "paired": false,
    "quality": {...},
    "ready":  True,
    "sample": {
        "id": "xj8721aa"
    }
}
```
{{< /response >}}


# Upload Cache Reads

Upload a reads file that should be part of a cache.

The file must be one of `reads_1.fq.gz` or `reads_2.fq.gz`.

{{< endpoint "PUT" "/api/samples/:id/caches/:key/reads/:name" >}}

## Example

{{< request "PUT" "/api/samples/xj8721aa/caches/skewer-a8o5nklskh/reads/reads_1.fq.gz" />}}

## Response

{{< response "Status: 200 OK" />}}

## Errors

| Status | Message                                             | Reason                    |
| :----- | :-------------------------------------------------- | :------------------------ |
| `404`  | Not found                                           | Sample does not exist     |
| `409`  | Cache with key {key} already exists for this sample | Cache was already created |


# Upload Cache Artifact


Upload and artifact file should be part of a cache.

For example, metadata files from read trimming or quality assessment ouput could be uploaded as artifacts.

{{< endpoint "POST" "/api/samples/:id/caches/:key/artifacts?name" >}}

## Parameters

| Name   | Type   | Required | Description                   |
| ------ | ------ | -------- | ----------------------------- |
| `name` | string | Yes      | The name of the artifact file |

## Example

{{< request "POST" "/api/samples/:id/caches/skewer-a8o5nklskh/artifacts?quality.txt" />}}

## Response

{{< response "Status: 201 Created" />}}

## Errors

| Status | Message   | Reason                                         |
| :----- | :-------- | :--------------------------------------------- |
| `404`  | Not found | The sample or cache does not exist             |
| `409`  | Conflict  | A file with the provided `name` already exists |

# Download Cache Reads

Download cached reads.

Cached reads are read files that were processed as part of an analysis job. The processed reads are cached for further analyses on the same sample using the same cache key.

The only files available to download are `reads_1.fq.gz` and `reads_2.fq.gz`.

{{< endpoint "GET" "/api/samples/:id/caches/:key/reads/:filename" >}}

## Example

{{< request "GET" "/api/samples/:id/caches/:key/reads/reads_1.fq.gz" />}}

## Response
{{< response "Status: 200 OK" />}}

## Errors

| Status | Message   | Reason                                    |
| :----- | :-------- | :---------------------------------------- |
| `404`  | Not found | The sample, cache, or file does not exist |


# Download Cache Artifact

Download a artifact file belonging to a cache.

Cached artifacts are files arbitrarily stored by an analysis job that related the processed the reads before analysis. An example would be the logs or data files created during trimming or QC.

{{< endpoint "GET" "/api/samples/:id/caches/:key/artifacts/:filename" >}}

## Example

{{< request "GET" "/api/samples/:id/caches/:key/artifacts/fastqc.txt" />}}

## Response
{{< response "Status: 200 OK" />}}

## Errors

| Status | Message   | Reason                                    |
| :----- | :-------- | :---------------------------------------- |
| `404`  | Not found | The sample, cache, or file does not exist |
