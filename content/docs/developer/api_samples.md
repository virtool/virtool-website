---
title: "Samples"
description: "Query, create, edit, and analyze samples."
menu:
    developer:
        parent: API
---

# Find

Find samples based on the sample name or creator username.

{{< endpoint "GET" "/api/samples" >}}

## Parameters

| Name     | Type    | Default | Description                            |
| :---     | :------ | :------ | :------------------------------------- |
| find     | string  |         | sample name or username to filter by   |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

## Example

{{< request "GET" "/api/samples?find=test&page=1" />}}

## Response

{{< response "Status: 200 OK" >}}
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
{{< /response >}}

## Errors

| Status | Message                | Reason                             |
| :----- | :--------------------- | :--------------------------------- |
| `422`  | Invalid query          | invalid URL query fields or values |


# Get

{{< right read >}}

Get the complete representation of a sample.

{{< endpoint "GET" "/api/samples/:id" >}}

## Example

{{< request "GET" "/api/samples/htosefxu" />}}

## Response

{{< response "Status: 200 OK" >}}
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
{{< /response >}}

## Errors

| Status | Message             | Reason                                                      |
| :----- | :------------------ | :---------------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the required rights to read the sample |
| `404`  | Not found           | `sample_id` in URL does not exist                           |


# Create

{{< permission "create_sample" >}}

Creates a sample record and starts a job that populates the record from a FASTQ file stored in the file manager.

The array of files must contain **only one or two items**. Samples with arrays containing one item will be assumed to by derived from single-end libraries, while arrays with two items will correspond to paired-end libraries.

{{< endpoint "POST" "/api/samples" >}}

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

{{< request "POST" "/api/samples" >}}
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
{{< /request >}}

## Response

{{< response "Status: 201 Created" "Location: /api/samples/oggjipxw" >}}
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
{{< /response >}}

## Errors

| Status | Message                                  | Reason                                                                       |
| :----- | :--------------------------------------- | :--------------------------------------------------------------------------- |
| `400`  | File does not exist                      | the provided `file_id` does not exist                                        |
| `400`  | Group does not exist                     | `group` in POST body does not exist                                          |
| `400`  | Group value required for sample creation | the server is configured to required group assignment of samples on creation |
| `400`  | Sample name is already in use            | the provided `name` is already assigned to an existing sample                |
| `400`  | Subtraction does not exist               | `subtraction` in POST body  does not exist                                   |
| `403`  | Not permitted                            | client does not have the `create_sample` permission                          |
| `422`  | Invalid input                            | JSON request body is invalid                                                 |


# Edit

{{< right write >}}

Update modifiable fields of a sample.

{{< endpoint "PATCH" "/api/samples/:id" >}}

## Input

| Name    | Type   | Description                                    |
| :------ | :----- | :--------------------------------------------- |
| name    | string | the sample name                                |
| host    | string | the exact \(not subtraction\) host             |
| isolate | string | the originating isolate                        |
| locale  | string | the location in which the sample was collected |

## Example

{{< request "PATCH" "/api/samples/oggjipxw" >}}
```json
{
	"name": "Test A",
	"host": "Vine",
	"isolate": "Isolate A1",
	"locale": ""
}
```
{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}
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
{{< /response >}}

## Errors

| Status | Message                       | Reason                                                        |
| :----- | :---------------------------- | :------------------------------------------------------------ |
| `400`  | Sample name is already in use | the provided `name` is already assigned to an existing sample |
| `403`  | Insufficient rights           | client does not have the required rights to edit the sample   |
| `404`  | Not found                     | `sample_id` in URL does not exist                             |
| `422`  | Invalid input                 | request body JSON failed validation                           |


# Edit Rights

{{< administrator_owner >}}

Edit the access rights for a sample.

{{< endpoint "PATCH" "/api/samples/:id/rights" >}}

## Input

| Name         | Type    | Description                 |
| :----------- | :------ | :-------------------------- |
| group        | string  | the owner `group_id`        |
| group\_read  | boolean | group can read sample       |
| group\_write | boolean | group can modify sample     |
| all\_read    | boolean | all users can read sample   |
| all\_write   | boolean | all users can modify sample |

## Example

{{< request "PATCH" "/api/samples/oggjipxw/rights" >}}
```json
{
	"group": "administrator",
	"group_read": true,
	"group_write": true
}
```
{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
	"group": "administrator",
	"group_read": true,
	"group_write": true,
	"all_read": true,
	"all_write": false
}
```
{{< /response >}}

## Errors

| Status | Message                               | Reason                                                |
| :----- | :------------------------------------ | :---------------------------------------------------- |
| `400`  | Group does not exist                  | user group does not exist in instance                 |
| `403`  | Must be administrator or sample owner | user is neither the sample owner nor an administrator |
| `404`  | Not found                             | `sample_id` in URL does not exist                     |
| `422`  | Invalid input                         | request body JSON failed validation                   |


# Remove

{{< administrator_owner >}}

Remove an existing sample record and its associated data files.

{{< endpoint "DELETE" "/api/samples/:id" >}}

## Example

{{< request "DELETE" "/api/samples/oggjipxw" />}}

## Response

{{< response "Status: 204 No Content" />}}

## Errors

| Status | Message             | Reason                                                        |
| :----- | :------------------ | :------------------------------------------------------------ |
| `403`  | Insufficient rights | client does not have the required rights to remove the sample |
| `404`  | Not found           | `sample_id` in URL does not exist                             |


# List Analyses

{{< right read >}}

Retrieve a summary list of analyses associated with a sample.

Returned documents do not include diagnostic data. Use the [analyses](/docs/api/analyses) endpoints for more extensive modification and querying of analysis data.

{{< endpoint "GET" "/api/samples/:id/analyses" >}}

## Example

{{< request "GET" "/api/samples/htosefxu/analyses" />}}

## Response

{{< response "Status: 200 OK" >}}
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
{{< /response >}}

## Errors

| Status | Message             | Reason                                                               |
| :----- | :------------------ | :------------------------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the required rights to view the sample analyses |
| `404`  | Not found           | `sample_id` in URL does not exist                                    |


# Analyze

{{< right write >}}

Immediately create and placeholder analysis record for a sample and start an analysis job. When the job succeeds the analysis document will be populated.

{{< endpoint "POST" "/api/samples/:id/analyses" >}}

## Input

| Name      | Type   | Required | Description                                     |
| :-------- | :----- | -------- | :---------------------------------------------- |
| algorithm | string | True     | the algorithm name \(*eg*. pathoscope\_bowtie\) |
| ref_id    | string | True     | the reference to run the analysis against       |

## Example

{{< request "POST" "/api/samples/htosefxu/analyses" >}}
```json
{
	"algorithm": "pathoscope_bowtie",
	"ref_id": "foo"
}
```
{{< /request >}}

## Response

{{< response "Status: 201 Created" "Location: /api/analyses/fbzypgva" >}}
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
{{< /response >}}

## Errors

| Status | Message                             | Reason                                                                           |
| :----- | :---------------------------------- | :------------------------------------------------------------------------------- |
| `400`  | Reference does not exist            | specified `ref_id` not found                                                     |
| `400`  | No index is ready for the reference | the reference doesn't have a built index ready for analysis                      |
| `403`  | Insufficient rights                 | client does not have the required rights to create a new analysis for the sample |
| `404`  | Not found                           | `sample_id` in URL does not exist                                                |
| `422`  | Invalid input                       | the JSON request body is invalid                                                 |
