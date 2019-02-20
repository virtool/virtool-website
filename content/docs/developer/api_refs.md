---
title: "References"
description: "Browse, create, and manage references."
type: "api"
menu:
  developer:
    parent: API
---

# Find

Find references.

{{< endpoint "GET" "/api/refs" >}}

## Parameters

| Name     | Type    | Default | Description                            |
| :------- | :------ | :------ | :------------------------------------- |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

## Example

```
GET /api/refs
```

## Response

```
Status: 200 OK
```

```json
{
  "created_at": "2018-05-17T19:02:23.949000Z",
  "data_type": "genome",
  "description": "",
  "name": "Viruses",
  "organism": "viruses",
  "public": false,
  "restrict_source_types": false,
  "source_types": ["isolate", "strain"],
  "users": [
    {
      "id": "igboyes",
      "build": true,
      "modify": true,
      "modify_otu": true,
      "remove": true
    }
  ],
  "user": {
    "id": "igboyes"
  },
  "contributors": [],
  "internal_control": null,
  "latest_build": null,
  "id": "cngzpufk"
}
```

# Get

{{< right read >}}

Get the complete representation of a single reference.

{{< endpoint "GET" "/api/refs/:id" >}}

## Example

```
GET /api/refs/foo
```

## Response

```
Status: 200 OK
```

```json
{
  "created_at": "2018-06-14T18:37:54.242000Z",
  "data_type": null,
  "description": "The official plant virus reference from the Virtool developers",
  "name": "Plant Viruses",
  "organism": null,
  "public": true,
  "internal_control": null,
  "restrict_source_types": false,
  "source_types": ["isolate", "strain"],
  "groups": [],
  "users": [
    {
      "id": "igboyes",
      "build": true,
      "modify": true,
      "modify_otu": true,
      "remove": true
    }
  ],
  "user": {
    "id": "igboyes"
  },
  "remotes_from": {
    "errors": null,
    "last_checked": "2018-06-14T18:56:34.629000Z",
    "slug": "virtool/ref-plant-viruses"
  },
  "release": {
    "id": 11449913,
    "name": "v0.1.2",
    "body": "#### Changed\r\n- add new isolates to Cucurbit chlorotic yellows virus",
    "etag": "W/\"c11dcc718202e58b6ca65c92e3a0bd47\"",
    "filename": "reference.json.gz",
    "size": 3699729,
    "html_url": "https://github.com/virtool/ref-plant-viruses/releases/tag/v0.1.2",
    "download_url": "https://github.com/virtool/ref-plant-viruses/releases/download/v0.1.2/reference.json.gz",
    "published_at": "2018-06-12T21:52:33Z",
    "content_type": "application/gzip",
    "retrieved_at": "2018-06-14T19:58:23.839000Z",
    "newer": true
  },
  "process": {
    "id": "he1nxm2c"
  },
  "contributors": [
    {
      "id": "igboyes",
      "count": 1419
    }
  ],
  "latest_build": null,
  "otu_count": 1419,
  "unbuilt_change_count": 1419,
  "installed": {
    "id": 11447367,
    "name": "v0.1.1",
    "body": "#### Fixed\r\n- fixed uploading to GitHub releases in `.travis.yml`",
    "filename": "reference.json.gz",
    "size": 3695872,
    "html_url": "https://github.com/virtool/ref-plant-viruses/releases/tag/v0.1.1",
    "published_at": "2018-06-12T19:20:57Z",
    "created_at": "2018-06-14T18:37:54.242000Z",
    "user": {
      "id": "igboyes"
    },
    "ready": true
  },
  "id": "du5m5f51"
}
```

## Errors

| Status | Message   | Reason                   |
| :----- | :-------- | :----------------------- |
| `404`  | Not found | reference does not exist |

# Create

{{< permission create_ref >}}

Create a new, empty reference.

References can be created in a number of ways depending on what parameters are passed as input. The special fields `clone_from`, `import_from`, and `remote_from` are used to determine how a reference will be created.

If none of the fields `clone_from`, `import_from`, or `remote_from` are assigned, an empty reference will be created. OTUs can be added to the reference after it has been created using the OTU endpoints or the OTU editor interface.

To direct Virtool to **clone an existing reference**, use the `clone_from` field to specifcy the `id` of a source reference. The `data_type` and `organism` fields are ignored as they will be inferred from the source reference. All OTUs are copied and a new history track is created.

To direct Virtool to **create a reference from a compatible reference file**, use the `import_from` field to direct Virtool to a previously uploaded reference file reference file.

To direct Virtool to **link a remote reference and create a new reference from it**, use the `remote_from` field to specify a source GitHub repository slug. Remote reference is automatically linked to its orginating GitHub repository and can check and update the [release](https://help.github.com/categories/releases/) for the source repository.

{{% warning %}}
For now, only the [official reference](https://github.com/virtool/virtool-database) is supported as a remote reference. Use the slug `virtool/virtool-database` as value for `clone_from`.
{{% /warning %}}

{{< endpoint "POST" "/api/refs" >}}

## Input

| Name        | Type    | Description                                                                                        |
| :---------- | :------ | :------------------------------------------------------------------------------------------------- |
| name        | string  | the virus name                                                                                     |
| description | string  | a longer description for the reference                                                             |
| data_type   | string  | the sequence data type (only _genome_ is currently supported)                                      |
| organism    | string  | the sequence data type (only _genome_ is currently supported)                                      |
| public      | boolean | make the reference viewable and usable by all users (default=`False`)                              |
| clone_from  | string  | a valid `ref_id` that the new reference should be cloned from                                      |
| import_from | string  | a valid `file_id` that the new reference should be imported from                                   |
| remote_from | string  | a valid GitHub slug to download and update the new reference from (eg. _virtool/virtool-database_) |

## Basic Example

```
POST /api/refs
```

```json
{
  "name": "Plant Viruses",
  "organism": "viruses",
  "data_type": "genome"
}
```

## Basic Response

```
Status: 201 Created
```

```json
{
  "created_at": "2018-04-26T23:03:02.937000Z",
  "data_type": "genome",
  "description": "",
  "name": "Plant Viruses",
  "organism": "viruses",
  "public": false,
  "users": [
    {
      "id": "igboyes",
      "build": true,
      "modify": true,
      "modify_otu": true,
      "remove": true
    }
  ],
  "user": {
    "id": "igboyes"
  },
  "contributors": [],
  "internal_control": null,
  "latest_build": null,
  "id": "f0emv7kz"
}
```

## Clone Example

```
POST /api/refs
```

```json
{
  "name": "Test 1",
  "organism": "viruses",
  "data_type": "genome",
  "clone_from": "pe6vunzl"
}
```

## Clone Response

```
Status: 201 Created
```

```json
{
  "created_at": "2018-05-23T18:53:16.516000Z",
  "data_type": "genome",
  "description": "",
  "name": "Test 1",
  "organism": "virus",
  "public": false,
  "internal_control": null,
  "restrict_source_types": false,
  "source_types": ["isolate", "strain"],
  "groups": [],
  "users": [
    {
      "id": "igboyes",
      "build": true,
      "modify": true,
      "modify_otu": true,
      "remove": true
    }
  ],
  "user": {
    "id": "igboyes"
  },
  "cloned_from": {
    "id": "pe6vunzl",
    "name": "Test 1"
  },
  "process": {
    "id": "434xa87m"
  },
  "contributors": [],
  "latest_build": null,
  "id": "3m4glv8c"
}
```

## Import Example

```
POST /api/refs
```

```json
{
  "name": "Test 1",
  "organism": "viruses",
  "data_type": "genome",
  "import_from": "dembqmby-reference.json.gz"
}
```

## Import Response

```
Status: 201 Created
```

```json
{
  "created_at": "2018-05-23T18:49:33.493000Z",
  "data_type": null,
  "description": "",
  "name": "Test 1",
  "organism": null,
  "public": false,
  "internal_control": null,
  "restrict_source_types": false,
  "source_types": ["isolate", "strain"],
  "groups": [],
  "users": [
    {
      "id": "igboyes",
      "build": true,
      "modify": true,
      "modify_otu": true,
      "remove": true
    }
  ],
  "user": {
    "id": "igboyes"
  },
  "imported_from": {
    "name": "reference.json.gz",
    "user": {
      "id": "igboyes"
    },
    "id": "dembqmby-reference.json.gz"
  },
  "process": {
    "id": "40cswp4m"
  },
  "contributors": [],
  "latest_build": null,
  "id": "pe6vunzl"
}
```

## Remote Example

```
POST /api/refs
```

```json
{
  "name": "Test Remote",
  "organism": "viruses",
  "data_type": "genome",
  "remote_from": "virtool/virtool-database"
}
```

## Remote Response

```
Status: 201 Created
Location: /api/refs/95p5qnk2
```

```json
{
  "created_at": "2018-05-28T22:35:36.443000Z",
  "data_type": null,
  "description": "",
  "name": "Test Remote",
  "organism": null,
  "public": false,
  "internal_control": null,
  "restrict_source_types": false,
  "source_types": ["isolate", "strain"],
  "groups": [],
  "users": [
    {
      "id": "igboyes",
      "build": true,
      "modify": true,
      "modify_otu": true,
      "remove": true
    }
  ],
  "user": {
    "id": "igboyes"
  },
  "remotes_from": {
    "slug": "virtool/virtool-database",
    "update": null,
    "last_checked": "2018-05-28T22:35:36.443000Z",
    "last_updated": "2018-05-28T22:35:36.443000Z"
  },
  "process": {
    "id": "iq3h8ru8"
  },
  "contributors": [],
  "latest_build": null,
  "otu_count": 0,
  "unbuilt_change_count": 0,
  "id": "95p5qnk2"
}
```

## Errors

| Status | Message                                  | Reason                                                             |
| :----- | :--------------------------------------- | :----------------------------------------------------------------- |
| `400`  | Source reference does not exist          | the `clone_from` id does not refer to an exisingt reference        |
| `403`  | Not permitted                            | client does not have the `create_ref` permission                   |
| `502`  | Could not retrieve latest GitHub release | either the repository does not exist or there is no latest release |
| `502`  | Could not reach GitHub                   | the server was unable to connect to GitHub                         |

# Edit

{{< right modify >}}

Edit an existing reference.

Currently, only _genome_ is accepted as a value for `data_type`.

{{< endpoint "PATCH" "/api/refs/:id" >}}

## Input

| Name             | Type    | Required | Description                                                                         |
| :--------------- | :------ | :------- | :---------------------------------------------------------------------------------- |
| name             | string  | False    | the virus name                                                                      |
| description      | string  | False    | a longer description for the reference                                              |
| data_type        | string  | False    | the sequence data type (only _genome_ is currently supported)                       |
| organism         | string  | False    | the sequence data type (only _genome_ is currently supported)                       |
| public           | boolean | False    | make the reference viewable and usable by all users (default=`False`)               |
| internal_control | string  | False    | set the OTU identified by the passed `id` as the internal control for the reference |

## Example

```
PATCH /api/refs/o7ed3yfd
```

```json
{
  "name": "Regulated Pests",
  "organism": "phytoplasma",
  "internal_control": "ah4m5jqz"
}
```

## Response

```
Status: 200 OK
```

```json
{
  "created_at": "2018-05-02T23:11:38.489000Z",
  "data_type": "genome",
  "name": "Regulated Pests",
  "organism": "phytoplasma",
  "public": false,
  "user": {
    "id": "igboyes"
  },
  "imported_from": {
    "name": "reference.json.gz",
    "user": {
      "id": "igboyes"
    },
    "id": "5d8gpaam-reference.json.gz"
  },
  "process": {
    "id": "d9tn5khk"
  },
  "internal_control": {
    "id": "ah4m5jqz",
    "name": "Thingy"
  },
  "id": "o7ed3yfd"
}
```

## Errors

| Status | Message             | Reason                                            |
| :----- | :------------------ | :------------------------------------------------ |
| `403`  | Insufficient rights | client does not have the `modify` reference right |
| `404`  | Not found           | reference does not exist                          |

# Export

{{< right read >}}

Download a reference as a compressed JSON file.

The downloaded file can be imported into any other instance of Virtool.

The OTU data included in the exported file can be controlled using the `scope` query parameter. Exports scoped `built` contain only the latest **built** state of all OTUs. Exports scoped `unbuilt` contain all OTUs at their last verified (no unbuildable issues) version. Exports scoped `unverified` contain all OTUs in their current states regardless of whether they have issues or not.

The default scope is `built` if no `scope` parameter is provided.

{{< endpoint "GET" "/download/refs/:id" >}}

## Parameters

| Name  | Type   | Default | Description                                           |
| :---- | :----- | :------ | :---------------------------------------------------- |
| scope | string | built   | controls the state of the OTUs included in the export |

## Example

```
GET /download/refs/848280hu?scope=unbuilt
```

## Response

```
Status: 200 OK
Content-Type: application/gzip
```

## Errors

| Status | Message   | Reason                   |
| :----- | :-------- | :----------------------- |
| `404`  | Not found | reference does not exist |

# Remove

{{< right remove >}}

Remove a reference and its associated OTUs, sequences, and indexes. Analyses using the deleted reference can still be queried after deletion of the reference. In-progress analyses using the deleted reference will still finish successfully.

Reference metadata is immediately removed and a response is returned. A separate process is spawned to safely delete the OTU information associated with the reference. For large references, this can take some time.

Information about the deletion process is returned in the HTTP response. The `Content-Location` header points to a resource defining the process.

{{< endpoint "DELETE" "/api/refs/:id" >}}

## Example

```
DELETE /api/refs/qymrndgk
```

## Response

```
Status: 202 Accepted
Content-Location: /api/processes/yn5ncv8t
```

```json
{
  "created_at": "2018-05-02T21:54:48.756000Z",
  "progress": 0,
  "step": "delete_indexes",
  "step_count": 2,
  "type": "delete_reference",
  "id": "yn5ncv8t"
}
```

## Errors

| Status | Message             | Reason                                            |
| :----- | :------------------ | :------------------------------------------------ |
| `403`  | Insufficient rights | client does not have the `remove` reference right |
| `404`  | Not found           | reference does not exist                          |

# Find History

{{< right read >}}

Find history for a specific reference.

History can be limited to unbuilt or built changes only using the `unbuilt` query parameter.

{{< endpoint "GET" "/api/refs/:id/history" >}}

## Parameters

| Name     | Type    | Default | Description                            |
| :------- | :------ | :------ | :------------------------------------- |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |
| unbuilt  | boolean | _None_  | return only unbuilt or built changes   |

## Example

```
GET /api/refs/35s1gev9/history?per_page=2
```

## Response

```
Status: 200 OK
```

```json
{
  "documents": [
    {
      "method_name": "import",
      "description": "Imported Sweet potato feathery mottle virus",
      "created_at": "2018-05-17T18:49:48.977000Z",
      "otu": {
        "id": "fz99k1n0",
        "name": "Sweet potato feathery mottle virus",
        "version": 0
      },
      "reference": {
        "id": "35s1gev9"
      },
      "index": {
        "id": "unbuilt",
        "version": "unbuilt"
      },
      "user": {
        "id": "igboyes"
      },
      "id": "fz99k1n0.0"
    },
    {
      "method_name": "import",
      "description": "Imported Sweet potato chlorotic stunt virus",
      "created_at": "2018-05-17T18:49:48.939000Z",
      "otu": {
        "id": "5oqgwy8j",
        "name": "Sweet potato chlorotic stunt virus",
        "version": 0
      },
      "reference": {
        "id": "35s1gev9"
      },
      "index": {
        "id": "unbuilt",
        "version": "unbuilt"
      },
      "user": {
        "id": "igboyes"
      },
      "id": "5oqgwy8j.0"
    }
  ],
  "total_count": 1419,
  "found_count": 1419,
  "page_count": 710,
  "per_page": 2,
  "page": 1
}
```

# Find Indexes

{{< right read >}}

Find indexes for a specific reference.

{{< endpoint "GET" "/api/refs/:id/indexes" >}}

## Parameters

| Name     | Type    | Default | Description                            |
| :------- | :------ | :------ | :------------------------------------- |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

## Example

```
GET /api/refs/9fhr3cey/indexes
```

## Response

```
Status: 200 OK
```

```json
{
  "documents": [
    {
      "version": 0,
      "created_at": "2018-04-30T20:14:30.242000Z",
      "ready": true,
      "has_files": true,
      "job": {
        "id": "egox4ch6"
      },
      "ref": {
        "id": "9fhr3cey"
      },
      "user": {
        "id": "igboyes"
      },
      "id": "v2fuqat2",
      "change_count": 1419,
      "modified_otu_count": 1419
    }
  ],
  "total_count": 1,
  "found_count": 1,
  "page_count": 1,
  "per_page": 15,
  "page": 1
}
```

# Create Index

{{< right build >}}

Create an index by starting a new index build job.

{{< endpoint "POST" "/api/refs/:id/indexes" >}}

## Example

## Response

{{% response "Status: 201 Created" "Location: /api/indexes/bznqwjsa" %}}

```json
{
	"version": 0,
	"created_at": "2018-04-30T20:14:30.242000Z",
	"manifest": {
		"j6sk7lnh": 0,
		"ayyhflbx": 0,
		"5hzmr0h9": 0,
		...
	},
	"ready": false,
	"has_files": true,
	"job": {
		"id": "egox4ch6"
	},
	"ref": {
		"id": "9fhr3cey"
	},
	"user": {
		"id": "igboyes"
	},
	"id": "v2fuqat2"
}
```

{{% /response %}}

## Errors

| Status | Message                         | Reason                                                                  |
| :----- | :------------------------------ | :---------------------------------------------------------------------- |
| `400`  | There are unverified OTUs       | some OTUs included in the rebuild have issues                           |
| `400`  | The are no unbuilt changes      | there are no changes to include in an index rebuild                     |
| `403`  | Insufficient rights             | client does not have the required reference rights                      |
| `409`  | Index build already in progress | only one index build at a time may be in progress for a given reference |

# Get User

Get a specific reference user.

{{< endpoint "GET" "/api/refs/:id/user/:id" >}}

## Example

```
GET /api/refs/pe6vunzl/users/baz
```

## Response

```
Status: 200 OK
```

```json
{
  "id": "baz",
  "created_at": "2018-05-23T19:14:04.285000Z",
  "build": true,
  "modify": true,
  "modify_otu": false,
  "remove": false
}
```

## Errors

| Status | Message   | Reason                           |
| :----- | :-------- | :------------------------------- |
| `404`  | Not found | reference or user does not exist |

# Add User

{{< right modify >}}

Allow a user to view, use, and modify a reference.

Allow the added user to view a non-public reference. Control their modification rights.

{{< endpoint "POST" "/api/refs/:id/users" >}}

## Input

| Name       | Type    | Required | Default | Description                                                  |
| :--------- | :------ | :------- | ------- | :----------------------------------------------------------- |
| user_id    | string  | True     |         | the id of the user to add                                    |
| build      | boolean | False    | `false` | allow the user to build new indexes for the reference        |
| modify     | boolean | False    | `false` | allow the user to modify the reference metadata and settings |
| modify_otu | boolean | False    | `false` | allow the user to modify the reference's member OTUs         |
| remove     | boolean | False    | `false` | allow the user to remove the reference                       |

## Example

```
POST /api/refs/pe6vunzl/users
```

```json
{
  "user_id": "baz",
  "modify_otu": true
}
```

## Response

```
Status: 201 OK
Location: /api/refs/pe6vunzl/users/baz
```

```json
{
  "id": "baz",
  "created_at": "2018-05-23T19:14:04.285000Z",
  "build": false,
  "modify": false,
  "modify_otu": true,
  "remove": false
}
```

## Errors

| Status | Message             | Reason                                            |
| :----- | :------------------ | :------------------------------------------------ |
| `400`  | User already exists | user is already assigned to reference             |
| `400`  | User does not exist | user does not exist on instance                   |
| `403`  | Insufficient rights | client does not have the `modify` reference right |
| `404`  | Not found           | reference does not exist                          |

# Edit User

{{< right modify >}}

Change the modification rights for an existing reference user.

{{< endpoint "PATCH" "/api/refs/:id/users/:user_id" >}}

## Input

| Name       | Type    | Required | Description                                                  |
| :--------- | :------ | :------- | :----------------------------------------------------------- |
| build      | boolean | False    | allow the user to build new indexes for the reference        |
| modify     | boolean | False    | allow the user to modify the reference metadata and settings |
| modify_otu | boolean | False    | allow the user to modify the reference's member OTUs         |
| remove     | boolean | False    | allow the user to remove the reference                       |

## Example

```
PATCH /api/refs/pe6vunzl/users/baz
```

```json
{
  "build": true,
  "modify": true
}
```

## Response

```
Status: 200 OK
```

```json
{
  "id": "baz",
  "created_at": "2018-05-23T19:14:04.285000Z",
  "build": true,
  "modify": true,
  "modify_otu": false,
  "remove": false
}
```

## Errors

| Status | Message             | Reason                                            |
| :----- | :------------------ | :------------------------------------------------ |
| `403`  | Insufficient rights | client does not have the `modify` reference right |
| `404`  | Not found           | reference or user does not exist                  |

# Remove User

{{< right modify >}}

Remove a user from a reference.

{{< endpoint "DELETE" "/api/refs/:id/users/:user_id" >}}

## Example

```
DELETE /api/refs/pe6vunzl/users/baz
```

## Response

```
Status: 204 No content
```

## Errors

| Status | Message             | Reason                                            |
| :----- | :------------------ | :------------------------------------------------ |
| `403`  | Insufficient rights | client does not have the `modify` reference right |
| `404`  | Not found           | reference or user does not exist                  |

# Get Group

Get a specific reference user group.

{{< endpoint "GET" "/api/refs/:id/groups/:group_id" >}}

## Example

```
GET /api/refs/pe6vunzl/groups/baz
```

## Response

```
Status: 200 OK
```

```json
{
  "id": "baz",
  "created_at": "2018-05-23T19:14:04.285000Z",
  "build": true,
  "modify": true,
  "modify_otu": false,
  "remove": false
}
```

## Errors

| Status | Message   | Reason                            |
| :----- | :-------- | :-------------------------------- |
| `404`  | Not found | reference or group does not exist |

# Add Group

{{< right modify >}}

Allow a user group to view, use, and modify a reference.

Allow the added group to view a non-public reference. Control its modification rights.

{{< endpoint "POST" "/api/refs/:id/groups" >}}

## Input

| Name       | Type    | Required | Default | Description                                                       |
| :--------- | :------ | :------- | ------- | :---------------------------------------------------------------- |
| group_id   | string  | True     |         | the id of the group to add                                        |
| build      | boolean | False    | `false` | allow group members to build new indexes for the reference        |
| modify     | boolean | False    | `false` | allow group members to modify the reference metadata and settings |
| modify_otu | boolean | False    | `false` | allow group members to modify the reference's member OTUs         |
| remove     | boolean | False    | `false` | allow group members to remove the reference                       |

## Example

```
POST /api/refs/pe6vunzl/groups
```

```json
{
  "group_id": "baz",
  "modify_otu": true
}
```

## Response

```
Status: 201 OK
Location: /api/refs/pe6vunzl/groups/baz
```

```json
{
  "id": "baz",
  "created_at": "2018-05-23T19:14:04.285000Z",
  "build": false,
  "modify": false,
  "modify_otu": true,
  "remove": false
}
```

## Errors

| Status | Message              | Reason                                            |
| :----- | :------------------- | :------------------------------------------------ |
| `400`  | Group already exists | group is already assigned to reference            |
| `400`  | Group does not exist | user group does not exist on instance             |
| `403`  | Insufficient rights  | client does not have the `modify` reference right |
| `404`  | Not found            | reference does not exist                          |

# Edit Group

{{< right modify >}}

Change the modification rights for an existing reference user group.

{{< endpoint "PATCH" "/api/refs/:id/groups/:group_id" >}}

## Input

| Name       | Type    | Required | Default | Description                                                       |
| :--------- | :------ | :------- | ------- | :---------------------------------------------------------------- |
| build      | boolean | False    | `false` | allow group members to build new indexes for the reference        |
| modify     | boolean | False    | `false` | allow group members to modify the reference metadata and settings |
| modify_otu | boolean | False    | `false` | allow group members to modify the reference's member OTUs         |
| remove     | boolean | False    | `false` | allow group members to remove the reference                       |

## Example

```
PATCH /api/refs/pe6vunzl/groups/baz
```

```json
{
  "build": true,
  "modify": true
}
```

## Response

```
Status: 200 OK
```

```json
{
  "id": "baz",
  "created_at": "2018-05-23T19:14:04.285000Z",
  "build": true,
  "modify": true,
  "modify_otu": false,
  "remove": false
}
```

## Errors

| Status | Message             | Reason                                            |
| :----- | :------------------ | :------------------------------------------------ |
| `403`  | Insufficient rights | client does not have the `modify` reference right |
| `404`  | Not found           | reference or group does not exist                 |

# Remove Group

{{< right modify >}}

Remove a user group from a reference.

{{< endpoint "DELETE" "/api/refs/:id/groups/:group_id" >}}

## Example

```
DELETE /api/refs/pe6vunzl/groups/baz
```

## Response

```
Status: 204 No content
```

## Errors

| Status | Message             | Reason                                            |
| :----- | :------------------ | :------------------------------------------------ |
| `403`  | Insufficient rights | client does not have the `modify` reference right |
| `404`  | Not found           | reference or group does not exist                 |

# Get Release

{{< right modify >}}

Check the remote reference for a newer release.

This also updates the `release` field in the [complete reference representation](#get). If the `newer` field is `true`, the release is newer than the installed release.

{{< endpoint "GET" "/api/refs/:id/release" >}}

## Example

```
GET /api/refs/4n4ezl0t/release
```

## Response

```
Status: 200 OK
```

```json
{
  "id": 11449913,
  "name": "v0.1.2",
  "body": "#### Changed\r\n- add new isolates to Cucurbit chlorotic yellows virus",
  "etag": "W/\"b7e8a7fb0fbe0cade0d6a86c9e0d4549\"",
  "filename": "reference.json.gz",
  "size": 3699729,
  "html_url": "https://github.com/virtool/ref-plant-viruses/releases/tag/v0.1.2",
  "download_url": "https://github.com/virtool/ref-plant-viruses/releases/download/v0.1.2/reference.json.gz",
  "published_at": "2018-06-12T21:52:33Z",
  "content_type": "application/gzip",
  "retrieved_at": "2018-06-14T19:52:17.465000Z",
  "newer": true
}
```

# List Updates

{{< right read >}}

Return an array of all updates applied to the reference.

The most recently applied updates are first in the list.

{{< endpoint "GET" "/api/refs/:id/updates" >}}

## Example

```
GET /api/refs/du5m5f51/updates
```

## Response

```
Status: 200 OK
```

```json
[
  {
    "id": 11447367,
    "name": "v0.1.1",
    "body": "#### Fixed\r\n- fixed uploading to GitHub releases in `.travis.yml`",
    "filename": "reference.json.gz",
    "size": 3695872,
    "html_url": "https://github.com/virtool/ref-plant-viruses/releases/tag/v0.1.1",
    "published_at": "2018-06-12T19:20:57Z",
    "created_at": "2018-06-14T18:37:54.242000Z",
    "user": {
      "id": "igboyes"
    },
    "ready": true
  }
]
```

# Update Remote

{{< right modify >}}

Update the reference using the linked remote reference.

The reference can be updated to a specific release by passing a release `id`. If not `id` is provided the reference will be updated to the [remote release attached to the reference document](#get-release).

{{< endpoint "POST" "/api/refs/:id/updates" >}}

## Input

| Name       | Type   | Required | Description                             |
| :--------- | :----- | :------- | :-------------------------------------- |
| release_id | string | False    | the id of the GitHub release to install |

## Example

```
POST /api/refs/4n4ezl0t/updates
```

## Response

```
Status: 200 OK
```

```json
{
  "id": 10742520,
  "name": "v0.3.0",
  "body": "The release consists of a gzipped JSON file containing:\r\n\r\n- a `data_type` field with value _genome_\r\n- an `organism` field with value _virus_\r\n- the `version` name (eg. *v0.2.0*)\r\n- a timestamp with the key `created_at`\r\n- virus data compatible for import into Virtool v2.0.0+\r\n\r\nScripts have been updated to follow upcoming convention changes in Virtool v3.0.0.",
  "etag": "W/\"ef123d746a33f88ee44203d3ca6bc2f7\"",
  "filename": "reference.json.gz",
  "size": 3709091,
  "browser_url": "https://api.github.com/repos/virtool/virtool-database/releases/10742520",
  "download_url": "https://github.com/virtool/virtool-database/releases/download/v0.3.0/reference.json.gz",
  "published_at": "2018-04-26T19:35:33Z",
  "content_type": "application/gzip"
}
```

## Errors

| Status | Message             | Reason                                            |
| :----- | :------------------ | :------------------------------------------------ |
| `403`  | Insufficient rights | client does not have the `modify` reference right |
| `404`  | Not found           | reference does not exist                          |
