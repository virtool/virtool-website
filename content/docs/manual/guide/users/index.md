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

Administrators automatically pass all permission and right checks. They can also access the [Administration Panel](/docs/manual/guide/administration).

# Create a User

1. Navigate the the **Users** tab under **Administration**.

    You need to be an administrator to access this view.

    ![User management toolbar and header](toolbar.png)

2. Click on {{< button icon="user-plus" >}} to open the user creation dialog.

    ![Create user dialog](create.png)

3. Fill out the user creation form.

    Enter a username and password for the user. Clicking **Force user to reset password on login** will display a password reset page for the user when they login for the first time.

    ![Create user dialog with filled form](create_filled.png)

4. Click the {{< button icon="save" label="Save" >}} button

    This will create the new user. The user will appear in the list of users.

    ![New user added - Bob](bob_added.png)

# Change a User's Password

Administrators can forcefully change a users's password. This is useful when a user forgets their password or an old user account must be accessed.

1. Locate the **Change Password** panel in the **Users** tab

    ![Password panel](password.png)

2. Enter a new password

    ![Password panel with filled form](password_filled.png)

3. Click {{< button icon="save" label="Save" >}}

    The **Last changed** time will be updated if you successfully change the password.

    ![Password successfully changed](password_after.png)

    Clicking _Force user to reset password on login_ will invalidate all of the user's existing sessions and require them to reset their password when they try to access Virtool.

# Change a User's Group Membership

Users' group membership can be changed easily.

This may affect what rights the user has on certain samples and references. It can also affect their application permissions.

Locate the **Groups** panel in the **Users** tab.

![Groups Panel](groups.png)

Click one of the group items to toggle membership in it.

![Toggle Group Membership](toggle_group.png)

Notice that the user's permissions are changed when group membership is toggled.

{{< video "toggle_group.mp4" >}}

# Change a User's Primary Group

Samples that a user creates can automatically be assigned to the creating user's primary user group.

How samples are assigned their initial user group is [configurable](/docs/manual/guide/samples/#settings).

Locate the **Primary Group** panel under the _Users_ tab.

![Primary Group Panel](primary_group.png)

Select a primary group for the user from the dropdown list of the user's member groups.

![Primary group dropdown](primary_group_focus.png)

The display group is the user's primary group.

![Primary group changed](primary_group_done.png)

# Manage Groups

The group management interface can be acessed by clicking the {{< button color="grey" icon="users" >}} button to the right of the search bar in **Users** tab.

![Manage groups button](groups_button.png)

The group management interface looks like this:

![Group management interface](groups_management.png)

# Create a Group

Open the group management interface. Enter a name for the new group in the input at the top of dialog and click the {{< button color="blue" icon="plus-square" >}} button.

![New group input filled](groups_add_filled.png)

The new group will appear in the groups list.

![New group added](groups_added.png)

# Modify a Group's Permissions

Open the group management interface and select the group you want to change permissions for.

![Managers selected in groups interface](groups_selected.png)

Toggle permission by clicking them.

{{< video "groups_permissions.mp4" >}}

Users added to the **Managers** group will inherit the toggled permissions.

{{< video "groups_permissions_demo.mp4" >}}

# Remove a Group

Open the group management interface and select the group you want to remove.

![Managers selected in groups interface](groups_selected.png)

Click the {{< button color="red" icon="trash" label="Remove Group" >}} button to remove the group.

![Managers removed](groups_management.png)
