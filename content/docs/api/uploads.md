---
title: "Uploads"
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 20
---

When uploads are required in Virtool, they should be targeted at ``/upload``. The available endpoints are:

Situation                                       | Endpoint               
------------------------------------------------|------------------------
Upload and import a Virtool viruses export file | /upload/viruses        
Upload a Illumina read file                     | /upload/reads          
Upload a .hmm file for use with NuVs            | /upload/hmm            
Upload a host FASTA file                        | /upload/host           

# Upload a file {#upload}

Uploads a file into Virtool file manager. The file will given a unique ID composed of an 8-character random alphanumeric string and the supplied ``name`` query parameter separated by a dash.

```
POST /upload/:file_type?name=filename
```

## Parameters

| Name     | Type    | Optional | Description                            |
| :------- | :------ | :------- | :------------------------------------- |
| name     | string  | false    | the display name for the file          |

## Example

```
POST /upload/reads?name=test.fq.gz
```

## Response

```
Status: 201 Created
```

```json
{
	"name": "test.fq.gz",
	"user": {
		"id": "fred"
	},
	"uploaded_at": "2018-03-02T22:52:09.152000Z",
	"type": "reads",
	"ready": false,
	"reserved": false,
	"id": "juqleoir-test.fq.gz"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `403`  | Not permitted          | user doesn't have the `upload_file` permission                  |
| `404`  | Not found              | `file_type` does not exist                                      |


# Delete a File {#delete}

Delete a previously uploaded file.

```
DELETE /api/files/:file_id
```

## Response

```
Status: 204 No content
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `404`  | Not found              | `file_id` does not exist                                        |
