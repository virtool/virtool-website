---
title: "HMM"
description: "Manage and query HMM annotations and files."
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 90
---

{{% endpoint name="Find" %}}

Find HMM annotations.

```
GET /api/hmms?find=rep&per_page=2
```

## Parameters

| Name     | Type    | Default   | Description                            |
| :------- | :------ | :-------  | :------------------------------------- |
| find     | string  | 	         | term to search by                      |
| page     | integer | 1         | page number of results to return       |
| per_page | integer | 15        | number of documents to return per page |

## Example

```
GET /api/hmms/page=1&per_page=2
```

## Response

```
Status: 200 OK
```



```json
{
	"documents": [
		{
			"families": {
				"None": 2,
				"Geminiviridae": 235
			},
			"cluster": 2,
			"count": 253,
			"names": [
				"replication-associated protein",
				"replication associated protein",
				"Rep"
			],
			"id": "ulryufil"
		},
		{
			"families": {
				"None": 1,
				"Poxviridae": 1,
				"Geminiviridae": 196
			},
			"cluster": 5,
			"count": 208,
			"names": [
				"replication enhancer protein",
				"AC3 protein",
				"C3 protein"
			],
			"id": "impzkkno"
		}
	],
	"total_count": 4717,
	"found_count": 79,
	"page_count": 40,
	"per_page": 2,
	"page": 1,
	"file_exists": true
}
```

{{% /endpoint %}}


{{% endpoint name="Get" %}}

Get the complete representation of a single HMM annotation.

```
GET /api/hmms/annotations/:hmm_id
```

## Example

```
GET /api/hmms/annotations/zltnktou
```

## Response

```
Status: 200 OK
```

```json
{
	"families": {
		"None": 1,
		"Geminiviridae": 203
	},
	"total_entropy": 72.08,
	"length": 136,
	"cluster": 3,
	"entries": [
		{
			"accession": "NP_040323.1",
			"gi": "9626084",
			"organism": "Pepper huasteco yellow vein virus",
			"name": "AL2 protein"
		},
		{
			"accession": "NP_044924.1",
			"gi": "9629639",
			"organism": "Tomato mottle Taino virus",
			"name": "transactivator protein"
		}
	],
	"genera": {
		"Begomovirus": 197,
		"Topocuvirus": 1,
		"None": 2,
		"Curtovirus": 4
	},
	"mean_entropy": 0.53,
	"count": 216,
	"names": [
		"AC2 protein",
		"C2 protein",
		"AC2"
	],
	"hidden": false,
	"id": "zltnktou"
}
```

{{% /endpoint %}}


{{% endpoint name="Get Install" %}}

Get the status of the most recent or current install process.

```
GET /api/hmms/install
```

## Response

```
Status: 200 OK
```

```json
{
	"process": {
		"progress": 1.0,
		"step": "import_annotations"
	},
	"ready": true,
	"download_size": 85904451,
	"id": "hmm_install"
}
```

{{% /endpoint %}}


{{% endpoint name="Install" %}}

Automatically install the official HMM profiles and annotations.

If data have already been installed, this operation will safely remove the profiles and any unused annotations and reinstall the offical profiles and annotations.

```
PATCH /api/hmms/install
```

## Response

```
Status: 200 OK
```

```json
{
	"process": {
		"progress": 0,
		"step": "check_github"
	},
	"ready": false,
	"download_size": null,
	"id": "hmm_install"
}
```
