---
title: "References"
description: "Browse, create, and manage references."
type: "api"
menu:
    api:
        parent: Endpoints
---

{{% endpoint name="List" %}}

List all references.

```
GET /api/refs
```

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
	"documents": [
		{
			"created_at": "2018-04-26T19:54:20.960000Z",
			"data_type": "genome",
			"name": "Imported Viruses",
			"organism": "virus",
			"public": false,
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
			"id": "wvymfspm",
			"latest_build": null
		},
		{
			"created_at": "2018-04-26T23:03:02.937000Z",
			"data_type": "genome",
			"name": "Plant Viruses",
			"organism": "viruses",
			"public": false,
			"user": {
				"id": "igboyes"
			},
			"id": "f0emv7kz",
			"latest_build": null
		}
	],
	"total_count": 2,
	"found_count": 2,
	"page_count": 1,
	"per_page": 15,
	"page": 1
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
			"modify_kind": true,
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

Assigning one of these specials fields will populate the new reference with kinds on creation. Cloning copies kinds from an existing reference identifieid by its `kind_id`. Importing validates and creates kinds based on an uploaded Virtool reference file. Remoting links the reference to a valid Virtool reference repository on GitHub and downloads kinds automatically.

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
			"modify_kind": true,
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

## Import Example

```
POST /api/refs
```

```json
{
    "name": "Imported",
    "organism": "viruses",
    "data_type": "genome",
	"import_from": "ctrtptqj-reference.json.gz"
}
```

## Import Response

```
Status: 201 Created
```

```json
{
	"created_at": "2018-04-26T23:10:20.615000Z",
	"data_type": null,
	"description": "",
	"name": "Imported",
	"organism": null,
	"public": false,
	"users": [
		{
			"id": "igboyes",
			"build": true,
			"modify": true,
			"modify_kind": true,
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
		"id": "j6n9q1ds"
	},
	"contributors": [],
	"internal_control": null,
	"latest_build": null,
	"id": "u1js3lms"
}
```

{{% /endpoint %}}