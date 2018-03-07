---
title: "Subtraction"
description: "Query, create, edit, and remove subtractions."
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 100
---

{{% endpoint name="Find" %}}

Find profile subtractions by id (name) or nickname.

```
GET /api/subtraction
```

## Parameters

| Name     | Type    | Default | Description                            |
| :---     | :------ | :------ | :------------------------------------- |
| find     | string  | `null`  | subtraction name to filter by          |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

## Example

```
GET /api/hmms?find=Arab&per_page=1
```

## Response

```
Status: 200 OK
```

```json
{
	"documents": [
		{
			"ready": true,
			"file": {
				"id": "vlekszor-ATgenomeTAIR9.171",
				"name": "ATgenomeTAIR9.171"
			},
			"job": {
				"id": "ritpnbst"
			},
			"id": "Arabidopsis"
		}
	],
	"total_count": 1,
	"found_count": 1,
	"page_count": 1,
	"per_page": 1,
	"page": 1,
	"host_count": 1,
	"ready_host_count": 1
}
```

## Errors

_None_

{{% /endpoint %}}


{{% endpoint name="Get" %}}

Get the complete representation of a given subtraction.

```
GET /api/subtraction/:subtraction_id
```

## Example

```
GET /api/subtraction/Arabidopsis
```

## Response

```
Status: 200 OK
```

```json
{
	"ready": true,
	"is_host": true,
	"file": {
		"id": "vlekszor-ATgenomeTAIR9.171",
		"name": "ATgenomeTAIR9.171"
	},
	"user": {
		"id": "igboyes"
	},
	"job": {
		"id": "ritpnbst"
	},
	"count": 7,
	"gc": {
		"a": 0.319,
		"t": 0.319,
		"g": 0.18,
		"c": 0.18,
		"n": 0.002
	},
	"linked_samples": [
		{
			"name": "Test 1",
			"id": "htosefxu"
		}
	],
	"id": "Arabidopsis"
}
```

## Errors

| Status | Message             | Reason                                                      |
| :----- | :------------------ | :---------------------------------------------------------- |
| `404`  | Not found           | `sample_id` in URL does not exist                           |

{{% /endpoint %}}


{{% endpoint name="Create" permission="modify_subtraction" %}}

Create a new subtraction from a file that has previously been uploaded into the file manager.

```
POST /api/subtraction
```

## Input

| Name           | Type   | Required | Description                                            |
| :------------- | :----- | -------- | :----------------------------------------------------- |
| subtraction_id | string | true     | a unique name for the host (eg. Arabidopsis)           |
| nickname       | string | false    | a nickname for the host                                |
| file_id        | string | true     | the unique id of the host FASTA file                   |

## Example

```
POST /api/subtraction
```

```json
{
	"subtraction_id": "Test 1",
	"nickname": "Foobar",
	"file_id": "djbxvhmy-ATgenomeTAIR9.171"
}
```

## Response

```
Status: 201 Created
```

```json
{
	"ready": false,
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
	"id": "Test 1"
}
```

## Errors

| Status | Message                       | Reason                                                   |
| :----- | :---------------------------- | :------------------------------------------------------- |
| `403`  | Not permitted                 | client does not have the 'modify_subtraction` permission |
| `404`  | File not found                | file identified by `file_id` does not exist              |
| `409`  | Subtraction id already exists | `id` is already in use by an existing subtraction        |
| `422`  | Invalid input                 | JSON request body is invalid                             |

{{% /endpoint %}}


{{% endpoint name="Remove" permission="modify_subtraction" %}}

Remove an existing subtraction

```
DELETE /api/subtraction/:subtraction_id
```

## Example

```
DELETE /api/subtraction/Test%201
```

## Response

```
Status: 204 No content
```

## Errors

| Status | Message            | Reason                                                            |
| :----- | :----------------- | :---------------------------------------------------------------- |
| `403`  | Not permitted      | client does not have the 'modify_subtraction` permission          |
| `404`  | Not found          | subtraction does not exist                                        |
| `409`  | Has linked samples | subtraction is in use by one or more sample and cannot be removed |

{{% /endpoint %}}
