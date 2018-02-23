---
title: "Uploads"
type: "api"
menu:
    api:
        parent: endpoints
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

## Query

| Name     | Type    | Optional | Description                            |
| :------- | :------ | :------- | :------------------------------------- |
| name     | string  | false    | the display name for the file          |

## Headers

```
Status: 201 Created
```

## Response
```json
{
    "id" : "iqdhxivo-viruses.json.gz",
    "name" : "viruses.json.gz",
    "type" : "viruses",
    "user" : {
        "id" : "igboyes"
    },
    "uploaded_at" : "2017-12-07T19:09:26.147Z",
    "expires_at" : "2017-12-08T00:09:26.147Z",
    "created" : true,
    "reserved" : false,
    "ready" : true,
    "size" : 3709347
}
```

# Delete an Upload {#delete}

Testing

```
DELETE /api/files/:file_id
```

## Information

Deletes a previously uploaded file based on its ``id``.

## Headers

```
Status: 204 No content
```