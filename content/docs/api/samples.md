---
title: "Samples"
description: "Query, create, edit, and analyze samples."
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 40
---

{{% endpoint name="Find" %}}

Find samples based on the sample name or creator username.

```
GET /api/samples
```

## Parameters

| Name     | Type    | Default | Description                            |
| :---     | :------ | :------ | :------------------------------------- |
| find     | string  |         | sample name or username to filter by   |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

## Example

```
GET /api/samples?find=test&page=1
```

## Response

```
Status: 200 OK
```

```json
{
	"documents": [
		{
			"name": "Test 1",
			"isolate": "",
			"host": "",
			"nuvs": true,
			"pathoscope": true,
			"created_at": "2018-02-01T00:29:44.867000Z",
			"imported": false,
			"archived": false,
			"user": {
				"id": "igboyes"
			},
			"id": "htosefxu"
		}
	],
	"total_count": 1,
	"found_count": 1,
	"page_count": 1,
	"per_page": 15,
	"page": 1
}
```

## Errors

| Status | Message                | Reason                             |
| :----- | :--------------------- | :--------------------------------- |
| `422`  | Invalid query          | invalid URL query fields or values |

{{% /endpoint %}}


{{% endpoint name="Get" %}}

Get the complete representation of a sample.

```
GET /api/samples/:sample_id
```

## Example

```
GET /api/samples/htosefxu
```

## Response

```
Status: 200 OK
```

```json
{
	"name": "Test 1",
	"isolate": "",
	"host": "",
	"locale": "",
	"subtraction": {
		"id": "Arabidopsis"
	},
	"files": [
		"jekfyjur-S00196E_AGTCAA_L007_R1.fq"
	],
	"group": "none",
	"nuvs": true,
	"pathoscope": true,
	"created_at": "2018-02-01T00:29:44.867000Z",
	"format": "fastq",
	"imported": false,
	"quality": {
		"count": 2086040,
		"encoding": "Sanger / Illumina 1.9\n",
		"length": [
			50,
			101
		],
		"gc": 49.0,
		"bases": [
			[32, 34, 33, 34, 31, 34], ...
        ],        
		"sequences": [
			0, ...
        ],
		"composition": [
			[27, 14, 12, 45], ...
        ]
	},
	"analyzed": false,
	"hold": true,
	"archived": false,
	"group_read": true,
	"group_write": false,
	"all_read": true,
	"all_write": false,
	"user": {
		"id": "igboyes"
	},
	"id": "htosefxu"
}
```

## Errors

| Status | Message             | Reason                                                      |
| :----- | :------------------ | :---------------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the required rights to read the sample |
| `404`  | Not found           | `sample_id` in URL does not exist                           |

{{% /endpoint %}}


{{% endpoint name="Create" permission="create_sample" %}}

Creates a sample record and starts a job that populates the record from a FASTQ file stored in the file manager.

The array of files must contain **only one or two items**. Samples with arrays containing one item will be assumed to by derived from single-end libraries, while arrays with two items will correspond to paired-end libraries.

```
POST /api/samples
```

## Input

| Name        | Type   | Required | Description                                            |
| :---------- | :----- | -------- | :----------------------------------------------------- |
| name        | string | true     | a **unique** name for the sample                       |
| host        | string | false    | the exact \(not subtraction\) host                     |
| isolate     | string | false    | the originating isolate                                |
| locale      | string | false    | the location in which the sample was collected         |
| subtraction | string | true     | the ``id`` of a previously imported subtraction genome |
| files       | array  | true     | ids of previously uploaded files                       |

## Example

```json
{
	"name": "Test A",
	"host": "Tree",
	"isolate": "Isolate A-1",
	"locale": "Earth",
	"subtraction": "Arabidopsis",
	"files": [
		"sibvzhqc-S00196E_AGTCAA_L007_R1.fq"
	]
}
```

## Response

```
Status: 201 Created
```

```json
{
	"name": "Test A",
	"host": "Tree",
	"isolate": "Isolate A-1",
	"locale": "Earth",
	"subtraction": {
		"id": "Arabidopsis"
	},
	"files": [
		"sibvzhqc-S00196E_AGTCAA_L007_R1.fq"
	],
	"group": "none",
	"nuvs": false,
	"pathoscope": false,
	"created_at": "2018-02-07T00:25:53.786000Z",
	"format": "fastq",
	"imported": "ip",
	"quality": null,
	"analyzed": false,
	"hold": true,
	"archived": false,
	"group_read": true,
	"group_write": false,
	"all_read": true,
	"all_write": false,
	"user": {
		"id": "igboyes"
	},
	"id": "oggjipxw"
}
```

## Errors

| Status | Message                       | Reason                                                        |
| :----- | :---------------------------- | :------------------------------------------------------------ |
| `403`  | Not permitted                 | client does not have the `create_sample` permission           |
| `404`  | Group not found               | `group` in POST body does not exist                           |
| `404`  | Subtraction not found         | `subtraction` in POST body  does not exist                    |
| `409`  | Sample name is already in use | the provided `name` is already assigned to an existing sample |
| `422`  | Invalid input                 | JSON request body is invalid                                  |

{{% /endpoint %}}


{{% endpoint name="Edit" %}}

Update modifiable fields of a sample.

```
PATCH /api/samples/:sample_id
```

## Input

| Name    | Type   | Description                                    |
| :------ | :----- | :--------------------------------------------- |
| name    | string | the sample name                                |
| host    | string | the exact \(not subtraction\) host             |
| isolate | string | the originating isolate                        |
| locale  | string | the location in which the sample was collected |

## Example

```
PATCH /api/samples/oggjipxw
```

```json
{
	"name": "Test A",
	"host": "Vine",
	"isolate": "Isolate A1",
	"locale": ""
}
```

## Response

```
Status: 200 OK
```

```json
{
	"name": "Test A",
	"host": "Vine",
	"isolate": "Isolate A1",
	"nuvs": false,
	"pathoscope": false,
	"created_at": "2018-02-07T00:25:53.786000Z",
	"imported": false,
	"archived": false,
	"user": {
		"id": "igboyes"
	},
	"id": "oggjipxw"
}
```

## Errors

| Status | Message             | Reason                                                      |
| :----- | :------------------ | :---------------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the required rights to edit the sample |
| `404`  | Not found           | `sample_id` in URL does not exist                           |
| `422`  | Invalid input       | request body JSON failed validation                         |

{{% /endpoint %}}


{{% endpoint name="Edit Rights" %}}

Edit the access rights for a sample.

Only the sample owner or an administrator may use this endpoint.

```
PATCH /api/samples/:sample_id/rights
```

## Input

| Name         | Type    | Description                 |
| :----------- | :------ | :-------------------------- |
| group        | string  | the owner `group_id`        |
| group\_read  | boolean | group can read sample       |
| group\_write | boolean | group can modify sample     |
| all\_read    | boolean | all users can read sample   |
| all\_write   | boolean | all users can modify sample |

## Example

```
PATCH /api/samples/oggjipxw/rights
```

```json
{
	"group": "administrator",
	"group_read": true,
	"group_write": true
}
```

## Response

```
Status: 200 OK
```

```json
{
	"group": "administrator",
	"group_read": true,
	"group_write": true,
	"all_read": true,
	"all_write": false
}
```

## Errors

| Status | Message                               | Reason                                                |
| :----- | :------------------------------------ | :---------------------------------------------------- |
| `403`  | Must be administrator or sample owner | user is neither the sample owner nor an administrator |
| `404`  | Not found                             | `sample_id` in URL does not exist                     |
| `422`  | Invalid input                         | request body JSON failed validation                   |

{{% /endpoint %}}


{{% endpoint name="Remove" %}}

Remove an existing sample record and its associated data files.

```
DELETE /api/samples/:sample_id
```

## Example

```
DELETE /api/samples/oggjipxw
```

## Response

```
Status: 204 No Content
```

## Errors

| Status | Message             | Reason                                                        |
| :----- | :------------------ | :------------------------------------------------------------ |
| `403`  | Insufficient rights | client does not have the required rights to remove the sample |
| `404`  | Not found           | `sample_id` in URL does not exist                             |

{{% /endpoint %}}


{{% endpoint name="List Analyses" %}}

Retrieve a summary list of analyses associated with a sample.

Returned documents do not include diagnostic data. Use the [analyses](/docs/api/analyses) endpoints for more extensive modification and querying of analysis data.

```
GET /api/samples/:sample_id/analyses
```

## Example

```
GET /api/samples/htosefxu/analyses
```

## Response

```
Status: 200 OK
```

```json
{
	"total_count": 2,
	"documents": [
		{
			"ready": true,
			"created_at": "2018-02-06T19:32:59.533000Z",
			"job": {
				"id": "khjhwnlf"
			},
			"algorithm": "nuvs",
			"sample": {
				"id": "htosefxu",
				"name": "Test 1"
			},
			"index": {
				"id": "jiwncaqr",
				"version": 0
			},
			"user": {
				"id": "igboyes"
			},
			"id": "yzgqgbld"
		},
		{
			"ready": true,
			"created_at": "2018-02-06T22:15:37.411000Z",
			"job": {
				"id": "dqswirty"
			},
			"algorithm": "pathoscope_bowtie",
			"sample": {
				"id": "htosefxu",
				"name": "Test 1"
			},
			"index": {
				"id": "bznqwjsa",
				"version": 1
			},
			"user": {
				"id": "igboyes"
			},
			"id": "xfvpxvwi"
		}
	]
}
```

## Errors

| Status | Message             | Reason                                                               |
| :----- | :------------------ | :------------------------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the required rights to view the sample analyses |
| `404`  | Not found           | `sample_id` in URL does not exist                                    |


{{% /endpoint %}}


{{% endpoint name="Analyze" %}}

Immediately create and placeholder analysis record for a sample and start an analysis job. When the job succeeds the analysis document will be populated.

```
POST /api/samples/:sample_id/analyses
```

## Input

| Name      | Type   | Description                                     |
| :-------- | :----- | :---------------------------------------------- |
| algorithm | string | the algorithm name \(*eg*. pathoscope\_bowtie\) |

## Example

```
POST /api/samples/htosefxu/analyses
```

```json
{
	"algorithm": "pathoscope_bowtie"
}
```

## Response

```
Status: 201 Created
Location: /api/analyses/fbzypgva
```

```json
{
	"ready": false,
	"created_at": "2018-02-07T17:50:44.508000Z",
	"job": {
		"id": "kizfvroe"
	},
	"algorithm": "pathoscope_bowtie",
	"sample": {
		"id": "htosefxu"
	},
	"index": {
		"id": "bznqwjsa",
		"version": 1
	},
	"user": {
		"id": "igboyes"
	},
	"id": "fbzypgva"
}
```

## Errors

| Status | Message             | Reason                                                                           |
| :----- | :------------------ | :------------------------------------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the required rights to create a new analysis for the sample |
| `404`  | Not found           | `sample_id` in URL does not exist                                                |
| `422`  | Invalid input       | the JSON request body is invalid                                                 |

{{% /endpoint %}}