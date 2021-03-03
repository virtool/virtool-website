---
title: "Uploads"
description: "Upload and manage bioinformatic data files."
menu:
    developer:
        parent: API
---
These endpoints are used to upload files to Virtool for use in sample, subtraction, and reference creation.

# Upload File

{{< permission upload_file >}}

Uploads a file to be used in Virtool.

The upload request is expected to use the encoding type `multipart/form-data`. The file should be made accessible under a `file` key.

Additional input including the file's `name` and `type` should be included in the query string.

{{< endpoint "POST" "/api/uploads" >}}

## Parameters

| Name | Type   | Required | Description                                                 |
| :--- | :----- | :------- | :---------------------------------------------------------- |
| name | string | true     | the display name for the file                               |
| type | string | false    | the file type (one of: `reads`, `subtraction`, `reference`) |

## Example

{{< request "POST" "/api/uploads?name=test.fq.gz&type=reads" />}}

## Response

{{< response "Status: 201 Created" "Location: /api/uploads/0-test.fq.gz" >}}
```json
{
	"name": "test.fq.gz",
	"user": {
		"id": "fred"
	},
	"uploaded_at": "2018-03-02T22:52:09.152000Z",
	"type": "reads",
	"ready": true,
	"reserved": false,
	"id": "0-test.fq.gz"
}
```
{{< /response >}}

## Errors

| Status | Message                 | Reason                                                  |
| :----- | :---------------------- | :------------------------------------------------------ |
| `400`  | Unsupported upload type | Given file not an acceptable type, see `type` parameter |
| `403`  | Not permitted           | user does not have `upload_file` permission             |
| `422`  | Invalid query           | `name` is a required field                              |

# Download File

Download a previously uploaded file.

{{< endpoint "GET" "/api/uploads/:id" >}}

## Example

{{< request "GET" "/api/uploads/23" />}}

## Response

{{< response "Status: 200 OK" />}}



## Errors

| Status | Message   | Reason                    |
| :----- | :-------- | :------------------------ |
| `404`  | Not found | The upload does not exist |


# Delete File

{{< permission delete_file >}}

Delete a previously uploaded file.

{{< endpoint "DELETE" "/api/uploads/:id" >}}

## Example
{{< request "DELETE" "/api/uploads/23" />}}

## Response

{{< response "Status: 204 No content" />}}

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `403`  | Not permitted          | user does not have `remove_file` permission                     |
| `404`  | Not found              | file does not exist                                             |
