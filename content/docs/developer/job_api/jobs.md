---
title: "Jobs"
description: "Query, cancel, and remove jobs."
menu:
    developer:
        identifier: job_api_jobs
        parent: Job API
---

# Get

Get the complete representation for a single job.

Jobs can only retrieve data for themselves.

{{< endpoint "GET" "/api/jobs/:id" >}}

## Example

{{< request "GET" "/api/jobs/zzpugkyt" />}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
	"task": "create_subtraction",
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

| Status | Message             | Reason                                                         |
| :----- | :------------------ | :------------------------------------------------------------- |
| `403`  | Insufficient rights | The job does not have the right to read jobs other than itself |
| `404`  | Not found           | The job does not exist                                         |

# Push Status

Push a status record when the state of a job changes.

Jobs can only push status to their on job resource.

{{< endpoint "POST" "/api/jobs/:id/status" >}}


## Parameters
| Name     | Type   | Required | Description                                                            |
| :------- | :----- | :------- | :--------------------------------------------------------------------- |
| state    | string | Yes      | the job state (`waiting`, `running`, `complete`, `cancelled`, `error`) |
| stage    | string | Yes      | The stage (step) the job is at                                         |
| error    | string | No       | An error if the job encountered one                                    |
| progress | string | Yes      | The progress of the job as an integer (0 - 100)                        |

## Example

{{< request "POST" "/api/jobs/zzpugkyt/status" >}}
```json
{
    "state": "running",
    "stage": "bowtie_build",
    "progress": 40
}
```
{{</ request >}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
    "state": "running",
    "stage": "bowtie_build",
    "error": null,
    "progress": 40,
    "timestamp": "2018-02-06T22:16:15.637000Z"
}
```
{{< /response >}}

## Errors

| Status | Message             | Reason                                                         |
| :----- | :------------------ | :------------------------------------------------------------- |
| `403`  | Insufficient rights | The job does not have the right to read jobs other than itself |
| `404`  | Not found           | The job does not exist                                         |
