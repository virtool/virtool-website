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

The name of the file to be uploaded must be one of the following:
* `subtraction.fa.gz`
* `subtraction.1.bt2`
* `subtraction.2.bt2`
* `subtraction.3.bt2`
* `subtraction.4.bt4`
* `subtraction.rev.1.bt2`
* `subtraction.rev.2.bt2`

{{< endpoint "PUT" "/api/subtractions/:id/files/:name" >}}

## Example

{{< request "PUT" "/api/subtractions/jrosgvey/files/subtraction.1.bt2" />}}

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
| `404`  | Not found                         | Subtraction does not exist                                             |
| `404`  | Unsupported subtraction file name | File does not have one of the accepted filenames                       |
| `409`  | File name already exists          | File name is already associated with this subtraction                  |


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