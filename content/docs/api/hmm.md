---
title: "HMM"
type: "api"
menu:
    api:
        parent: endpoints
        weight: 80
---

Manage and query HMM annotations and files.

### Find {#find}

```
GET /api/hmms/annotations
```

Retrieve a list of HMM annotations.

**Parameters**

| Name     | Type    | Default   | Description                            |
| :------- | :------ | :-------  | :------------------------------------- |
| page     | integer | 1         | page number of results to return       |
| per_page | integer | 15        | number of documents to return per page |

**Example**

```
GET /api/hmms/page=1&per_page=2
```

**Headers**

```
Status: 200 OK
```

**Response**

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
			"id": "mqybgqar"
		},
		{
			"families": {
				"None": 1,
				"Geminiviridae": 203
			},
			"cluster": 3,
			"count": 216,
			"names": [
				"AC2 protein",
				"C2 protein",
				"AC2"
			],
			"id": "zltnktou"
		}
	],
	"total_count": 4717,
	"found_count": 4717,
	"page_count": 2359,
	"per_page": 2,
	"page": 1,
	"file_exists": true
}
```

### Get {#get}

```
GET /api/hmms/annotations/:hmm_id
```

Get the complete representation of a single HMM annotation.

**Example**

```
GET /api/hmms/annotations/zltnktou
```

**Response**

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


### Get Install {#get_install}

```
GET /api/hmms/install
```

Get the status of the most recent or current install process.

**Headers**

```
Status: 200 OK
```

**Response**

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


### Install {#install}

```
PATCH /api/hmms/install
```

Automatically install the official HMM profiles and annotations. If data have already been installed, this operation will safely remove the profiles and any unused annotations and reinstall the offical profiles and annotations.

**Headers**

```
Status: 200 OK
```

**Response**

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
