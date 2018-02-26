---
title: "Viruses"
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 60
---

# Find

Find viruses by their name or abbreviation

```
GET /api/viruses
```

## Parameters

| Name     | Type    | Default   | Description                            |
| :------- | :------ | :-------  | :------------------------------------- |
| find     | string  | ``null``  | name or abbreviation to find   by      |
| verified | boolean | ``false`` | only show verified viruses             |
| page     | integer | 1         | page number of results to return       |
| per_page | integer | 15        | number of documents to return per page |

## Example

```
GET /api/viruses?find=tobacco&per_page=4
```

## Response

```
Status: 200 OK
```

```json
{
	"documents": [
		{
			"abbreviation": "ETBTV",
			"name": "Ethiopian tobacco bushy top virus",
			"verified": true,
			"version": 0,
			"id": "fc27c728"
		},
		{
			"abbreviation": "ETBTVsatRNA",
			"name": "Ethiopian tobacco bushy top virus satellite RNA",
			"verified": true,
			"version": 0,
			"id": "3f5cf77e"
		},
		{
			"abbreviation": "",
			"name": "Tobacco bushy top virus",
			"verified": true,
			"version": 0,
			"id": "ff09c3a3"
		},
		{
			"abbreviation": "",
			"name": "Tobacco bushy top virus satellite-like RNA",
			"verified": true,
			"version": 0,
			"id": "7cddf58b"
		}
	],
	"total_count": 1418,
	"found_count": 40,
	"page_count": 10,
	"per_page": 4,
	"page": 1,
	"modified_count": 2
}
```


# Get

Get a complete representation of a virus.

```
GET /api/viruses/:virus_id
```

## Example

```
GET /api/viruses/a15f9837
```

## Response

```
Status: 200 OK
```

```json
{
	"abbreviation": "ALV",
	"name": "Alfalfa latent virus",
	"isolates": [
		{
			"source_type": "isolate",
			"id": "0jrrxdxh",
			"source_name": "13SL1177",
			"default": false,
			"sequences": [
				{
					"definition": "Alfalfa latent virus, complete genome",
					"host": "",
					"sequence": "ATAAACAACCATATATATAA...",
					"id": "13SL1177_ALV"
				}
			]
		},
		{
			"source_type": "isolate",
			"id": "gs2tu43d",
			"source_name": "ATCC PV-264",
			"default": true,
			"sequences": [
				{
					"definition": "Alfalfa latent virus isolate ATCC PV-264 RNA-dependent RNA polymerase, TGB1, TGB2, TGB3, and coat protein genes, complete cds.",
					"host": "Medicago sativa",
					"sequence": "ATAAACAACCAACACCCCCT...",
					"id": "NC_026616"
				}
			]
		}
	],
	"last_indexed_version": 0,
	"created_at": "2018-02-01T00:28:28.346000Z",
	"verified": true,
	"version": 0,
	"schema": [],
	"id": "a15f9837",
	"most_recent_change": null,
	"issues": null
}
```


# Create

Create a new virus given a name and abbreviation.

Virus names and abbreviations must be unique within the database. Requesting a name or abbreviation that is already in use will result in a ``409 Conflict``. Uniqueness tests for virus names are **case-insensitive**.

Isolates and sequence data must be added in separate requests.

```
POST /api/viruses
```

## Input

| Name         | Type   | Optional | Description                   |
| :----------- | :----- | :------- | :---------------------------- |
| name         | string | False    | the virus name                |
| abbreviation | string | True     | an abbreviation for the virus |

## Example

```
POST /api/viruses
```

```json
{
	"name": "Foobar",
	"abbreviation": "FBR"
}
```

## Response

```
Status: 201 Created
```

```json
{
	"name": "Foobar",
	"abbreviation": "FBR",
	"schema": [],
	"last_indexed_version": null,
	"verified": false,
	"isolates": [],
	"version": 0,
	"id": "uxusjtcl",
	"most_recent_change": {
		"method_name": "create",
		"description": "Created Foobar (FBR)",
		"created_at": "2018-02-07T18:54:33.348000Z",
		"virus": {
			"id": "uxusjtcl",
			"name": "Foobar",
			"version": 0
		},
		"user": {
			"id": "igboyes"
		},
		"change_id": "uxusjtcl.0"
	},
	"issues": {
		"empty_virus": true,
		"empty_isolate": false,
		"empty_sequence": false,
		"isolate_inconsistency": false
	}
}
```


# Edit

Edit an existing virus by changing its name, abbreviation, or schema.

Virus names and abbreviations must be unique within the database. Requesting a name or abbreviation that is already in use will result in a ``409 Conflict``. Uniqueness tests for virus names are **case-insensitive**.

```
PATCH /api/viruses/:virus_id
```

## Input

| Name         | Type   | Optional | Description                   |
| :----------- | :----- | :------- | :---------------------------- |
| name         | string | ture     | the virus name                |
| abbreviation | string | true     | the virus abbreviation        |
| schema       | array  | true     | a sequence schema             |

**Example**

```
PATCH /api/viruses/uxusjtcl
```

```json
{
	"abbreviation": "FB"
}
```

## Response

```
Status: 200 OK
```

```json
{
	"name": "Foobar",
	"abbreviation": "FB",
	"schema": [],
	"last_indexed_version": null,
	"verified": false,
	"isolates": [],
	"version": 1,
	"id": "uxusjtcl",
	"most_recent_change": {
		"method_name": "edit",
		"description": "Changed abbreviation to FB",
		"created_at": "2018-02-07T18:55:33.605000Z",
		"virus": {
			"id": "uxusjtcl",
			"name": "Foobar",
			"version": 1
		},
		"user": {
			"id": "igboyes"
		},
		"change_id": "uxusjtcl.1"
	},
	"issues": {
		"empty_virus": true,
		"empty_isolate": false,
		"empty_sequence": false,
		"isolate_inconsistency": false
	}
}
```


# Remove

Removes a virus, its isolates, and sequences.

```
DELETE /api/viruses/:virus_id
```

## Example

```
DELETE /api/viruses/uxusjtcl
```

## Response

```
Status: 204 No content
```

# List Isolates {#list_isolates}

List the isolates for a given virus.

```
GET /api/viruses/:virus_id/isolates
```

## Example

```
GET /api/viruses/a15f9837/isolates
```

## Response

```
Status: 200 OK
```

```json
[
	{
		"source_type": "isolate",
		"id": "0jrrxdxh",
		"source_name": "13SL1177",
		"default": false,
		"sequences": [
			{
				"definition": "Alfalfa latent virus, complete genome",
				"host": "",
				"sequence": "ATAAACAACCAACTCCCCCCCTATCTTTTT...",
				"id": "13SL1177_ALV"
			}
		]
	},
	{
		"source_type": "isolate",
		"id": "gs2tu43d",
		"source_name": "ATCC PV-264",
		"default": true,
		"sequences": [
			{
				"definition": "Alfalfa latent virus isolate ATCC PV-264 RNA-dependent RNA polymerase, TGB1, TGB2, TGB3, and coat protein genes, complete cds.",
				"host": "Medicago sativa",
				"sequence": "ATAAACAACCAACACCCCCTCAATCTTTTT...",
				"id": "NC_026616"
			}
		]
	}
]
```


# Get Isolate {#get_isolate}

Get the complete representation of a single isolate.

```
GET /api/viruses/:virus_id/isolates/:isolate_id
```

## Example

```
GET /api/viruses/a15f9837/isolates/0jrrxdxh
```

## Response

```
Status: 200 OK
```

```json
{
	"source_type": "isolate",
	"id": "0jrrxdxh",
	"source_name": "13SL1177",
	"default": false,
	"sequences": [
		{
			"definition": "Alfalfa latent virus, complete genome",
			"host": "",
			"sequence": "ATAAACAACCAACTCCCCCCCTATCTTTTTG...",
			"id": "13SL1177_ALV"
		}
	]
}
```


# Add Isolate {#add_isolate}

Add a new isolate.

Setting the isolate to default will steal default status from any existing default isolate. The first added isolate will be set to default regardless of input.

```
POST /api/viruses/:virus_id/isolates
```

## Input

| Name         | Type    | Optional | Description                          |
| :----------- | :------ | :------- | :----------------------------------- |
| source_type  | string  | True     | a source type (eg. isolate, variant) |
| source_name  | string  | True     | a source name (eg. 8816-v2, Jal-01)  |
| default      | boolean | True     | set the isolate as default           |


## Example

```
POST /api/viruses/a15f9837/isolates
```

```json
{
	"source_type": "isolate",
	"source_name": "a"
}
```

## Response

```
Status: 201 Created
```

```json
{
	"source_type": "isolate",
	"source_name": "a",
	"default": false,
	"id": "utcvsgwz",
	"sequences": []
}
```


# Edit Isolate {#edit_isolate}

Edit an existing isolate.

```
PATCH /api/viruses/:virus_id/isolates/:isolate_id
```

## Input

| Name         | Type    | Optional | Description                          |
| :----------- | :------ | :------- | :----------------------------------- |
| source_type  | string  | True     | a source type (eg. isolate, variant) |
| source_name  | string  | True     | a source name (eg. 8816-v2, Jal-01)  |

## Example

```
PATCH /api/viruses/a15f9837/isolates/utcvsgwz
```

```json
{
	"source_name": "b"
}
```

## Response

```
Status: 200 OK
```

```json
{
	"source_type": "isolate",
	"source_name": "b",
	"default": false,
	"id": "utcvsgwz",
	"sequences": []
}
```

# Set Default Isolate {#set_default_isolate}

Sets an isolate as default **and** unsets any existing default isolate. Take no input.

```
PUT /api/viruses/:virus_id/isolates/:isolate_id/default
```

## Example

```
PUT /api/viruses/a15f9837/isolates/utcvsgwz/default
```

## Response

```
Status: 200 OK
```

```json
{
	"source_type": "isolate",
	"source_name": "b",
	"default": true,
	"id": "utcvsgwz",
	"sequences": []
}
```

# Remove Isolate {#remove_isolate}

Removes an isolate and its sequences. If it is the default isolate, the first isolate in the list will be set as default.

```
DELETE /api/viruses/:virus_id/isolates/:isolate_id
```

## Example

```
DELETE /api/viruses/a15f9837/isolates/utcvsgwz/default
```

## Response

```
Status: 204 No content
```


# Add Sequence {#add_sequence}

Add a sequence to an isolate.

Sequence ``id`` values must be globally unique and should be GenBank accessions where possible.

Providing a value for ``segment`` will have no effect unless the parents virus has a schema configured. If a schema is configured, the value provided for ``segment`` must be one of the segments names defined in the schema.

Values provided for ``sequence`` must be plain text, **not** FASTA formatted. Sequences are automatically stripped of whitespace.

```
POST /api/viruses/:virus_id/isolates/:isolate_id/sequences
```

## Input

| Name         | Type   | Optional | Description                                  |
| :----------- | :----- | :------- | :------------------------------------------- |
| id           | string | false    | an id for the sequence                       |
| definition   | string | false    | a descriptive definition                     |
| host         | string | true     | the host of origin                           |
| segment      | string | true     | the schema segment associated with the virus |
| sequence     | string | false    | an abbreviation for the virus                |

## Example

```
POST /api/viruses/a15f9837/isolates/utcvsgwz/sequences
```

```json
{
	"id": "foobar",
	"definition": "A sequence for demo purposes",
	"sequence": "ATGACTAGCGGACTTACA"
}
```

## Response

```
Status: 201 Created
```

```json
{
	"definition": "A sequence for demo purposes",
	"sequence": "ATGACTAGCGGACTTACA",
	"virus_id": "a15f9837",
	"isolate_id": "utcvsgwz",
	"host": "",
	"segment": null,
	"id": "foobar"
}
```

# Edit Sequence {#edit_sequence}

Edit an existing sequence.

Providing a value for ``segment`` will have no effect unless the parents virus has a schema configured. If a schema is configured, the value provided for ``segment`` must be one of the segments names defined in the schema.

Values provided for ``sequence`` must be plain text, **not** FASTA formatted. Sequences are automatically stripped of whitespace.

```
PATCH /api/viruses/:virus_id/isolates/:isolate_id/sequences/:sequence_id
```

## Input

| Name         | Type   | Optional | Description                                  |
| :----------- | :----- | :------- | :------------------------------------------- |
| definition   | string | false    | a descriptive definition                     |
| host         | string | true     | the host of origin                           |
| segment      | string | true     | the schema segment for the sequence          |
| sequence     | string | false    | the sequence                                 |

## Example

```
PATCH /api/viruses/a15f9837/isolates/utcvsgwz/sequences/foobar
```

```json
{
	"host": "Plant",
	"sequence": "TACGTGTCGATCGATCGTAGTCGTACG"
}
```

## Response

```
Status: 200 OK
```

```json
{
	"definition": "A sequence for demo purposes",
	"sequence": "TACGTGTCGATCGATCGTAGTCGTACG",
	"virus_id": "a15f9837",
	"isolate_id": "utcvsgwz",
	"host": "Plant",
	"segment": null,
	"id": "foobar"
}
```

# Remove Sequence {#remove_sequence}

Remove an existing sequence from an isolate.

```
DELETE /api/viruses/:virus_id/isolates/:isolate_id/sequences/:sequence_id
```

## Example

```
DELETE /api/viruses/a15f9837/isolates/utcvsgwz/sequences/foobar
```

## Response

```
Status: 204 No Content
```

# List History {#list_history}

Retrieves a list of all changes made to the virus.

See [history endpoints](/docs/api/history/) for more advanced querying and modification of history data.

```
GET /api/viruses/:virus_id/history
```

## Example

```
GET /api/viruses/a15f9837/history
```

## Response

```
Status: 200 OK
```

```json
[
	{
		"_id": "a15f9837.0",
		"method_name": "create",
		"description": "Created Alfalfa latent virus",
		"created_at": "2018-02-01T00:28:28.437000Z",
		"virus": {
			"id": "a15f9837",
			"name": "Alfalfa latent virus",
			"version": 0
		},
		"index": {
			"id": "jiwncaqr",
			"version": 0
		},
		"user": {
			"id": "igboyes"
		},
		"diff": {
			"_id": "a15f9837",
			"abbreviation": "ALV",
			"name": "Alfalfa latent virus",
			"lower_name": "alfalfa latent virus",
			"isolates": [
				{
					"source_type": "isolate",
					"id": "0jrrxdxh",
					"source_name": "13SL1177",
					"default": false,
					"sequences": [
						{
							"_id": "13SL1177_ALV",
							"definition": "Alfalfa latent virus, complete genome",
							"virus_id": "a15f9837",
							"isolate_id": "0jrrxdxh",
							"host": "",
							"sequence": "ATAAACAACCAACTCCCCCCCTATCTTTTT..."
						}
					]
				},
				{
					"source_type": "isolate",
					"id": "gs2tu43d",
					"source_name": "ATCC PV-264",
					"default": true,
					"sequences": [
						{
							"_id": "NC_026616",
							"definition": "Alfalfa latent virus isolate ATCC PV-264 ...",
							"virus_id": "a15f9837",
							"isolate_id": "gs2tu43d",
							"host": "Medicago sativa",
							"sequence": "ATAAACAACCAACACCCCCTCAATCTTTTT..."
						}
					]
				}
			],
			"last_indexed_version": null,
			"created_at": "2018-02-01T00:28:28.346000Z",
			"verified": true,
			"version": 0
		}
	},
	{
		"_id": "a15f9837.1",
		"method_name": "add_isolate",
		"description": "Added Isolate a",
		"created_at": "2018-02-07T19:16:59.740000Z",
		"virus": {
			"id": "a15f9837",
			"name": "Alfalfa latent virus",
			"version": 1
		},
		"index": {
			"id": "unbuilt",
			"version": "unbuilt"
		},
		"user": {
			"id": "igboyes"
		},
		"diff": [
			[
				"add",
				"isolates",
				[
					[
						2,
						{
							"source_type": "isolate",
							"source_name": "a",
							"default": false,
							"id": "utcvsgwz",
							"sequences": []
						}
					]
				]
			],
			[
				"change",
				"verified",
				[
					true,
					false
				]
			],
			[
				"change",
				"version",
				[
					0,
					1
				]
			]
		]
	},
	{
		"_id": "a15f9837.2",
		"method_name": "edit_isolate",
		"description": "Renamed Isolate a to Isolate b",
		"created_at": "2018-02-07T19:19:08.153000Z",
		"virus": {
			"id": "a15f9837",
			"name": "Alfalfa latent virus",
			"version": 2
		},
		"index": {
			"id": "unbuilt",
			"version": "unbuilt"
		},
		"user": {
			"id": "igboyes"
		},
		"diff": [
			[
				"change",
				[
					"isolates",
					2,
					"source_name"
				],
				[
					"a",
					"b"
				]
			],
			[
				"change",
				"version",
				[
					1,
					2
				]
			]
		]
	},
	{
		"_id": "a15f9837.3",
		"method_name": "set_as_default",
		"description": "Set Isolate b as default",
		"created_at": "2018-02-07T19:19:59.757000Z",
		"virus": {
			"id": "a15f9837",
			"name": "Alfalfa latent virus",
			"version": 3
		},
		"index": {
			"id": "unbuilt",
			"version": "unbuilt"
		},
		"user": {
			"id": "igboyes"
		},
		"diff": [
			[
				"change",
				[
					"isolates",
					1,
					"default"
				],
				[
					true,
					false
				]
			],
			[
				"change",
				[
					"isolates",
					2,
					"default"
				],
				[
					false,
					true
				]
			],
			[
				"change",
				"version",
				[
					2,
					3
				]
			]
		]
	}
]
```
