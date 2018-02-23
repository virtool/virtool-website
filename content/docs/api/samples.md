---
title: "Samples"
type: "api"
menu:
    api:
        parent: endpoints
        weight: 30
---

Samples represent Illumina sequencing libraries.

## Find {#find}

```
GET /api/samples
```

**Params**

| Name     | Type    | Default | Description                            |
| :---     | :------ | :------ | :------------------------------------- |
| find     | string  | `null`  | sample name or username to filter by   |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

**Headers**

```
Status: 200 OK
```

**Response**

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


## Get {#get}

```
GET /api/samples/:sample_id
```

Get the complete representation of a sample.

**Example**

```
GET /api/samples/htosefxu
```

**Headers**

```
Status: 200 OK
```

**Response**

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

## Create {#create}

```
POST /api/samples
```

Starts a job that creates a Virtool sample from a file stored in the file manager.

Sample names must be case-insensitive unique.

The array of files must contain only one or two items. Samples with arrays containing one item will be assumed to by derived from single-end libraries, while arrays with two items will correspond to paired-end libraries.

**Input**

| Name        | Type   | Description                                            |
| :---------- | :----- | :----------------------------------------------------- |
| name        | string | a new name for the sample                              |
| host        | string | the exact \(not subtraction\) host                     |
| isolate     | string | the originating isolate                                |
| locale      | string | the location in which the sample was collected         |
| subtraction | string | the ``id`` of a previously imported subtraction genome |
| files       | array  | ids of previously uploaded files                       |

**Example**

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

**Headers**

```
Status: 201 Created
```

**Response**

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

## Edit {#edit}

```
PATCH /api/samples/:sample_id
```

Update modifiable fields of a sample.

**Input**

| Name        | Type   | Description                                              |
| :---------- | :----- | :------------------------------------------------------- |
| name        | string | the sample name                                          |
| host        | string | the exact \(not subtraction\) host                       |
| isolate     | string | the originating isolate                                  |
| locale      | string | the location in which the sample was collected           |

**Example**

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

**Headers**

```
Status: 200 OK
```

**Response**

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


## Edit rights {#edit_rights}

```
PATCH /api/samples/:sample_id/rights
```

**Input**

| Name         | Type    | Description                 |
| :----------- | :------ | :-------------------------- |
| group        | string  | the owner `group_id`        |
| group\_read  | boolean | group can read sample       |
| group\_write | boolean | group can modify sample     |
| all\_read    | boolean | all users can read sample   |
| all\_write   | boolean | all users can modify sample |

**Example**

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

**Headers**

```
Status: 200 OK
```

**Response**

```json
{
	"group": "administrator",
	"group_read": true,
	"group_write": true,
	"all_read": true,
	"all_write": false
}
```


## Remove {#remove}

```
DELETE /api/samples/:sample_id
```

Remove and existing sample record and its associated data files.s

**Example**

```
DELETE /api/samples/oggjipxw
```

**Headers**

```
Status: 204 No Content
```


## List analyses {#list_analyses}

```
GET /api/samples/:sample_id/analyses
```

Retrieve a summary list of analyses associated with a sample. Returned documents do not include diagnostic data. Use the [analyses](web-api/analyses) endpoints for more extensive modification and querying of analysis data.

**Example**

```
GET /api/samples/htosefxu/analyses
```

**Headers**

```
Status: 200 OK
```

**Response**

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

## Analyze {#analyze}

```
POST /api/samples/:sample_id/analyses
```

**Input**

| Name      | Type   | Description                                   |
| :-------- | :----- | :-------------------------------------------- |
| algorithm | string | the algorithm name \(eg. pathoscope\_bowtie\) |

**Example**

```
POST /api/samples/htosefxu
```

```json
{
	"algorithm": "pathoscope_bowtie"
}
```

**Headers**

```
Status: 201 Created
Location: /api/analyses/fbzypgva
```

**Response**

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
