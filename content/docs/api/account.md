---
title: "Account"
description: "Query and modify the client user."
type: "api"
menu:
    api:
        parent: Endpoints
---

Unauthorized clients will receive ``401 Unauthorized`` for calls to all account endpoints.

# Get

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
	"administrator": true,
	"groups": [],
	"identicon": "6be6d0a72a16cb633144ec03cdaef77804c6f94770184f83e0899fe6bdcb77ee",
	"settings": {
		"skip_quick_analyze_dialog": true,
		"show_ids": false,
		"show_versions": false,
		"quick_analyze_algorithm": "pathoscope_bowtie"
	},
	"permissions": {
		"cancel_job": true,
		"create_ref": true,
		"create_sample": true,
		"modify_hmm": true,
		"modify_subtraction": true,
		"remove_file": true,
		"remove_job": true,
		"upload_file": true
	},
	"primary_group": "",
	"last_password_change": "2018-04-27T22:49:11.654000Z",
	"email": "igboyes@virtool.ca",
	"id": "igboyes"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |


# Edit

Change the email address associated with the account associated with the current session or API key.

```
PATCH /api/account
```

## Input

| Name         | Type    | Required |Description                        |
| :----------- | :------ | :------------------------------------------- |
| email        | string  | false    | an email address                  |
| old_password | string  | false    | the old password for verification |
| new_password | string  | false    | the new password                  |

## Example

```
PATCH /api/account
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
	"administrator": true,
	"groups": [],
	"identicon": "6be6d0a72a16cb633144ec03cdaef77804c6f94770184f83e0899fe6bdcb77ee",
	"settings": {
		"skip_quick_analyze_dialog": true,
		"show_ids": false,
		"show_versions": false,
		"quick_analyze_algorithm": "pathoscope_bowtie"
	},
	"permissions": {
		"cancel_job": true,
		"create_ref": true,
		"create_sample": true,
		"modify_hmm": true,
		"modify_subtraction": true,
		"remove_file": true,
		"remove_job": true,
		"upload_file": true
	},
	"primary_group": "",
	"last_password_change": "2018-04-27T22:49:11.654000Z",
	"email": "dev@virtool.ca",
	"id": "igboyes"
}
```

## Errors

| Status | Message                | Reason                                                             |
| :----- | :--------------------- | :----------------------------------------------------------------- |
| `400`  | Invalid old password   | supplied old password is invalid                                   |
| `401`  | Requires authorization | request is not associated with an authorized session or API key    |
| `422`  | Invalid input          | email address is invalid or password fields are missing or invalid |
| `401`  | Requires authorization | request is not associated with an authorized session or API key    |


# Get Settings

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


# Edit Settings

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


# Get API Keys

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
		"id": "test_0",
		"name": "Test",
		"administrator": true,
		"groups": [],
		"permissions": {
			"cancel_job": true,
			"create_ref": true,
			"create_sample": true,
			"modify_hmm": true,
			"modify_subtraction": true,
			"remove_file": true,
			"remove_job": true,
			"upload_file": true
		},
		"created_at": "2018-05-01T19:47:03.334000Z"
	}
]
```

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |


# Create API Key

Create a new API key with the provided permissions. The response to this request is the only time the key string will be returned by the API.

```
POST /api/account/keys
```

## Input

| Name          | Type    | Required | Description                                                                                                 |
| :------------ | :------ | :------- | :---------------------------------------------------------------------------------------------------------- |
| name          | string  | true     | a non-unique name for the API key                                                                           |
| administrator | boolean | false    | sets administrative rights on the API key (default=`false`)                                                 |
| permissions   | object  | false    | an object describing the permissions the new key will have. Any unset permissions will default to ``false`` |

## Example

```
POST /api/account/keys
```

```json
{
	"name": "Test 2",
	"permissions": {
		"create_sample": true
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
	"administrator": false,
	"groups": [],
	"permissions": {
		"cancel_job": false,
		"create_ref": false,
		"create_sample": true,
		"modify_hmm": false,
		"modify_subtraction": false,
		"remove_file": false,
		"remove_job": false,
		"upload_file": false
	},
	"created_at": "2018-05-01T21:34:21.271000Z",
	"key": "3f80126f767e48099bdd5a3704bf8453"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `422`  | Invalid input          | missing or invalid value or permissions object                  |


# Edit API Key

Change the permissions of an existing API key.

```
PATCH /api/account/keys/:id
```

## Input

| Name          | Type    | Required | Description                                                                                                 |
| :------------ | :------ | :------- | :---------------------------------------------------------------------------------------------------------- |
| administrator | boolean | false    | sets administrative rights on the API key                                                                   |
| permissions   | object  | false    | an object describing updates to the key's permissions                                                       |

## Example

```
PATCH /api/account/keys/test%202_0
```

```json
{
	"administrator": true,
	"permissions": {
		"modify_subtraction": true
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
	"administrator": true,
	"groups": [],
	"permissions": {
		"cancel_job": false,
		"create_ref": false,
		"create_sample": true,
		"modify_hmm": false,
		"modify_subtraction": true,
		"remove_file": false,
		"remove_job": false,
		"upload_file": false
	},
	"created_at": "2018-05-01T21:34:21.271000Z"
}
```

## Errors

| Status | Message                | Reason                                                          |
| :----- | :--------------------- | :-------------------------------------------------------------- |
| `401`  | Requires authorization | request is not associated with an authorized session or API key |
| `404`  | Not found              | API key identified by `:id` does not exist                      |
| `422`  | Invalid input          | missing or invalid permissions object                           |


# Delete API Key

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


# Logout

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
