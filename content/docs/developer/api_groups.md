---
title: "Groups"
description: "Manage user groups."
type: "api"
menu:
    developer:
        parent: API
---

# List

List all existing user groups.

{{< endpoint "GET" "/api/groups" >}}

## Response

```
Status: 200 OK
```

```json
[
	{
		"permissions": {
			"cancel_job": true,
			"create_ref": false,
			"create_sample": true,
			"modify_hmm": false,
			"modify_subtraction": false,
			"remove_file": false,
			"remove_job": true,
			"upload_file": true
		},
		"id": "technicians"
	}
]
```

## Errors

_None_


# Get

Get the complete representation of a single user group.

{{< endpoint "GET" "/api/groups/:id" >}}

## Example

```
GET /api/groups/technicians
```

## Response

```
Status: 200 OK
```

```json
{
	"permissions": {
		"cancel_job": true,
		"create_ref": false,
		"create_sample": true,
		"modify_hmm": false,
		"modify_subtraction": false,
		"remove_file": false,
		"remove_job": true,
		"upload_file": true
	},
	"id": "technicians"
}
```

## Errors

| Status | Message   | Reason               |
| :----- | :-------- | :------------------- |
| `404`  | Not found | group does not exist |


# Create

{{< administrator >}}

Create a new group. New groups have no permissions. Requestors must be administrators.

{{< endpoint "POST" "/api/groups" >}}

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
    "group_id": "research"
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
		"create_ref": false,
		"create_sample": false,
		"modify_hmm": false,
		"modify_subtraction": false,
		"remove_file": false,
		"remove_job": false,
		"upload_file": false
	},
	"id": "research"
}
```

## Errors

| Status | Message              | Reason                                 |
| :----- | :------------------- | :------------------------------------- |
| `400`  | Group already exists | the provided `group_id` already exists |
| `403`  | Not permitted        | client is not an administrator         |
| `422`  | Invalid input        | JSON request body is invalid           |


# Edit

{{< administrator >}}

Update the permissions of an existing group. Unset permissions will retain their previous setting.

{{< endpoint "PATCH" "/api/groups/:id" >}}

## Input

| Name        | Type    | Description                                                                       |
| ----------- | ------- | --------------------------------------------------------------------------------- |
| permissions | boolean | a permission update comprising an object keyed by permissions with boolean values |

## Example

```
PATCH /api/groups/research
```

```json
{
	"permissions": {
		"create_ref": true
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
		"create_ref": true,
		"create_sample": false,
		"modify_hmm": false,
		"modify_subtraction": false,
		"remove_file": false,
		"remove_job": false,
		"upload_file": false
	},
	"id": "research"
}
```

## Errors

| Status | Message       | Reason                         |
| :----- | :------------ | :----------------------------- |
| `403`  | Not permitted | client is not an administrator |
| `404`  | Not found     | group does not exist           |
| `422`  | Invalid input | JSON request body is invalid   |


# Remove

{{< administrator >}}

Remove an existing group.

{{< endpoint "DELETE" "/api/groups/:id" >}}

## Example

```
DELETE /api/groups/foobar
```

## Response

```
Status: 204 No Content
```

## Errors

| Status | Message       | Reason                         |
| :----- | :------------ | :----------------------------- |
| `403`  | Not permitted | client is not an administrator |
| `404`  | Not found     | group does not exist           |
