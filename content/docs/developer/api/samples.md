---
title: "Samples"
description: "Query, create, edit, and analyze samples."
menu:
    developer:
        parent: API
---

# Find

Find samples based on the sample name, creator username or labels.

### Filtering by Workflow

Search results can be filtered by the state of analysis workflows associated with the sample.

Workflow queries look like this: `?workflows=pathoscope%3Aready+nuvs%3Aready`

The query must be provided as the `workflows` URL parameter. Workflow-state pairs must be listed with a joining percent-encoded colon (`%3A`) and separated by a space (represented above by `+`).

If no `workflows` parameter is provided, no workflow filtering is performed. When a `workflows` query is provided, only matching workflows are returned.

{{< endpoint "GET" "/api/samples" >}}



## Workflow States

|           |                                                       |
| --------- | ----------------------------------------------------- |
| `none`    | no analyses for the workflow                          |
| `pending` | one or more analyses running for the workflow         |
| `ready`   | (one or more analyses have finished for the workflow) |

## Parameters

| Name      | Type    | Default | Description                                                       |
| :-------- | :------ | :------ | :---------------------------------------------------------------- |
| find      | string  |         | sample name or username to filter by                              |
| label     | integer |         | one or more label IDs to filter by                                |
| workflows | string  |         | a special query for filtering samples by analysis workflow status |
| page      | integer | 1       | page number of results to return                                  |
| per_page  | integer | 15      | number of documents to return per page                            |

## Example

{{< request "GET" "/api/samples?find=test&label=1&workflows?pathoscope%3Aready" />}}

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
            "id": "htosefxu",
            "notes": "This is a note.",
            "labels": [1]
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

| Status | Message       | Reason                             |
| :----- | :------------ | :--------------------------------- |
| `422`  | Invalid query | invalid URL query fields or values |

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
	"id": "htosefxu",
    "notes": "This is a note.",
    "labels": ["ahdnsdfr"]
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

The `group` input value is only required if the Virtool instance is configured to require a group choice during sample creation.

{{< endpoint "POST" "/api/samples" >}}

## Input

| Name         | Type          | Required | Description                                            |
| :----------- | :------------ | -------- | :----------------------------------------------------- |
| name         | string        | true     | a **unique** name for the sample                       |
| files        | array         | true     | ids of previously uploaded files                       |
| group        | string        | false    | a group ID the sample should be owned by               |
| host         | string        | false    | the exact \(not subtraction\) host                     |
| isolate      | string        | false    | the originating isolate                                |
| locale       | string        | false    | the location in which the sample was collected         |
| notes        | string        | false    | a note for the sample                                  |
| subtractions | array[string] | true     | an array of IDs of default subtractions for the sample |
| labels       | array         | false    | an array of labels for the sample                      |

## Example

{{< request "POST" "/api/samples" >}}

```json
{
    "name": "Test A",
    "host": "Tree",
    "isolate": "Isolate A-1",
    "locale": "Earth",
    "subtractions": [
        "foo",
        "bar"
    ],
    "files": ["sibvzhqc-S00196E_AGTCAA_L007_R1.fq"],
    "notes": "This is a note."
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
    "subtractions": [
        {
            "id": "foo",
            "name": "Arabidopsis thaliana"
        },
        {
            "id": "bar",
            "name": "Malus domestica"
        }
    ],
    "files": ["sibvzhqc-S00196E_AGTCAA_L007_R1.fq"],
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
    "id": "oggjipxw",
    "notes": "This is a note."
}
```

{{< /response >}}

## Errors

| Status | Message                                  | Reason                                                                       |
| :----- | :--------------------------------------- | :--------------------------------------------------------------------------- |
| `400`  | File does not exist                      | the provided `upload_id` does not exist                                      |
| `400`  | Group does not exist                     | `group` in POST body does not exist                                          |
| `400`  | Group value required for sample creation | the server is configured to required group assignment of samples on creation |
| `400`  | Sample name is already in use            | the provided `name` is already assigned to an existing sample                |
| `400`  | Subtraction does not exist               | one or more IDs in `subtractions` does not exist                             |
| `403`  | Not permitted                            | client does not have the `create_sample` permission                          |
| `422`  | Invalid input                            | JSON request body is invalid                                                 |

# Edit

{{< right write >}}

Update modifiable fields of a sample.

{{< endpoint "PATCH" "/api/samples/:id" >}}

## Input

| Name         | Type          | Description                                            |
| :----------- | :------------ | :----------------------------------------------------- |
| name         | string        | the sample name                                        |
| host         | string        | the exact \(not subtraction\) host                     |
| isolate      | string        | the originating isolate                                |
| labels       | array         | the sample labels                                      |
| locale       | string        | the location in which the sample was collected         |
| notes        | string        | the sample notes                                       |
| subtractions | array[string] | an array of IDs of default subtractions for the sample |

## Example

{{< request "PATCH" "/api/samples/oggjipxw" >}}

```json
{
    "name": "Test A",
    "host": "Vine",
    "isolate": "Isolate A1",
    "locale": "",
    "notes": "This is the first test.",
    "labels": ["fndjfkfn", "djfnkdhf"]
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
    "id": "oggjipxw",
    "notes": "This is the first test.",
    "labels": ["fndjfkfn", "djfnkdhf"]
}
```

{{< /response >}}

## Errors

| Status | Message                       | Reason                                                        |
| :----- | :---------------------------- | :------------------------------------------------------------ |
| `400`  | Sample name is already in use | the provided `name` is already assigned to an existing sample |
| `400`  | Labels do not exist           | the label ``id`` could not be found                           |
| `403`  | Insufficient rights           | client does not have the required rights to edit the sample   |
| `404`  | Not found                     | `sample_id` in URL does not exist                             |
| `422`  | Invalid input                 | request body JSON failed validation                           |


# Set Rights

{{< administrator_owner >}}

Set the access rights for a sample.

{{< endpoint "PATCH" "/api/samples/:id/rights" >}}

## Input

| Name        | Type    | Description                 |
| :---------- | :------ | :-------------------------- |
| group       | string  | the owner `group_id`        |
| group_read  | boolean | group can read sample       |
| group_write | boolean | group can modify sample     |
| all_read    | boolean | all users can read sample   |
| all_write   | boolean | all users can modify sample |

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

Returned documents do not include diagnostic data. Use the [analyses](/docs/developer/api/analyses) endpoints for more extensive modification and querying of analysis data.

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
            "subtractions": [
              {
                "id": "yhxoynb0",
                "name": "Arabidopsis Thaliana"
              }
            ],
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
            "subtractions": [
              {
                "id": "yhxoynb0",
                "name": "Arabidopsis Thaliana"
              }
            ],
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

| Name         | Type   | Required | Description                                                       |
| :----------- | :----- | -------- | :---------------------------------------------------------------- |
| algorithm    | string | True     | the algorithm name \(_eg_. pathoscope_bowtie\)                    |
| ref_id       | string | True     | the reference to run the analysis against                         |
| subtractions | array  | False    | the IDs of default subtractions to set for analyses of the sample |

## Example

{{< request "POST" "/api/samples/htosefxu/analyses" >}}

```json
{
    "algorithm": "pathoscope_bowtie",
    "ref_id": "foo",
    "subtractions": ["yhxoynb0", "qlwf5l01"]
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
    "subtractions": ["yhxoynb0", "qlwf5l01"],
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


# Download Reads

Download a sample reads file.

The only files available to download are `reads_1.fq.gz` and `reads_2.fq.gz`.

{{< endpoint "GET" "/api/samples/:id/reads/:filename" >}}

## Example
{{< request "GET" "/api/samples/foo/reads/reads_1.fq.gz" />}}

## Response
{{< response "Status: 200 OK" />}}

## Errors

| Status | Message   | Reason                                   |
| :----- | :-------- | :--------------------------------------- |
| `404`  | Not found | Either the sample or file does not exist |


# Download Artifacts

Download a sample artifact file.

{{< endpoint "GET" "/api/samples/:id/artifacts/:filename" >}}

## Example
{{< request "GET" "/api/samples/foo/artifacts/reads_1.fq.gz" />}}

## Response
{{< response "Status: 200 OK" />}}

## Errors

| Status | Message   | Reason                                   |
| :----- | :-------- | :--------------------------------------- |
| `404`  | Not found | Either the sample or file does not exist |