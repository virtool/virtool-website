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

{{< endpoint "POST" "/api/subtractions/:id/files" >}}

## Parameters

| Name   | Type   | Required  | Description                                                                             |
| :---   | :----- | :-------- | :-------------------------------------------------------------------------------------- |
| name   | string | Yes       | The name of the subtraction file to upload (one of: `subtraction.fa.gz`, `subtraction.1.bt2`, `subtraction.2.bt2`, `subtraction.3.bt2`, `subtraction.4.bt2`, `subtraction.rev.1.bt2`, `subtraction.rev.2.bt2`)                                                 |
| type   | string | No        | The type of the subtraction file

## Example

{{< request "POST" "/api/subtractions/jrosgvey/files" >}}
```json
{
  "name": "subtraction.1.bt2"
}
```
{{< /request >}}

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
| `403`  | Insufficient rights               | Modify subtraction rights required                                     |
| `404`  | Not found                         | Subtraction does not exist                                             |
| `422`  | Invalid query                     | `name` is a required parameter                                         |

