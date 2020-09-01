---
title: "OTUs"
description: "Query, create, edit, and remove OTUs."
menu:
    developer:
        parent: API
---

# Find

{{< right read reference >}}

Find OTUs by their name or abbreviation

{{< endpoint "GET" "/api/refs/:id/otus" >}}

## Parameters

| Name     | Type    | Default | Description                            |
| :------- | :------ | :------ | :------------------------------------- |
| find     | string  | `null`  | name or abbreviation to find by        |
| verified | boolean | `false` | only show verified viruses             |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

## Example

{{< request "GET" "/api/viruses?find=tobacco&per_page=4" />}}

## Response

{{< response "Status: 200 OK" >}}

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

{{< /response >}}

# Get

{{< right read >}}

Get the complete representation of a virus.

{{< endpoint "GET" "/api/otus/:id" >}}

## Example

{{< request "GET" "/api/otus/a15f9837" />}}

## Response

{{< response "Status: 200 OK" >}}

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

{{< /response >}}

## Errors

| Status | Message   | Reason                    |
| :----- | :-------- | :------------------------ |
| `404`  | Not found | `virus_id` does not exist |

# Create

{{< right modify_otu >}}

Create a new OTU given a name and abbreviation.

OTU names and abbreviations must be unique within the database. Uniqueness tests for virus names are **case-insensitive**. Isolates and sequence data must be added in separate requests.

{{< endpoint "POST" "/api/refs/otus/:id" >}}

## Input

| Name         | Type   | Required | Description                   |
| :----------- | :----- | :------- | :---------------------------- |
| name         | string | true     | the virus name                |
| abbreviation | string | false    | an abbreviation for the virus |

## Example

{{< request "POST" "/api/refs/test/otus" >}}

```json
{
    "name": "Foobar",
    "abbreviation": "FBR"
}
```

{{< /request >}}

## Response

{{< response "Status: 201 Created" >}}

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

{{< /response >}}

## Errors

| Status | Message                             | Reason                                                       |
| :----- | :---------------------------------- | :----------------------------------------------------------- |
| `400`  | Name already exists                 | `name` in request body is already in use                     |
| `400`  | Abbreviation already exists         | `abbreviation` in request body is already in use             |
| `400`  | Name and abbreviation already exist | `name` and `abbreviation` in request body are already in use |
| `403`  | Insufficient rights                 | client does not have the `modify_otu` reference right        |
| `404`  | Not found                           | reference does not exist                                     |
| `422`  | Invalid input                       | JSON input is invalid                                        |

# Edit

{{< right modify_otu >}}

Edit an existing virus by changing its name, abbreviation, or schema.

Virus names and abbreviations must be unique within the database. Requesting a name or abbreviation that is already in use will result in a {{< inline-status 409 >}}. Uniqueness tests for virus names are **case-insensitive**.

{{< endpoint "PATCH" "/api/otus/:id" >}}

## Input

| Name         | Type   | Required | Description            |
| :----------- | :----- | :------- | :--------------------- |
| name         | string | false    | the virus name         |
| abbreviation | string | false    | the virus abbreviation |
| schema       | array  | false    | a sequence schema      |

## Example

{{< request "PATCH" "/api/viruses/uxusjtcl" >}}

```json
{
    "abbreviation": "FB"
}
```

{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}

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

{{< /response >}}

## Errors

| Status | Message                             | Reason                                                |
| :----- | :---------------------------------- | :---------------------------------------------------- |
| `400`  | Name already exists                 | `name` is already in use                              |
| `400`  | Abbreviation already exists         | `abbreviation` is already in use                      |
| `400`  | Name and abbreviation already exist | `name` and `abbreviation` are already in use          |
| `403`  | Insufficient rights                 | client does not have the `modify_otu` reference right |
| `404`  | Not found                           | OTU does not exist                                    |
| `422`  | Invalid input                       | JSON request body is invalid                          |

# Remove

{{< right modify_otu >}}

Removes a virus, its isolates, and sequences.

{{< endpoint "DELETE" "/api/otus/:id" >}}

## Example

{{< request "DELETE" "/api/viruses/uxusjtcl" />}}

## Response

{{< response "Status: 204 No content" />}}

## Errors

| Status | Message             | Reason                                                |
| :----- | :------------------ | :---------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the `modify_otu` reference right |
| `404`  | Not found           | `virus_id` in URL does not exist                      |

# List Isolates

{{< right read >}}

List the isolates for a given virus.

{{< endpoint "GET" "/api/otus/:id/isolates" >}}

## Example

{{< request "GET" "/api/viruses/a15f9837/isolates" />}}

## Response

{{< response "Status: 200 OK" >}}

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

{{< /response >}}

## Errors

| Status | Message   | Reason                           |
| :----- | :-------- | :------------------------------- |
| `404`  | Not found | `virus_id` in URL does not exist |

# Get Isolate

{{< right read >}}

Get the complete representation of a single isolate.

{{< endpoint "GET" "/api/otus/:id/isolates/:isolate_id" >}}

## Example

{{< request "GET" "/api/viruses/a15f9837/isolates/0jrrxdxh" />}}

## Response

{{< response "Status: 200 OK" >}}

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

{{< /response >}}

## Errors

| Status | Message   | Reason                                         |
| :----- | :-------- | :--------------------------------------------- |
| `404`  | Not found | `virus_id` or `isolate_id` in URL do not exist |

# Add Isolate

{{< right modify_otu >}}

Add a new isolate.

Setting the isolate to default will steal default status from any existing default isolate. The first added isolate will be set to default regardless of input.

{{< endpoint "POST" "/api/otus/:id/isolates" >}}

## Input

| Name        | Type    | Required | Description                          |
| :---------- | :------ | :------- | :----------------------------------- |
| source_type | string  | false    | a source type (eg. isolate, variant) |
| source_name | string  | false    | a source name (eg. 8816-v2, Jal-01)  |
| default     | boolean | false    | set the isolate as default           |

## Example

{{< request "POST" "/api/viruses/a15f9837/isolates" >}}

```json
{
    "source_type": "isolate",
    "source_name": "a"
}
```

{{< /request >}}

## Response

{{< response "Status: 201 Created" >}}

```json
{
    "source_type": "isolate",
    "source_name": "a",
    "default": false,
    "id": "utcvsgwz",
    "sequences": []
}
```

{{< /response >}}

## Errors

| Status | Message                    | Reason                                                |
| :----- | :------------------------- | :---------------------------------------------------- |
| `400`  | Source type is not allowed | change the reference settings first                   |
| `403`  | Insufficient rights        | client does not have the `modify_otu` reference right |
| `404`  | Not found                  | OTU does not exist                                    |
| `422`  | Invalid input              | JSON request body is invalid                          |

# Edit Isolate

{{< right modify_otu >}}

Edit an existing isolate.

{{< endpoint "PATCH" "/api/otus/:id/isolates/:isolate_id" >}}

## Input

| Name        | Type   | Required | Description                          |
| :---------- | :----- | :------- | :----------------------------------- |
| source_type | string | false    | a source type (eg. isolate, variant) |
| source_name | string | false    | a source name (eg. 8816-v2, Jal-01)  |

## Example

{{< request "PATCH" "/api/viruses/a15f9837/isolates/utcvsgwz" >}}

```json
{
    "source_name": "b"
}
```

{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
    "source_type": "isolate",
    "source_name": "b",
    "default": false,
    "id": "utcvsgwz",
    "sequences": []
}
```

{{< /response >}}

## Errors

| Status | Message                    | Reason                                                |
| :----- | :------------------------- | :---------------------------------------------------- |
| `400`  | Source type is not allowed | change the reference settings first                   |
| `403`  | Insufficient rights        | client does not have the `modify_otu` reference right |
| `404`  | Not found                  | OTU or isolate does not exist                         |
| `422`  | Invalid input              | JSON request body is invalid                          |

# Set Default Isolate

{{< right modify_otu >}}

Sets an isolate as default **and** unsets any existing default isolate.

Takes no input.

{{< endpoint "PUT" "/api/otus/:id/isolates/:isolate_id/default" >}}

## Example

{{< request "PUT" "/api/viruses/a15f9837/isolates/utcvsgwz/default" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
    "source_type": "isolate",
    "source_name": "b",
    "default": true,
    "id": "utcvsgwz",
    "sequences": []
}
```

{{< /response >}}

## Errors

| Status | Message             | Reason                                                |
| :----- | :------------------ | :---------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the `modify_otu` reference right |
| `404`  | Not found           | OTU or isolate does not exist                         |

# Remove Isolate

{{< right modify_otu >}}

Removes an isolate and its sequences. If it is the default isolate, the first isolate in the list will be set as default.

{{< endpoint "DELETE" "/api/otus/:id/isolates/:isolate_id" >}}

## Example

{{< request "DELETE" "/api/viruses/a15f9837/isolates/utcvsgwz/default" />}}

## Response

{{< response "Status: 204 No content" />}}

## Errors

| Status | Message             | Reason                                                |
| :----- | :------------------ | :---------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the `modify_otu` reference right |
| `404`  | Not found           | OTU or isolate does not exist                         |

# Add Sequence

{{< right modify_otu >}}

Add a sequence to an isolate.

Sequence `id` values must be globally unique and should be GenBank accessions where possible.

Providing a value for `segment` will have no effect unless the parents virus has a schema configured. If a schema is configured, the value provided for `segment` must be one of the segments names defined in the schema.

Values provided for `sequence` must be plain text, **not** FASTA formatted. Sequences are automatically stripped of whitespace.

{{< endpoint "POST" "/api/otus/:id/isolates/:isolate_id/sequences" >}}

## Input

| Name       | Type   | Required | Description                                  |
| :--------- | :----- | :------- | :------------------------------------------- |
| id         | string | true     | an id for the sequence                       |
| definition | string | true     | a descriptive definition                     |
| host       | string | false    | the host of origin                           |
| segment    | string | false    | the schema segment associated with the virus |
| sequence   | string | true     | an abbreviation for the virus                |

## Example

{{< request "POST" "/api/viruses/a15f9837/isolates/utcvsgwz/sequences" >}}

```json
{
    "id": "foobar",
    "definition": "A sequence for demo purposes",
    "sequence": "ATGACTAGCGGACTTACA"
}
```

{{< /request >}}

## Response

{{< response "Status: 201 Created" >}}

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

{{< /response >}}

## Errors

| Status | Message                    | Reason                                                |
| :----- | :------------------------- | :---------------------------------------------------- |
| `400`  | Segment does not exist     | `segment` is not defined in the OTU schema            |
| `400`  | Sequence id already exists | `id` is already assigned to an existing sequence      |
| `403`  | Insufficient rights        | client does not have the `modify_otu` reference right |
| `404`  | Not found                  | OTU or isolate does not exist                         |
| `422`  | Invalid input              | JSON request body is invalid                          |

# Edit Sequence

{{< right modify_otu >}}

Edit an existing sequence.

Providing a value for `segment` will have no effect unless the parent virus has a schema configured. If a schema is configured, the value provided for `segment` must be one of the segment names defined in the schema.

Values provided for `sequence` must be plain text, **not** FASTA formatted. Sequences are automatically stripped of whitespace.

{{< endpoint "PATCH" "/api/otus/:id/isolates/:isolate_id/sequences/:sequence_id" >}}

## Input

| Name       | Type   | Required | Description                         |
| :--------- | :----- | :------- | :---------------------------------- |
| definition | string | true     | a descriptive definition            |
| host       | string | false    | the host of origin                  |
| segment    | string | false    | the schema segment for the sequence |
| sequence   | string | true     | the sequence                        |

## Example

{{< request "PATCH" "/api/viruses/a15f9837/isolates/utcvsgwz/sequences/foobar" >}}

```json
{
    "host": "Plant",
    "sequence": "TACGTGTCGATCGATCGTAGTCGTACG"
}
```

{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}

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

{{< /response >}}

## Errors

| Status | Message                | Reason                                                |
| :----- | :--------------------- | :---------------------------------------------------- |
| `400`  | Segment does not exist | `segment` is not defined in virus schema              |
| `403`  | Insufficient rights    | client does not have the `modify_otu` reference right |
| `404`  | Not found              | OTU, isolate, or sequence does not exist              |
| `422`  | Invalid input          | JSON request body is invalid                          |

# Remove Sequence

{{< right modify_otu >}}

Remove an existing sequence from an isolate.

{{< endpoint "DELETE" "/api/otus/:id/isolates/:isolate_id/sequences/:sequence_id" >}}

## Example

{{< request "DELETE" "/api/viruses/a15f9837/isolates/utcvsgwz/sequences/foobar" />}}

## Response

{{< response "Status: 204 No Content" />}}

## Errors

| Status | Message             | Reason                                                |
| :----- | :------------------ | :---------------------------------------------------- |
| `403`  | Insufficient rights | client does not have the `modify_otu` reference right |
| `404`  | Not found           | OTU, isolate, or sequence does not exist              |

# Find History

{{< right read >}}

Retrieves a list of all changes made to the virus.

See [history endpoints](/docs/developer/api/history/) for more advanced querying and modification of history data.

{{< endpoint "GET" "/api/otus/:id/history" >}}

## Example

{{< request "GET" "/api/viruses/a15f9837/history" />}}

## Response

{{< response "Status: 200 OK" >}}

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
            ["change", "verified", [true, false]],
            ["change", "version", [0, 1]]
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
            ["change", ["isolates", 2, "source_name"], ["a", "b"]],
            ["change", "version", [1, 2]]
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
            ["change", ["isolates", 1, "default"], [true, false]],
            ["change", ["isolates", 2, "default"], [false, true]],
            ["change", "version", [2, 3]]
        ]
    }
]
```

{{< /response >}}

## Errors

| Status | Message   | Reason               |
| :----- | :-------- | :------------------- |
| `404`  | Not found | virus does not exist |
