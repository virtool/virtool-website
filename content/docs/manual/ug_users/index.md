---
title: "Users"
type: "manual"
menu:
  manual:
    parent: "User Guide"
---

# Concepts {#users}

## Ownership

When users create new entities (_eg_. samples, references, jobs), their identities are automatically assigned

Users identities are tied to all actions they take and data they create. Samples are owned by their creating user by default. References are configured to extend full rights to their creator by default.

## Rights

Rights are properties of samples and references that control what actions specific users or user groups are allowed to perform on them.

## Permissions

Permissions are used to control what application-level actions users are allowed to perform. Permissions are inherited through group membership.

Administrators automatically pass all permission checks.

| Permissions          | Description                                  |
| -------------------- | -------------------------------------------- |
| `create_ref`         | can create references                        |
| `create_sample`      | can create samples                           |
| `modify_hmm`         | can add and modify hmm annotations and files |
| `modify_subtraction` | can add and modify subtractions              |
| `remove_file`        | can remove unused files                      |
| `remove_job`         | can remove cancelled and finished jobs       |
| `upload_file`        | can upload files                             |

## Groups

Groups allow setting rights and permissions for more than one user. Users that are members of a group will inherit its rights and permissions.

## Administrators

User accounts can either be administrative or limited.

Administrators automatically pass all permission and right checks. They can also access the [Administration Panel](/docs/manual/ug_administration).

# Create a User {#creating}

# Change a Users' Passowrd {#modifying}

Administrators can forcefully change a users's password.

This is useful when a user forgets their password or an old user account must be accessed.

1. Locate the _Change Password_ panel in the _Users_ tab.
   ![Password Panel](password.png)

2. Enter the new password.

# Change a User's Group Membership

# Creating Groups {#create_group}
