---
title: "References"
description: "Browse, create, and manage references."
type: "api"
menu:
    api:
        parent: Endpoints
---

{{% endpoint name="Find" %}}

Find references.

```
GET /api/refs
```

## Parameters

| Name     | Type    | Default   | Description                            |
| :------- | :------ | :-------- | :------------------------------------- |
| page     | integer | 1         | page number of results to return       |
| per_page | integer | 15        | number of documents to return per page |

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
	"source_types": [
		"isolate",
		"strain"
	],
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

{{% /endpoint %}}

{{% endpoint name="Get" %}}

Get the complete representation of a single reference.

```
GET /api/refs/:ref_id
```

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
	"created_at": "2018-04-26T19:54:20.960000Z",
	"data_type": "genome",
	"description": "",
	"name": "Imported Viruses",
	"organism": "virus",
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
	"imported_from": {
		"name": "reference.json.gz",
		"user": {
			"id": "igboyes"
		},
		"id": "ctrtptqj-reference.json.gz"
	},
	"process": {
		"id": "bqunkpiu"
	},
	"contributors": [
		{
			"id": "igboyes",
			"count": 1419
		}
	],
	"internal_control": null,
	"latest_build": null,
	"id": "wvymfspm"
}
```

{{% /endpoint %}}


{{% endpoint name="Create" %}}

Create a new reference.

References can be created in a number of ways depending on what parameters are passed as input.

If none of the fields `clone_from`, `import_from`, or `remote_from` are assigned, an empty reference will be created.

Assigning one of these specials fields will populate the new reference with OTUs on creation. Cloning copies OTUs from an existing reference identifieid by its `otu_id`. Importing validates and creates OTUs based on an uploaded Virtool reference file. Remoting links the reference to a valid Virtool reference repository on GitHub and downloads OTUs automatically.

```
POST /api/refs
```

## Input

| Name        | Type    | Optional | Description                                                                                        |
| :---------- | :------ | :------- | :------------------------------------------------------------------------------------------------- |
| name        | string  | False    | the virus name                                                                                     |
| description | string  | True     | a longer description for the reference                                                             |
| data_type   | string  | False    | the sequence data type (only _genome_ is currently supported)                                      |
| organism    | string  | True     | the sequence data type (only _genome_ is currently supported)                                      |
| public      | boolean | True     | make the reference viewable and usable by all users (default=`False`)                              |
| clone_from  | string  | True     | a valid `ref_id` that the new reference should be cloned from                                      |
| import_from | string  | True     | a valid `file_id` that the new reference should be imported from                                   |
| remote_from | string  | True     | a valid GitHub slug to download and update the new reference from (eg. _virtool/virtool-database_) |

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
	"source_types": [
		"isolate",
		"strain"
	],
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
	"source_types": [
		"isolate",
		"strain"
	],
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

{{% /endpoint %}}


{{% endpoint name="Edit" %}}

Edit an existing reference.

Currently, only _genome_ is accepted as a value for `data_type`.

```
POST /api/refs/:ref_id
```

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

{{% /endpoint %}}


{{% endpoint name="Remove" %}}

Remove a reference and its associated OTUs, sequences, and indexes. Analyses using the deleted reference can still be queried after deletion of the reference. In-progress analyses using the deleted reference will still finish successfully.

Reference metadata is immediately removed and a response is returned. A separate process is spawned to safely delete the OTU information associated with the reference. For large references, this can take some time.

Information about the deletion process is returned in the HTTP response. The `Content-Location` header points to a resource defining the process.

```
DELETE /api/refs/:ref_id
```

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

{{% /endpoint %}}

{{% endpoint name="Find History" %}}

Find history for a specific reference.

History can be limited to unbuilt or built changes only using the `unbuilt` query parameter.

```
GET /api/refs/:ref_id/history
```

## Parameters

| Name     | Type    | Default   | Description                            |
| :------- | :------ | :-------  | :------------------------------------- |
| page     | integer | 1         | page number of results to return       |
| per_page | integer | 15        | number of documents to return per page |
| unbuilt  | boolean | _None_    | return only unbuilt or built changes   |

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

{{% /endpoint %}}


{{% endpoint name="Find Indexes" %}}

Find indexes for a specific reference.

```
GET /api/refs/:ref_id/indexes
```

## Parameters

| Name     | Type    | Default   | Description                            |
| :------- | :------ | :-------  | :------------------------------------- |
| page     | integer | 1         | page number of results to return       |
| per_page | integer | 15        | number of documents to return per page |

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
{{% /endpoint %}}
