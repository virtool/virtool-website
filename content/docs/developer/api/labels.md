---
title: "Labels"
description: "Query, create, edit, and remove labels."
menu:
    developer:
        parent: API
---


# Find

List all labels. Takes no query or input.

{{< endpoint "GET" "/api/labels" >}}

## Example

{{< request "GET" "/api/labels" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
[
  {
    "id": "hfnreidj",
    "name": "Bug",
    "color": "#A83432",
    "description": "This is a bug"
  },
  {
    "id": "djgnwksd",
    "name": "Improvement",
    "color": "#03FC20",
    "description": "Needs to improve"
  }
]
```

{{< /response >}}


# Get

Get the complete representation of a label.

{{< endpoint "GET" "/api/labels/:id" >}}

## Example

{{< request "GET" "/api/labels/hfnreidj" />}}

## Response

{{< response "Status: 200 OK" >}}

```json
{
  "id": "hfnreidj",
  "name": "Bug",
  "color": "#A83432",
  "description": "This is a bug"
}
```

{{< /response >}}

## Errors

| Status | Message   | Reason                                        |
| :----- | :-------- | :-------------------------------------------- |
| `404`  | Not found | Label does not exist                          |


# Create

Create a new label.

{{< endpoint "POST" "/api/labels" >}}

## Input

| Name        | Type   | Required | Description                                      |
| :---------- | :----- | :------- | :----------------------------------------------- |
| name        | String | True     | a unique name for the label                      |
| color       | String | False    | the color for the label (default=``#A0AEC0``)    |
| description | String | False    | the description about the label                  |

## Example

{{< request "POST" "/api/labels" >}}
```json
{
  "name": "Question",
  "color": "#A83232",
  "description": "Question from a user"
}
```
{{< /request >}}

## Response

{{< response "Status: 201 Created" "Location: /api/labels/dhifhgfh" >}}
```json
{
  "id": "dhifhgfh",
  "name": "Question",
  "color": "#A83232",
  "description": "Question from a user"
}
```
{{< /response >}}

## Errors

| Status | Message                                   | Reason                                               |
| :----- | :---------------------------------------- | :--------------------------------------------------- |
| `400`  | Label name already exists                 | `name` is already in use                             |
| `422`  | Invalid input                             | JSON request body is invalid                         |


# Edit

Change the name, color, or description of an existing label.

{{< endpoint "PATCH" "/api/labels/:id" >}}

## Input

| Name        | Type   | Required | Description                                      |
| :---------- | :----- | :------- | :----------------------------------------------- |
| name        | String | False    | the label name                                   |
| color       | String | False    | the label color (default=``#A0AEC0``)            |
| description | String | False    | the label description                            |  

## Example

{{< request "PATCH" "/api/labels/dhifhgfh" >}}
```json
{
    "color": "#F53337"
}
```
{{< /request >}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
  "id": "dhifhgfh",
  "name": "Question",
  "color": "#F53337",
  "description": "Question from a user"
}
```
{{< /response >}}

## Errors

| Status | Message                                             | Reason                                               |
| :----- | :-------------------------------------------------- | :--------------------------------------------------- |
| `400`  | Label name already exists                           | `name` is already in use                             |
| `404`  | Not found                                           | Label does not exist                                 |
| `422`  | Invalid input                                       | JSON request body is invalid                         |


# Remove

Remove a label.

{{< endpoint "DELETE" "/api/labels/:id" >}}

## Example

{{< request "DELETE" "/api/labels/dhifhgfh" />}}

## Response

{{< response "Status: 204 No content" />}}

## Errors

| Status | Message                   | Reason                                        |
| :----- | :------------------------ | :-------------------------------------------- |
| `404`  | Not found                 | Label does not exist                           |
