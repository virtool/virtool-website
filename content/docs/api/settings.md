---
title: "Settings"
description: "Manage administrative settings."
type: "api"
menu:
    api:
        parent: Endpoints
---

# Get

Get a complete representation of the administrative settings.

{{< endpoint "GET" "/api/settings" >}}

## Example

```
GET /api/settings
```

## Response

```
Status: 200 OK
```

```json
{
    "allowed_source_types": [
        "clone",
        "culture",
        "genotype",
        "isolate",
        "strain"
    ],
    "cert_path": "",
    "create_sample_inst": 3,
    "create_sample_mem": 5,
    "create_sample_proc": 24,
    "create_subtraction_inst": 2,
    "create_subtraction_mem": 4,
    "create_subtraction_proc": 2,
    "data_path": "data",
    "db_host": "localhost",
    "db_name": "virtool",
    "db_port": 27017,
    "dummy_inst": 5,
    "dummy_mem": 1,
    "dummy_proc": 1,
    "enable_api": false,
    "github_token": null,
    "github_username": null,
    "internal_control_id": "",
    "key_path": "",
    "mem": 12,
    "minimum_password_length": 8,
    "nuvs_inst": 6,
    "nuvs_mem": 16,
    "nuvs_proc": 6,
    "pathoscope_bowtie_inst": 6,
    "pathoscope_bowtie_mem": 4,
    "pathoscope_bowtie_proc": 6,
    "proc": 7,
    "proxy_address": "",
    "proxy_enable": false,
    "proxy_password": "",
    "proxy_trust": false,
    "proxy_username": "",
    "rebuild_index_inst": 1,
    "rebuild_index_mem": 4,
    "rebuild_index_proc": 2,
    "restrict_source_types": true,
    "sample_all_read": true,
    "sample_all_write": false,
    "sample_group": "none",
    "sample_group_read": true,
    "sample_group_write": false,
    "sample_unique_names": true,
    "server_host": "localhost",
    "server_port": 9950,
    "software_channel": "stable",
    "use_internal_control": false,
    "use_ssl": false,
    "watch_path": "watch"
}
```

# Update

{{< administrator >}}

Create a new group. New groups have no permissions. Requestors must have the ``modify_users`` permission.

{{< endpoint "PATCH" "/api/settings" >}}

## Input

| Name                    | Type   | Default                          |
| ----------------------- | ------ | ---------------------------------|
| allowed_source_types    | array  | `["isolate", "strain"]`          |
| create_sample_inst      | int    | `3`                              |
| create_sample_mem       | int    | `4`                              |
| create_sample_proc      | int    | `4`                              |
| create_subtraction_inst | int    | `2`                              |
| create_subtraction_mem  | int    | `4`                              |
| create_subtraction_proc | int    | `2`                              |
| data_path               | string | `data`                           |
| db_host                 | string | `localhost`                      |
| db_name                 | string | `virtool`                        |
| db_port                 | int    | `27107`                          |
| enable_api              | bool   | `false`                          |
| github_token            | bool   | `""`                             |
| github_username         | bool   | `""`                             |
| internal_control_id     | bool   | `""`                             |
| mem                     | bool   | _maximum system memory_          |
| minimum_password_length | bool   | `8`                              |
| nuvs_inst               | bool   | `6`                              |
| nuvs_mem                | bool   | `16`                             |
| nuvs_proc               | bool   | `6`                              |
| pathoscope_bowtie_inst  | int    | `6`                              |
| pathoscope_bowtie_mem   | int    | `16`                             |
| pathoscope_bowtie_proc  | int    | `6`                              |
| proc                    | int    | _maxmium system processor count_ |
| proxy_address           | string | `""`                             |
| proxy_enable            | bool   | `false`                          |
| proxy_password          | string | `""`                             |
| proxy_trust             | bool   | `false`                          |
| proxy_username          | string | `""`                             |
| rebuild_index_inst      | int    | `1`                              |
| rebuild_index_mem       | int    | `4`                              |
| rebuild_index_proc      | int    | `2`                              |
| restrict_source_types   | int    | `true`                           |
| sample_all_read         | bool   | `true`                           |
| sample_all_write        | bool   | `false`                          |
| sample_group            | string | `none`                           |
| sample_group_read       | bool   | `true`                           |
| sample_group_write      | bool   | `false`                          |
| sample_unique_names     | bool   | `true`                           |
| server_host             | string | `localhost`                      |
| server_port             | int    | `9950`                           |
| software_channel        | string | `stable`                         |
| use_internal_control    | bool   | `false`                          |
| watch_path              | string | `watch`                          |

## Example

```
POST /api/settings
```

```json
{
    "nuvs_mem": 18
}
```

## Response

```
Status: 200 OK
```

```json
{
    "allowed_source_types": [
        "clone",
        "culture",
        "genotype",
        "isolate",
        "strain"
    ],
    "cert_path": "",
    "create_sample_inst": 3,
    "create_sample_mem": 5,
    "create_sample_proc": 24,
    "create_subtraction_inst": 2,
    "create_subtraction_mem": 4,
    "create_subtraction_proc": 2,
    "data_path": "data",
    "db_host": "localhost",
    "db_name": "virtool",
    "db_port": 27017,
    "dummy_inst": 5,
    "dummy_mem": 1,
    "dummy_proc": 1,
    "enable_api": false,
    "github_token": null,
    "github_username": null,
    "internal_control_id": "",
    "key_path": "",
    "mem": 12,
    "minimum_password_length": 8,
    "nuvs_inst": 6,
    "nuvs_mem": 18,
    "nuvs_proc": 6,
    "pathoscope_bowtie_inst": 6,
    "pathoscope_bowtie_mem": 4,
    "pathoscope_bowtie_proc": 6,
    "proc": 7,
    "proxy_address": "",
    "proxy_enable": false,
    "proxy_password": "",
    "proxy_trust": false,
    "proxy_username": "",
    "rebuild_index_inst": 1,
    "rebuild_index_mem": 4,
    "rebuild_index_proc": 2,
    "restrict_source_types": true,
    "sample_all_read": true,
    "sample_all_write": false,
    "sample_group": "none",
    "sample_group_read": true,
    "sample_group_write": false,
    "sample_unique_names": true,
    "server_host": "localhost",
    "server_port": 9950,
    "software_channel": "stable",
    "use_internal_control": false,
    "use_ssl": false,
    "watch_path": "watch"
}
```

## Errors

| Status | Message                              | Reason                                                                  |
| :----- | :----------------------------------- | :---------------------------------------------------------------------- |
| `403`  | Not permitted                        | client does not have the 'modify_settings` permission                   |
| `409`  | Exceeds system processor count       | provided `proc` value is greater than the system processor count        |
| `409`  | Exceeds system memory                | provided `mem` value is greater than the available system memory        |
| `409`  | Less than a task-specific proc limit | provided `proc` is less than a task-specific processor limit setting    |
| `409`  | Less than a task-specific mem limit  | provided `mem` is less than a task-specific mempry limit setting        |
| `409`  | Exceeds proc resource limit          | a provided task-specific limit is greater than the `proc` limit setting |
| `409`  | Exceeds mem resource limit           | a provided task-specific limit is greater than the `mem` limit setting  |
