---
title: "Jobs"
description: "Query, cancel, and remove jobs."
menu:
    developer:
        parent: API
---

# Find

Find jobs by workflow name or the originating username.

{{< endpoint "GET" "/api/jobs" >}}

## Parameters

| Name     | Type    | Default |Description                             |
| :------- | :------ | :------ | :------------------------------------- |
| find     | string  | null    | workflow name or username to filter by     |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

## Example

{{< request "GET" "/api/jobs?find=nuvs" />}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
	"documents": [
		{
			"workflow": "pathoscope_bowtie",
			"proc": 6,
			"mem": 16,
			"user": {
				"id": "igboyes"
			},
			"id": "dqswirty",
			"state": "complete",
			"stage": "cleanup_indexes",
			"created_at": "2018-02-06T22:15:38.492000Z",
			"progress": 1
		},
		{
			"workflow": "create_subtraction",
			"proc": 2,
			"mem": 4,
			"user": {
				"id": "igboyes"
			},
			"id": "zzpugkyt",
			"state": "running",
			"stage": "bowtie_build",
			"created_at": "2018-02-06T22:15:52.664000Z",
			"progress": 0.6
		}
	],
	"total_count": 2,
	"found_count": 2,
	"page_count": 1,
	"per_page": 15,
	"page": 1
}
```
{{< /response >}}

## Errors

| Status | Message       | Reason                                    |
| :----- | :------------ | :---------------------------------------- |
| `422`  | Invalid query | validation error for URL query parameters |


# Get

Get the complete representation for a single job.

{{< endpoint "GET" "/api/jobs/:id" >}}

## Example

{{< request "GET" "/api/jobs/zzpugkyt" />}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
	"workflow": "create_subtraction",
	"args": {
		"subtraction_id": "Thale",
		"file_id": "vlekszor-ATgenomeTAIR9.171"
	},
	"proc": 2,
	"mem": 4,
	"user": {
		"id": "igboyes"
	},
	"status": [
		{
			"state": "waiting",
			"stage": null,
			"error": null,
			"progress": 0,
			"timestamp": "2018-02-06T22:15:52.664000Z"
		},
		{
			"state": "running",
			"stage": "mk_subtraction_dir",
			"error": null,
			"progress": 0.2,
			"timestamp": "2018-02-06T22:16:11.166000Z"
		},
		{
			"state": "running",
			"stage": "set_stats",
			"error": null,
			"progress": 0.4,
			"timestamp": "2018-02-06T22:16:11.169000Z"
		},
		{
			"state": "running",
			"stage": "bowtie_build",
			"error": null,
			"progress": 0.6,
			"timestamp": "2018-02-06T22:16:15.637000Z"
		}
	],
	"id": "zzpugkyt"
}
```
{{< /response >}}

## Errors

| Status | Message   | Reason                         |
| :----- | :-------- | :----------------------------- |
| `404`  | Not found | `job_id` in URL does not exist |


# Cancel

{{< permission "cancel_job" >}}

Cancel a job safely and cleanly. Cancellation stops all processes and cleans up intermediate data.

Attempting to cancel a job more than once or cancel a finished job will result in no change, but will still return a {{< inline-status 200 >}} response.

{{< endpoint "PUT" "/api/jobs/:id/cancel" >}}

## Example

{{< request "PUT" "/api/jobs/zzpugkyt/cancel" >}}
```json
{}
```
{{< /request >}}

## Response
{{< response "Status: 200 OK" >}}
```json
{
	"workflow": "create_subtraction",
	"args": {
		"subtraction_id": "Thale",
		"file_id": "vlekszor-ATgenomeTAIR9.171"
	},
	"proc": 2,
	"mem": 4,
	"user": {
		"id": "igboyes"
	},
	"status": [
		{
			"state": "waiting",
			"stage": null,
			"error": null,
			"progress": 0,
			"timestamp": "2018-02-06T22:15:52.664000Z"
		},
		{
			"state": "running",
			"stage": "mk_subtraction_dir",
			"error": null,
			"progress": 0.2,
			"timestamp": "2018-02-06T22:16:11.166000Z"
		},
		{
			"state": "running",
			"stage": "set_stats",
			"error": null,
			"progress": 0.4,
			"timestamp": "2018-02-06T22:16:11.169000Z"
		},
		{
			"state": "running",
			"stage": "bowtie_build",
			"error": null,
			"progress": 0.6,
			"timestamp": "2018-02-06T22:16:15.637000Z"
		},
		{
			"state": "cancelled",
			"stage": "bowtie_build",
			"error": null,
			"progress": 1,
			"timestamp": "2018-02-06T22:18:49.400000Z"
		}
	],
	"id": "zzpugkyt"
}
```
{{< /response >}}

## Errors

| Status | Message         | Reason                                              |
| :----- | :-------------- | :-------------------------------------------------- |
| `403`  | Not permitted   | client does not have the `cancel_job` permission    |
| `404`  | Not found       | `job_id` in URL does not exist                      |
| `409`  | Not cancellable | job is already finished                             |


# Remove

{{< permission "remove_job" >}}

Remove a job that is complete, cancelled, or errored. If the requested job is running or waiting to run, {{< inline-status 409 >}} will be returned.

{{< endpoint "DELETE" "/api/jobs/:id" >}}

## Example

{{< request "DELETE" "/api/jobs/zzpugkyt" />}}

## Response

{{< response "Status: 204 No Content" />}}

## Errors

| Status | Message                                         | Reason                                              |
| :----- | :---------------------------------------------- | :-------------------------------------------------- |
| `403`  | Not permitted                                   | client does not have the `remove_sample` permission |
| `409`  | Job is running or waiting and cannot be removed | job must finish before it can be removed            |
| `404`  | Not found                                       | `job_id` in URL does not exist                      |


# Clear

{{< permission "remove_job" >}}

Clear completed, failed, or all finished jobs.

{{< endpoint "DELETE" "/api/jobs/:job_state" >}}

## Values for ``job_state``

| Value    | Description                                                   |
| :------- | :------------------------------------------------------------ |
| complete | jobs whose state is ``complete``                              |
| failed   | jobs whose state is ``errored`` or ``cancelled``              |

## Example

{{< request "DELETE" "/api/jobs/finished" />}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
    "removed": ["f41e8c", "kj78e3"]
}
```
{{< /response >}}

## Errors

_None_
