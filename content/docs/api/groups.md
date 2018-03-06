---
title: "Groups"
description: "Manage user groups."
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 120
---

{{% endpoint name="List" %}}

List all existing user groups.

```
GET /api/groups
```

## Response

```
Status: 200 OK
```

```json
[
    {
        "id": "administrator",
		"permissions": {
			"cancel_job": true,
			"create_sample": true,
			"manage_users": true,
			"modify_hmm": true,
			"modify_settings": true,
			"modify_subtraction": true,
			"modify_virus": true,
			"rebuild_index": true,
			"remove_file": true,
			"remove_job": true,
			"remove_virus": true,
			"upload_file": true
		}
	},
    {
        "id" : "technician",
        "permissions": {
			"cancel_job": false,
			"create_sample": false,
			"manage_users": false,
			"modify_hmm": false,
			"modify_settings": false,
			"modify_subtraction": false,
			"modify_virus": false,
			"rebuild_index": false,
			"remove_file": false,
			"remove_job": false,
			"remove_virus": false,
			"upload_file": false
		}
    }
]
```

{{% /endpoint %}}


{{% endpoint name="Get" %}}

Get the complete representation of a single user group.

```
GET /api/groups/:group_id
```

## Example

```
GET /api/groups/administrator
```

## Response

```
Status: 200 OK
```

```json
{
	"permissions": {
		"cancel_job": true,
		"create_sample": true,
		"manage_users": true,
		"modify_hmm": true,
		"modify_settings": true,
		"modify_subtraction": true,
		"modify_virus": true,
		"rebuild_index": true,
		"remove_file": true,
		"remove_job": true,
		"remove_virus": true,
		"upload_file": true
	},
	"id": "administrator"
}
```

{{% /endpoint %}}


{{% endpoint name="Create" permission="manage_users" %}}

Create a new group. New groups have no permissions. Requestors must have the ``modify_users`` permission.

```
POST /api/groups
```

## Input

| Name     | Type   | Description                                 |
| :------- | :----- | :------------------------------------------ |
| group_id | string | a unique id and display name for the group  |

## Example

```
POST /api/groups
```

```json
{
    "group_id": "foobar"
}
```

## Response

```
Status 201: Created
```

```json
{
	"permissions": {
		"cancel_job": false,
		"create_sample": false,
		"manage_users": false,
		"modify_hmm": false,
		"modify_settings": false,
		"modify_subtraction": false,
		"modify_virus": false,
		"rebuild_index": false,
		"remove_file": false,
		"remove_job": false,
		"remove_virus": false,
		"upload_file": false
	},
	"id": "foobar"
}
```

{{% /endpoint %}}


{{% endpoint name="Edit" permission="manage_users" %}}

Update the permissions of an existing group. Requestors must have the ``modify_users`` permission.

Unset permissions will retain their previous setting.

```
PATCH /api/groups/:id
```

**Input**

| Name            | Type    | Description                                               |
| :-------------- | :------ | :-------------------------------------------------------- |
| add_sample      | boolean | members can add samples                                   |
| modify_sample   | boolean | members can modify samples if they have sufficient rights |
| cancel_job      | boolean | members can cancel any job                                |
| remove_job      | boolean | members can remove job documents                          |
| modify_virus    | boolean | members can add and modify virus documents                |
| remove_virus    | boolean | members can remove virus documents                        |
| rebuild_index   | boolean | members can rebuild virus indexes                         |
| modify_hmm      | boolean | members can add and modify hmm annotations and files      |
| modify_host     | boolean | members can add and modify host documents and files       |
| remove_host     | boolean | members can remove host documents and files               |
| modify_options  | boolean | members can modify global options                         |

## Example

```
PATCH /api/groups/foobar
```

```json
{
	"permissions": {
		"modify_virus": true,
		"remove_job": true
	}
}
```

## Response

```
Status: 200 OK
```

```json
{
	"permissions": {
		"cancel_job": false,
		"create_sample": false,
		"manage_users": false,
		"modify_hmm": false,
		"modify_settings": false,
		"modify_subtraction": false,
		"modify_virus": true,
		"rebuild_index": false,
		"remove_file": false,
		"remove_job": true,
		"remove_virus": false,
		"upload_file": false
	},
	"id": "foobar"
}
```

{{% /endpoint %}}


{{% endpoint name="Remove" permission="manage_users" %}}

Remove an existing group. Requestors must have the ``modify_users`` permission. This request will fail with ``400 Bad Request`` for the built-in administrator group.

```
DELETE /api/groups/:group_id
```

## Example

```
DELETE /api/groups/foobar
```

## Response

```
Status: 204 No Content
```

{{% /endpoint %}}
