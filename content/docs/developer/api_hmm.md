---
title: "HMM"
description: "Manage and query HMM annotations and files."
type: "api"
menu:
  developer:
    parent: API
---

# Find

Find HMM annotations.

The response data also includes information about the installation state of the HMM collection. The `installed` field describes the installed HMM release. The `release` field describes the latest available release from the linked GitHub repository.

{{< endpoint "GET" "/api/hmms" >}}

## Parameters

| Name     | Type    | Default | Description                            |
| :------- | :------ | :------ | :------------------------------------- |
| find     | string  |         | term to search by                      |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

## Example

{{< request "GET" "/api/hmms?per_page=2" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
  "documents": [
    {
      "names": ["P3 protein", "coat protein", "P1 protein"],
      "families": {
        "Asfarviridae": 1,
        "Potyviridae": 179
      },
      "cluster": 1,
      "count": 185,
      "id": "7sisu7e2"
    },
    {
      "names": [
        "replication-associated protein",
        "replication associated protein",
        "Rep"
      ],
      "families": {
        "Geminiviridae": 235,
        "None": 2
      },
      "cluster": 2,
      "count": 253,
      "id": "ladu789k"
    }
  ],
  "total_count": 5585,
  "found_count": 5585,
  "page_count": 2793,
  "per_page": 2,
  "page": 1,
  "status": {
    "installed": {
      "id": 8460302,
      "name": "v0.2.0",
      "body": "- the first release using TravisCI for building and testing\r\n- merge annotations and profiles into one archive",
      "filename": "vthmm.tar.gz",
      "size": 86059385,
      "html_url": "https://github.com/virtool/virtool-hmm/releases/tag/v0.2.0",
      "published_at": "2017-11-10T00:27:20Z",
      "ready": true,
      "user": {
        "id": "igboyes"
      }
    },
    "process": {
      "id": "bzfk2t76"
    },
    "release": {
      "id": 8472569,
      "name": "v0.2.1",
      "body": "- remove some annotations that didn't have corresponding profiles",
      "etag": "W/\"81fc9c9b3e02ff03c8cc1163e8031ee3\"",
      "filename": "vthmm.tar.gz",
      "size": 85904451,
      "html_url": "https://github.com/virtool/virtool-hmm/releases/tag/v0.2.1",
      "download_url": "https://github.com/virtool/virtool-hmm/releases/download/v0.2.1/vthmm.tar.gz",
      "published_at": "2017-11-10T19:12:43Z",
      "content_type": "application/gzip",
      "newer": true
    },
    "id": "hmm",
    "updating": false
  }
}
```

{{< /response >}}

# Get {#get}

Get the complete representation of a single HMM annotation.

{{< endpoint "GET" "/api/hmms/:id" >}}

## Example

{{< request "GET" "/api/hmms/zltnktou" />}}

## Response

{{< response "Status: 200 OK" >}}

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
  "names": ["AC2 protein", "C2 protein", "AC2"],
  "hidden": false,
  "id": "zltnktou"
}
```

{{< /response >}}

## Errors

| Status | Message   | Reason                        |
| :----- | :-------- | :---------------------------- |
| `404`  | Not found | HMM annotation does not exist |

# Get Status

Get the status information for the HMM collection.

The HMM status describes the latest available release of the Virtool HMM data and the currently installed release.

When the `release.newer` is `true` the release can be used to [update the HMM install installation](#install).

When `updating` is `true` there is already an update proces in progress.

The `process.id` describes the [process document](/docs/api/processes) that describes the HMM installation process.

{{< endpoint "GET" "/api/hmms/status" >}}

## Example

{{< request "GET" "/api/hmms/status" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
  "installed": {
    "id": 8460302,
    "name": "v0.2.0",
    "body": "- the first release using TravisCI for building and testing\r\n- merge annotations and profiles into one archive",
    "filename": "vthmm.tar.gz",
    "size": 86059385,
    "html_url": "https://github.com/virtool/virtool-hmm/releases/tag/v0.2.0",
    "published_at": "2017-11-10T00:27:20Z",
    "ready": true,
    "user": {
      "id": "igboyes"
    }
  },
  "process": {
    "id": "bzfk2t76"
  },
  "release": {
    "id": 8472569,
    "name": "v0.2.1",
    "body": "- remove some annotations that didn't have corresponding profiles",
    "etag": "W/\"81fc9c9b3e02ff03c8cc1163e8031ee3\"",
    "filename": "vthmm.tar.gz",
    "size": 85904451,
    "html_url": "https://github.com/virtool/virtool-hmm/releases/tag/v0.2.1",
    "download_url": "https://github.com/virtool/virtool-hmm/releases/download/v0.2.1/vthmm.tar.gz",
    "published_at": "2017-11-10T19:12:43Z",
    "content_type": "application/gzip",
    "newer": true
  },
  "id": "hmm",
  "updating": false
}
```

{{< /response >}}

# Get Release

Check GitHub for the latest release of the Virtool HMM data set.

The is the only method for updating the available release information. When the `newer` is `true` the release can be used to [update the HMM install installation](#install).

{{< endpoint "GET" "/api/hmms/status/release" >}}

## Example

{{< request "GET" "/api/hmms/status/release" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
  "id": 8472569,
  "name": "v0.2.1",
  "body": "- remove some annotations that didn't have corresponding profiles",
  "etag": "W/\"81fc9c9b3e02ff03c8cc1163e8031ee3\"",
  "filename": "vthmm.tar.gz",
  "size": 85904451,
  "html_url": "https://github.com/virtool/virtool-hmm/releases/tag/v0.2.1",
  "download_url": "https://github.com/virtool/virtool-hmm/releases/download/v0.2.1/vthmm.tar.gz",
  "published_at": "2017-11-10T19:12:43Z",
  "content_type": "application/gzip",
  "newer": true
}
```

{{< /response >}}

## Errors

| Status | Message                   | Reason                                                             |
| :----- | :------------------------ | :----------------------------------------------------------------- |
| `502`  | Repository does not exist | the GitHub repository set in the `hmm_slug` setting does not exist |
| `502`  | Could not reach GitHub    | the server could not connect to GitHub                             |

# List Updates

List the update history for the.

Most recently applied updates are first in returned the array. Updates that are in the process of being installed are included in the response. The `ready` field is `true` when the update has been successfully installed.

{{< endpoint "GET" "/api/hmms/status/updates" >}}

## Example

{{< request "GET" "/api/hmms/status/updates" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
[
  {
    "id": 8460302,
    "name": "v0.2.0",
    "body": "- the first release using TravisCI for building and testing\r\n- merge annotations and profiles into one archive",
    "filename": "vthmm.tar.gz",
    "size": 86059385,
    "html_url": "https://github.com/virtool/virtool-hmm/releases/tag/v0.2.0",
    "published_at": "2017-11-10T00:27:20Z",
    "ready": true,
    "user": {
      "id": "igboyes"
    }
  }
]
```

{{< /response >}}

# Install

{{< permission modify_hmm >}}

Install the [locally cached release](#get-release) as the official virus HMM reference.

Installing when a previous release has already been installed will remove all HMMs not referenced in existing analyses and install the new release.

{{< endpoint "POST" "/api/hmms/status/updates" >}}

## Example

{{< request "POST" "/api/hmms/updates" />}}

## Response

{{< response "Status: 201 Created" >}}

```json
{
  "id": 8460302,
  "name": "v0.2.0",
  "body": "- the first release using TravisCI for building and testing\r\n- merge annotations and profiles into one archive",
  "filename": "vthmm.tar.gz",
  "size": 86059385,
  "html_url": "https://github.com/virtool/virtool-hmm/releases/tag/v0.2.0",
  "published_at": "2017-11-10T00:27:20Z",
  "created_at": "2018-06-15T18:26:30.787000Z",
  "ready": false,
  "user": {
    "id": "igboyes"
  }
}
```

{{< /response >}}

## Errors

| Status | Message                       | Reason                                                         |
| :----- | :---------------------------- | :------------------------------------------------------------- |
| `400`  | Target release does not exist | no release information has been fetched and cached from GitHub |
| `403`  | Not permitted                 | user does not have `modify_hmm` permission                     |

# Purge

Permanently remove all HMMs that are not referenced by NuVs analysis records.

HMMs that are referenced in NuVs analysis records will be soft-deleted. They will not be returned in search results, but the data is still available for constructing annotated NuVs results.

{{< endpoint "DELETE" "/api/hmms" >}}

## Example

{{< request "DELETE" "/api/hmms" />}}

## Response

{{< response "Status: 204 No content" />}}

## Errors

| Status | Message       | Reason                                     |
| :----- | :------------ | :----------------------------------------- |
| `403`  | Not permitted | user does not have `modify_hmm` permission |
