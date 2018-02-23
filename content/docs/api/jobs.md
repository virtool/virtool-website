---
title: "Jobs"
type: "api"
---

Endpoints for 

* [Find](#find)
* [Get](#get)
* [Cancel](#cancel)
* [Remove](#remove)
* [Clear](#clear)

## Find {#find}

```
GET /api/jobs?find=nuvs
```

**Query**

| Name     | Type    | Default |Description                             |
| :------- | :------ | :------ | :------------------------------------- |
| find     | string  | null    | task name or username to filter by     |
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


## Get {#get}

```
GET /api/jobs/:job_id
```

**Example**

```
GET /api/jobs/zzpugkyt
```

**Headers**

```
Status: 200 OK
```

**Response**

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


## Cancel {#cancel}

```
PUT /api/jobs/:job_id/cancel
```

Cancel a job safely and cleanly. Cancelling stops all processes and cleans up intermediate data. Attempting to cancel a job more than once or cancel a finished job will result in no change, but will still return a ``200 OK`` response.

**Headers**

```
Status: 200 OK
```

**Response**

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


## Remove {#remove}

```
DELETE /api/jobs/:job_id
```

Remove a job that is complete, cancelled, or errored. If the requested job is running or waiting to run, ``409 Conflict`` will be returned.

**Example**

```
DELETE /api/jobs/zzpugkyt
```

**Headers**

```
Status: 204 No Content
```

## Clear {#clear}

```
DELETE /api/jobs/:job_state
```

**Values for ``job_state``**

| Value    | Description                                                   |
| :------- | :------------------------------------------------------------ |
| complete | jobs whose state is ``complete``                              |
| failed   | jobs whose state is ``errored`` or ``cancelled``              |

**Example**

```
DELETE /api/jobs/finished
```

**Headers**

```
Status: 200 OK
```

**Response**

```json
{
    "removed": ["f41e8c", "kj78e3"]
}
```
