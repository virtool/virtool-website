---
title: "References"
description: "Query references."
menu:
    developer:
        identifier: job_api_references
        parent: Job API
---

# Get

Get the complete representation for a single reference.

{{< endpoint "GET" "/api/refs/:id" >}}

## Example

{{< request "GET" "/api/refs/21n3j5v6" />}}

## Response

{{< response "Status: 200 OK" >}}
```json
{
   "_id":"21n3j5v6",
   "created_at":{
      "$date":"2019-10-04T17:17:48.935Z"
   },
   "data_type":"genome",
   "description":"",
   "name":"Clone of Banana Viruses",
   "organism":"virus",
   "internal_control":null,
   "restrict_source_types":false,
   "source_types":[
      "isolate",
      "strain"
   ],
   "groups":[
      
   ],
   "users":[
      {
         "id":"igboyes",
         "build":true,
         "modify":true,
         "modify_otu":true,
         "remove":true
      }
   ],
   "user":{
      "id":"igboyes"
   },
   "cloned_from":{
      "id":"9mciizg6",
      "name":"Banana Viruses"
   },
   "process":{
      "id":"zhio57ug"
   }
}
```

{{< /response >}}

## Errors

| Status | Message             | Reason                                                         |
| :----- | :------------------ | :------------------------------------------------------------- |
| `403`  | Insufficient rights | The job does not have the right to access the reference        |
| `404`  | Not found           | The reference does not exist                                   |
