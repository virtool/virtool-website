---
title: "Subtractions"
description: "Query and modify subtractions"
menu:
    developer:
        identifier: job_api_subtractions
        parent: Job API

---

# Upload File

Upload a new subtraction file to associate with an existing subtraction.

It will automatically resolve the type of subtraction file, but a `type` can be sent in a request to override this.

The name of the file to be uploaded must be be one of the following:
* `reference.fa.gz`
* `reference.1.bt2`
* `reference.2.bt2`
* `reference.3.bt2`
* `reference.4.bt4`
* `reference.rev.1.bt2`
* `reference.rev.2.bt2`

{{< endpoint "POST" "/api/subtractions/:id/files" >}}

## Parameters

| Name   | Type   | Required  | Description                                                                             |
| :---   | :----- | :-------- | :-------------------------------------------------------------------------------------- |
| name   | string | Yes       | The name of the subtraction file to upload (must be one of the file names listed above) |
| type   | string | No        | The type of the subtraction file                                                        |

## Example

{{< request "POST" "/api/subtractions/jrosgvey/files?name=subtraction.1.bt2" />}}

## Response

{{< response "Status: 201 OK" >}}
```json
{
  "id": 1,
  "name": "subtraction.1.bt2",
  "size": 12,
  "subtraction": "jrosgvey",
  "type": "bowtie2"
}
```
{{</ response >}}

## Errors

 Status | Message                            | Reason                                                                 |
| :----- | :---------------------------------| :----------------------------------------------------------------------|
| `400`  | Unsupported subtraction file name | File does not have one of the accepted filenames, see `name` parameter |
| `400`  | File name already exists          | File name is already associated with this subtraction                  |
| `404`  | Not found                         | Subtraction does not exist                                             |
| `422`  | Invalid query                     | `name` is a required parameter                                         |


# Finalize

Finalize a subtraction by setting `ready` to `true` and setting a sample's `gc` field based on request data.

`gc` is an object that describes the ratios of nucleotides in subtraction sequence data.

The request expects an encoded `json`, and the data should be made accessible under a `gc` key.

{{< endpoint "PATCH" "/api/subtractions/:id" >}}

## Example

{{< request "PATCH" "/api/subtractions/ndflgjsl" >}}
```json
{
  "gc": {
    "a": 0.319,
    "c": 0.18,
    "g": 0.18,
    "n": 0.002,
    "t": 0.319
  }
}
```
{{< /request >}}

## Response

{{< response "Status: 201 OK" >}}
```json
{
  "ready": true,
	"is_host": true,
	"file": {
		"id": "djbxvhmy-ATgenomeTAIR9.171",
		"name": "ATgenomeTAIR9.171"
	},
	"user": {
		"id": "igboyes"
	},
	"job": {
		"id": "rjbszwmm"
	},
	"nickname": "Foobar",
	"id": "ndflgjsl",
  "gc": {
    "a": 0.319,
    "c": 0.18,
    "g": 0.18,
    "n": 0.002,
    "t": 0.319
  }
}
```
{{</ response >}}

## Errors

 Status | Message                                 | Reason                                                                 |
| :----- | :--------------------------------------| :----------------------------------------------------------------------|
| `404`  | Not found                              | Subtraction does not exist                                             |
| `409`  | Subtraction has already been finalized | Finalize has already been called on this subtraction                   |
| `422`  | Invalid input                          | `gc` key was not found in the given `json`                             |


# Download

Download a Bowtie2 index file or a FASTA file for a given subtraction.

The name of the file must be one of the accepted files described in [Upload File](#upload-file).

{{< endpoint "GET" "/api/subtractions/:id/files/:name" >}}

## Example

{{< request "GET" "/api/subtractions/ndflgjsl/files/subtraction.fa.gz" />}}

## Response

{{< response "Status: 200 OK" />}}

## Errors

 Status | Message                                 | Reason                                          |
| :----- | :--------------------------------------| :-----------------------------------------------|
| `400`  | Unsupported subtraction file name      | File name not of one of the accepted file names |
| `404`  | Not found                              | Subtraction or subtraction file does not exist  |