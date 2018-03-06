---
title: "Account"
description: "Query and modify the client user."
type: "api"
menu:
    api:
        parent: Endpoints
        weight: 10
---

Unauthorized clients will receive ``401 Unauthorized`` for calls to all account endpoints.

{{% endpoint name="Get" %}}

Get the complete respresentation for the account associated with the current session or API key.

```
GET /api/account
```

## Response

```
Status: 200 OK
```

```json
{
	"groups": [
		"administrator"
	],
	"settings": {
		"skip_quick_analyze_dialog": true,
		"show_ids": false,
		"show_versions": false,
		"quick_analyze_algorithm": "pathoscope_bowtie"
	},
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
	"last_password_change": "2018-02-01T00:27:09.348000Z",
	"identicon": "6be6d0a72a16cb633144ec03cdaef77804c6f94770184f83e0899fe6bdcb77ee",
	"id": "baz"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |

{{% /endpoint %}}


{{% endpoint name="Edit" %}}

Change the email address associated with the account associated with the current session or API key.

```
PATCH /api/account
```

## Input

| Name  | Type    | Description                                     |
| :---- | :------ | :---------------------------------------------- |
| email | string  | an email address                                |

## Example

```
PATCH /api/account/settings
```

```json
{
    "email": "dev@virtool.ca"
}
```

## Response

```
Status: 200 OK
```

```json
{
	"groups": [
		"administrator"
	],
	"settings": {
		"skip_quick_analyze_dialog": true,
		"show_ids": false,
		"show_versions": false,
		"quick_analyze_algorithm": "pathoscope_bowtie"
	},
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
	"last_password_change": "2018-02-01T00:27:09.348000Z",
	"identicon": "6be6d0a72a16cb633144ec03cdaef77804c6f94770184f83e0899fe6bdcb77ee",
	"email": "dev@virtool.ca",
	"id": "baz"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `422`  | Invalid input          | email address is invalid                                        |

{{% /endpoint %}}


{{% endpoint name="Get Settings" %}}

Get the settings for the account associated with the current session or API key.

```
GET /api/account/settings
```

## Response

```
Status: 200 OK
```

```json
{
	"skip_quick_analyze_dialog": true,
	"show_ids": false,
	"show_versions": false,
	"quick_analyze_algorithm": "pathoscope_bowtie"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |


{{% /endpoint %}}


{{% endpoint name="Edit Settings" %}}

Update the settings for the account associated with the current session or API key. All fields are optional.

```
PATCH /api/account/settings
```

## Input

| Name                      | Type    | Description                                     |
| :------------------------ | :------ | :---------------------------------------------- |
| quick_analyze_algorithm   | string  | algorithm to use for quick analysis             |
| skip_quick_analyze_dialog | boolean | don't show the quick analysis dialog            |
| show_ids                  | boolean | show document ids in client in where possible   |
| show_versions             | boolean | show document versions in client where possible |

## Example

```
PATCH /api/account/settings
```

```json
{
    "show_ids": true
}
```

## Response

```
Status: 200 OK
```

```json
{
	"skip_quick_analyze_dialog": true,
	"show_ids": true,
	"show_versions": false,
	"quick_analyze_algorithm": "pathoscope_bowtie"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `422`  | Invalid input          | invalid settings key or value                                   |

{{% /endpoint %}}


{{% endpoint name="Change Password" %}}

Change the password for the account associated with the current session or API key.

```
PUT /api/account/password
```

## Input

| Name         | Type   | Optional | Description                       |
| :----------- | :----- | :------- | :-------------------------------- |
| old_password | string | false    | the old password for verification |
| new_password | string | false    | the new password                  |

## Example

```
PUT /api/account/password
```

```json
{
    "old_password": "foobar",
    "new_password": "hello_world
}
```

## Response

```
Status: 200 OK
```

```json

{
    "last_password_change": "2017-02-17T13:58:25.792550Z"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| 400    | Invalid old password   | supplied old password is invalid                                |
| 401    | Requires authorization | request is not associated with an authorized session or API key |
| 422    | Invalid input          | missing or invalid password field                               |

{{% /endpoint %}}


{{% endpoint name="Get API Keys" %}}

List all API keys for the active account. The keys themselves are not returned.

```
GET /api/account/keys
```

## Response

```
Status: 200 OK
```

```json
[
	{
		"id": "test 1_0",
		"name": "Test 1",
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
		"created_at": "2018-02-05T23:23:21.766000Z"
	}
]
```

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |

{{% /endpoint %}}


{{% endpoint name="Create API Key" %}}

Create a new API key with the provided permissions. The response to this request is the only time the key string will be returned by the API.

```
POST /api/account/keys
```

## Input

| Name         | Type   | Optional | Description                                                                                                 |
| :----------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------- |
| name         | string | false    | a non-unique name for the API key                                                                           |
| permissions  | object | true     | An object describing the permissions the new key will have. Any unset permissions will default to ``false`` |

## Example

```
POST /api/account/keys
```

```json
{
	"name": "Test 2",
	"permissions": {
		"modify_virus": true
	}
}
```

## Response

```
Status: 201 Created
```

```json
{
	"id": "test 2_0",
	"name": "Test 2",
	"groups": [
		"administrator"
	],
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
		"remove_job": false,
		"remove_virus": false,
		"upload_file": false
	},
	"created_at": "2018-02-06T17:36:18.955000Z",
	"key": "69480f859c66455a84b334a60e7aa540"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `422`  | Invalid input          | missing or invalid name or permissions object                   |

{{% /endpoint %}}


{{% endpoint name="Update API Key" %}}

Change the permissions of an existing API key.

```
PATCH /api/account/keys/:id
```

## Input

| Name        | Type   | Optional | Description                                                                                                 |
| :---------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------- |
| permissions | object | false    | An object describing the permissions the new key will have. Any unset permissions will default to ``false`` |

## Example

```
PATCH /api/account/keys/test%202_0
```

```json
{
	"name": "Key Test",
	"permissions": {
		"rebuild_index": true
	}
}
```

## Response

```
Status: 200 OK
```

```json
{
	"id": "test 2_0",
	"name": "Test 2",
	"groups": [
		"administrator"
	],
	"permissions": {
		"cancel_job": false,
		"create_sample": false,
		"manage_users": false,
		"modify_hmm": false,
		"modify_settings": false,
		"modify_subtraction": false,
		"modify_virus": true,
		"rebuild_index": true,
		"remove_file": false,
		"remove_job": false,
		"remove_virus": false,
		"upload_file": false
	},
	"created_at": "2018-02-06T17:36:18.955000Z"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `404`  | Not found              | API key identified by `:id` does not exist                      |
| `422`  | Invalid input          | missing or invalid permissions object                           |

{{% /endpoint %}}


{{% endpoint name="Delete API Key" %}}

Delete an existing API key.

```
DELETE /api/account/keys/:id
```

## Example

```
DELETE /api/account/keys/test_1
```

## Response

```
Status: 204 No content
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `404`  | Not found              | API key identified by `:id` does not exist                      |

{{% /endpoint %}}


{{% endpoint name="Logout" %}}

Logout by invalidating the current session. It will have no effect for connections authenticated with an API key.


```
GET /api/account/logout
```

## Response

```
Status: 204 No Content
```

## Errors

*None*
