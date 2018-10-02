---
title: "Samples"
type: "manual"
menu:
  manual:
    parent: "Reference"
---

# Overview

Selecting _Samples_ on the top menu brings up the main sample managment view. Here, samples can be created, viewed, edited, analyzed, and removed.

!["Sample Manager"](/docs_images/samples_main.png)

# Creating a Sample

To create a sample, click on the <i class="i-new-entry"></i> button.

# Browsing Samples

Once you have imported one or more samples, they can be browsed in the main sample managment view.

Using the search bar, samples can be filtered by their names or the name of the user that originally imported the sample.

Clicking on a sample item will navigate

# Rights

## Concepts {#concepts}

Virtool allows for fine control of the rights users have to view or modify samples.

### Management Levels

Rights can apply at four different levels.

- _administrators_

  Members of the special administrator group. These users have full read and write access to all samples as well as the ability to manage the rights on any sample.

- _owner_

  The original sample creator. This user always has full read and write access to the sample as well as the ability to manage the rights on the sample.

- _group_

  The group that owns the sample. Read and write privileges can be independently set at this level.

- _all users_

  All users registered on the Virtool instance. Read and write privileges can be independently set at this level.

### Group Ownership

Each sample can be owned by a specific user group. This allows multiple groups of diagnosticians or researchers to keep their data private or safe from one another while sharing a single Virtool instance.

Samples are not required to have an owner group. The group can be set to `None`. In this case group rights settings will have no effect.

### Privileges

- _none_

  The management level (_eg_. group, all users) cannot read or write the sample. included users will never see the sample in the sample management interface. This privilege is useful for completely isolating samples between separate groups of users.

- _read_

  The management level (_eg_. group, all users) can only read the sample. The included users will see the sample in the sample management interface and be able to view its general information, quality, and analyses.

  They will not be able to edit or remove the sample and they will not be able to create new analyses. The elements in the user interface associated with the described actions will be hidden.

- _read & write_

  The management level (_eg_. group, all users) can only read the sample. The included users will see the sample in the sample management interface and be able to view its general information, quality, and analyses.

  They will also be able to edit and remove the sample and create new analyses.

## Management {#guide}

The access rights for a existing sample can be easily changed by the sample owner or an administrator.

1. Click the key icon in the detail view for a sample
   ![](/docs_images/sample_rights_key.png)

2. The rights management tab looks something like this
   ![](/docs_images/samples_rights_view.png)

3.

## Default Rights

Samples have their initial access rights configured when they are first created. How these rights are assigned can be configured in the adminstrative settings.

1. Go to the _Settings_ > _General_ view as an administrator.
   ![](/docs_images/settings_general.png)

# Settings

## Unique Sample Names

By default sample names must be unique to the sample manager. This prevents confusion with duplicately named samples. It is possible to disable this feature by clicking <i class="far fa-check-square"></i> **Enable**.

!["Unique Sample Names Disabled"](unique_sample_names.png)

## Default Sample Rights

These settings determine how rights are assigned to newly created samples. Sample rights in Virtool are reminiscent of UNIX permissions.

### Sample Group

This determines how an owner group is applied to the sample when it is created.

!["Sample Group Options"](sample_group.png)

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| _None_          | No group owner is assigned. Group rights do not apply                           |
| _Force Choice_  | The sample creator is forced to choose the owner group from their member groups |
| _Primary Group_ | The sample is automatically assigned the creators primary group                 |

### Group Rights

This settings determines how members of the owner group can interact with the sample. If the owner group is _None_, this setting has no effect.

### Group Rights

This setting determines how members of the owner group can interact with the sample. If the owner group is _None_, this setting has no effect. Rights can be changes by sample owners and administrators at any time.

!["Group Rights"](group_rights.png)

|                |                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| _None_         | Sample is not returned in searches and is not accessible by URL.                                                    |
| _Read_         | Sample is returned in searches and is viewable. All editing interfaces are disabled and analyses cannot be started. |
| _Read & Write_ | In addition to _Read_ rights, editing interfaces are enabled and analyses can be run.                               |

### All Users' Rights

This settings determines how any Virtool user can interact with the sample. Rights for all users behave exactly as they do in **Group Rights**. Rights can be changes by sample owners and administrators at any time.
