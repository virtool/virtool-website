---
title: "Users"
description: "Manage users and user groups."
type: "api"
menu:
    developer:
        parent: API
---

# List

{{< permission manage_users >}}

Get a list of complete representations of all users.

{{< endpoint "GET" "/api/users" >}}

## Example

{{< request "GET" "/api/users" />}}

## Response

{{< response "Status: 200 OK" >}}
```json
[
	{
		"groups": [
			"administrator"
		],
		"permissions": {
			"cancel_job": true,
			"create_sample": true,
			"modify_hmm": true,
			"modify_subtraction": true,
			"rebuild_index": true,
			"remove_file": true,
			"remove_job": true,
			"upload_file": true
		},
		"primary_group": "",
		"force_reset": false,
		"last_password_change": "2018-02-06T17:25:14.867000Z",
		"identicon": "6be6d0a72a16cb633144ec03cdaef77804c6f94770184f83e0899fe6bdcb77ee",
		"id": "igboyes"
	},
	{
		"groups": [],
		"identicon": "d0cfc2e5319b82cdc71a33873e826c93d7ee11363f8ac91c4fa3a2cfcd2286e5",
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
		"primary_group": "",
		"force_reset": false,
		"last_password_change": "2018-02-07T17:56:35.980000Z",
		"id": "fred"
	}
]
```
{{< /response >}}

## Errors

| Status | Message       | Reason                                             |
| :----- | :------------ | :------------------------------------------------- |
| `403`  | Not permitted | client does not have the 'manage_users` permission |


# Get

{{< administrator >}}

Get the complete representation of a single user.

{{< endpoint "GET" "/api/users/:id" >}}

## Example

{{< request "GET" "/api/users/fred" />}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
	"groups": [],
	"identicon": "d0cfc2e5319b82cdc71a33873e826c93d7ee11363f8ac91c4fa3a2cfcd2286e5",
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
	"primary_group": "",
	"force_reset": false,
	"last_password_change": "2018-02-07T17:56:35.980000Z",
	"id": "fred"
}
```
{{< /response >}}

## Errors

| Status | Message       | Reason                         |
| :----- | :------------ | :----------------------------- |
| `403`  | Not permitted | client is not an administrator |
| `404`  | Not found     | user does not exist            |


# Create

{{< administrator >}}

Create a new user.

{{< endpoint "POST" "/api/users" >}}

## Input

| Name        | Type   | Required | Description                                      |
| :---------- | :----- | :------- | :----------------------------------------------- |
| user_id     | String | True     | the desired username                             |
| password    | String | True     | the desired password                             |
| force_reset | String | False    | force password reset on login (default=``true``) |

## Example

{{< request "POST" "/api/users" >}}
```json
{
	"user_id": "bill",
	"password": "foobar"
}
```
{{< /response >}}

## Response

{{< response "Status: 201 Created" "Location: /api/users/bill" >}}
```json
{
	"force_reset": true,
	"groups": [],
	"identicon": "623210167553939c87ed8c5f2bfe0b3e0684e12c3a3dd2513613c4e67263b5a1",
	"last_password_change": "2018-02-07T17:59:10.572000Z",
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
	"primary_group": "",
	"id": "bill"
}
```
{{< /response >}}

## Errors

| Status | Message                                   | Reason                                               |
| :----- | :---------------------------------------- | :--------------------------------------------------- |
| `400`  | Password does not meet length requirement | password must meet `minimum_password_length` setting |
| `400`  | User already exists                       | `user_id` is already in use                          |
| `403`  | Not permitted                             | client is not an administrator                       |
| `422`  | Invalid input                             | JSON request body is invalid                         |


# Edit

{{< administrator >}}

Change the password, primary group, or force reset setting of an existing user.

Adminstrators cannot modify their own administrative status.

{{< endpoint "PATCH" "/api/users/:id" >}}

## Input

| Name          | Type    | Description                                       |
| :------------ | :------ | :------------------------------------------------ |
| administrator | boolean | set the user's adminstrator status                |
| force_reset   | boolean | force a password reset next time the user logs in |
| password      | string  | the new password                                  |
| primary_group | string  | the users primary group used for sample rights    |
| groups        | array   | the ids of the groups the user belongs to         |      

## Example

{{< request "PATCH" "/api/users/fred" >}}
```json
{
    "force_reset": true,
	"password": "foobar"
}
```
{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
	"groups": [],
	"identicon": "d0cfc2e5319b82cdc71a33873e826c93d7ee11363f8ac91c4fa3a2cfcd2286e5",
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
	"primary_group": "none",
	"force_reset": true,
	"last_password_change": "2018-02-07T18:22:14.219000Z",
	"id": "fred"
}
```
{{< /response >}}

## Errors

| Status | Message                                             | Reason                                               |
| :----- | :-------------------------------------------------- | :--------------------------------------------------- |
| `400`  | Groups do not exist: <groups>                       | one or more passed `groups` do not exist             |
| `400`  | Primary group does not exist                        | passed `primary_group` does not exist                |
| `400`  | Password does not meet length requirement           | password must meet `minimum_password_length` setting |
| `400`  | Users cannot modify their own administrative status | another administrator should perform the action      |
| `403`  | Not permitted                                       | client is not an administrator                       |
| `404`  | Not found                                           | user does not exist                                  |
| `409`  | User is not member of group                         | user is not a member of the passed `primary_group`   |
| `422`  | Invalid input                                       | JSON request body is invalid                         |


# Remove

{{< administrator >}}

Remove a user account.

{{< endpoint "DELETE" "/api/users/:id" >}}

## Example

{{< request "DELETE" "/api/users/bill" />}}

## Response

{{< response "Status: 204 No content" />}}

## Errors

| Status | Message                   | Reason                                        |
| :----- | :------------------------ | :-------------------------------------------- |
| `400`  | Cannot remove own account | users cannot remove their own accounts        |
| `403`  | Not permitted             | client is not an administrator                |
| `404`  | Not found                 | user does not exist                           |
