---
title: "Jobs"
type: "api"
menu:
    api:
        parent: endpoints
        weight: 60
---

# Find {#find}

Find jobs by task name or the originating username.

```
GET /api/jobs?find=nuvs
```

## Parameters

| Name     | Type    | Default |Description                             |
| :------- | :------ | :------ | :------------------------------------- |
| find     | string  | null    | task name or username to filter by     |
| page     | integer | 1       | page number of results to return       |
| per_page | integer | 15      | number of documents to return per page |

## Response

```
Status: 200 OK
```

```json
{
	"documents": [
		{
			"task": "pathoscope_bowtie",
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
			"task": "create_subtraction",
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


# Get {#get}

```
GET /api/jobs/:job_id
```

## Example

```
GET /api/jobs/zzpugkyt
```

## Response

```
Status: 200 OK
```

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

# Cancel {#cancel}

Cancel a job safely and cleanly. Cancellation stops all processes and cleans up intermediate data.

Attempting to cancel a job more than once or cancel a finished job will result in no change, but will still return a ``200 OK`` response.

```
PUT /api/jobs/:job_id/cancel
```

## Response

```
Status: 200 OK
```

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

# Remove {#remove}

Remove a job that is complete, cancelled, or errored. If the requested job is running or waiting to run, ``409 Conflict`` will be returned.

```
DELETE /api/jobs/:job_id
```

## Example

```
DELETE /api/jobs/zzpugkyt
```

## Response

```
Status: 204 No Content
```

# Clear {#clear}

Clear completed, failed, or all finished jobs.

```
DELETE /api/jobs/:job_state
```

## Values for ``job_state``

| Value    | Description                                                   |
| :------- | :------------------------------------------------------------ |
| complete | jobs whose state is ``complete``                              |
| failed   | jobs whose state is ``errored`` or ``cancelled``              |

## Example

```
DELETE /api/jobs/finished
```

## Response

```
Status: 200 OK
```

```json
{
    "removed": ["f41e8c", "kj78e3"]
}
```
