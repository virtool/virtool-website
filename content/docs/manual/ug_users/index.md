---
title: "Users"
description: "Administer users and user groups."
menu:
  manual:
    parent: "User Guide"
---

User accounts are used to control access to Virtool. They allow fine control of what actions users are allowed to perform and what resources they are allowed to access.

# Concepts

## Ownership

When users create new data items (_eg_. samples, references, jobs), they are automatically assigned as the owner of that item.

For references and samples, owners have perpetual full rights on their samples and references.

## Rights

Rights are properties of samples and references that control what actions specific users or user groups are allowed to perform on them.

Administrators automatically pass all rights checks.

## Permissions

Permissions are used to control what application-level actions users are allowed to perform. Permissions are inherited through group membership.

Administrators automatically pass all permission checks.

| Permission           | Description                                  |
| -------------------- | -------------------------------------------- |
| `cancel_job`         | can cancel running jobs                      |
| `create_ref`         | can create references                        |
| `create_sample`      | can create samples                           |
| `modify_hmm`         | can add and remove HMM annotations and files |
| `modify_subtraction` | can add, modify, and remove subtractions     |
| `remove_file`        | can remove uploaded files                    |
| `remove_job`         | can remove cancelled and finished jobs       |
| `upload_file`        | can upload files                             |

## Groups

Groups allow setting rights and permissions for more than one user. Users that are members of a group will inherit rights and permissions from the group.

It is not possible to set permissions on a per-user basis.

## Administrators

User accounts can either be administrative or limited.

Administrators automatically pass all permission and right checks. They can also access the [Administration Panel](/docs/manual/ug_administration).

# Create a User

Click the <i class="fas fa-user-plus"></i> button to open the user creation dialog.

![Create user dialog](create.png)

Enter a username and password for the user. Clicking _Force user to rest password on login_ will display a password reset page for the user when they login for the first time.

![Create user dialog with filled form](create_filled.png)

Click <i class="fas fa-save"></i> _Save_ to add the user. They will appear in the list of users.

![New user added - Bill](bill_added.png)

# Change a User's Password

Administrators can forcefully change a users's password.

This is useful when a user forgets their password or an old user account must be accessed.

Locate the _Change Password_ panel in the _Users_ tab.

![Password panel](password.png)

Enter a new password and click <i class="fas fa-save"></i> _Save_.

![Password panel with filled form](password_filled.png)

The _Last changed_ time will be updated if you successfully change the password.

![Password successfully changed](password_after.png)

Clicking _Force user to reset password on login_ will invalidate all of the users existing sessions and require them to login and reset their password when the try to access Virtool.

# Change a User's Group Membership

Users' group membership can be changed easily.

This may affect what rights the user has one certain samples and references. It can also affect their application permissions.

Locate the _Groups_ panel in the _Users_ tab.

![Groups Panel](groups.png)

Click one of the group items to toggle membership in it.

![Toggle Group Membership](toggle_group.png)

Notice that the user's permissions are changed when group membership is toggled.

<video autoplay muted loop><source src="toggle_group.mp4" type="video/mp4" /></video>

# Change a User's Primary Group

Samples a user creates can automatically be assigned to the creating user's primary user group.

How samples are assigned their initial user group is [configurable](/docs/manual/ug_samples/#settings).

Locate the _Primary Group_ panel under the _Users_ tab.

![Primary Group Panel](primary_group.png)

Select a primary group for the user from the dropdown list of the user's member groups.

![Primary group dropdown](primary_group_focus.png)

The display group is the user's primary group.

![Primary group changed](primary_group_done.png)

# Manage Groups

The group management interface can be acessed by clicking the <i class="fas fa-users"></i> button to the right of the search bar in _Users_ tab.

![Manage groups button](groups_button.png)

The group management interface looks like this:

![Group management interface](groups_management.png)

# Create a Group

Open the group management interface. Enter a name for the new group in the input at the top of dialog and click the <i class="fas fa-plus-square"></i> button.

![New group input filled](groups_add_filled.png)

The new group will appear in the groups list.

![New group added](groups_added.png)

# Modify a Group's Permissions

Open the group management interface and select the group you want to change permissions for.

![Managers selected in groups interface](groups_selected.png)

Toggle permission by clicking them.

<video autoplay muted loop><source src="groups_permissions.mp4" type="video/mp4" /></video>

Users added to the _managers_ group will inherit the toggled permissions.

<video autoplay muted loop><source src="groups_permissions_demo.mp4" type="video/mp4" /></video>

# Remove a Group

Open the group management interface and select the group you want to remove.

![Managers selected in groups interface](groups_selected.png)

Click the <i class="fas fa-remove"></i> _Remove Group_ button to remove the group.

![Managers removed](groups_management.png)
