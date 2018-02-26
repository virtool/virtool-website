---
title: "Users"
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 110
---

Methods intended for administrative management of users.

# List {#list}

Get a list of complete representations of all users. The requestor must have the ``modify_user`` permission.

```
GET /api/users
```

## Response

```
Status: 200 OK
```

```json
[
	{
		"groups": [
			"administrator"
		],
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

# Get {#get}

Get the complete representation of a single user.

```
GET /api/users/:user_id
```

## Example

```
GET /api/users/fred
```

## Response

```
Status: 200 OK
```

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


# Create {#create}

Create a new user. The requestor must have the ``modify_user`` permission.

```
POST /api/users
```

**Input**

| Name        | Type   | Required | Description                                      |
| :---------- | :----- | :------- | :----------------------------------------------- |
| user_id     | String | True     | the desired username                             |
| password    | String | True     | the desired password                             |
| force_reset | String | False    | force password reset on login (default=``true``) |

## Example

```
POST /api/users
```

```json
{
	"user_id": "bill",
	"password": "foobar"
}
```

## Response

```
Status: 201 Created
```

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


# Edit {#edit}

Change the password, primary group, or force reset setting of an existing user.

```
PATCH /api/users/:user_id
```

## Input

| Name        | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| force_reset | boolean  | force a password reset next time the user logs in |
| password    | string   | the new password                                  |
| primary_group | string | the users primary group used for sample rights    |          

## Example

```
PATCH /api/users/fred
```

```json
{
    "force_reset": true,
	"password": "foobar"
}
```

## Response

```
Status: 200 OK
```

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


# Add To Group {#add_group}

Add a user to a user group.


```
POST /api/users/:user_id/group
```

## Input

| Name     | Type   | Description                                       |
| :------- | :----- | :------------------------------------------------ |
| group_id | string | force a password reset next time the user logs in |

## Example

```
POST /api/users/fred/group
```

```json
{
	"group_id": "foobar"
}
```

## Response

```
Status: 200 Created
```

```json
{
	"groups": [
		"foobar"
	],
	"identicon": "d0cfc2e5319b82cdc71a33873e826c93d7ee11363f8ac91c4fa3a2cfcd2286e5",
	"permissions": {
		"cancel_job": true,
		"create_sample": true,
		"manage_users": true,
		"modify_hmm": true,
		"modify_settings": true,
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

# Remove From Group {#remove_group}

Remove a user from a user group.

```
DELETE /api/users/:user_id/groups/:group_id
```

## Example

```
DELETE /api/users/fred/groups/foobar
```

## Response

```
Status: 200 OK
```

```json
[
	"administrator"
]
```


# Remove {#remove}

Remove a user account. The requestor must have the ``modify_user`` permission.

```
DELETE /api/users/:user_id
```

## Example

```
DELETE /api/users/bill
```

## Response

```
Status: 204 No content
```
