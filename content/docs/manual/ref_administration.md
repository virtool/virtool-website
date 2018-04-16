---
title: "Administration"
type: "manual"
menu:
    manual:
        parent: "Reference"
        weight: 100
---

<article class="message is-warning">
  <div class="message-body">
    Under construction.
  </div>
</article>

# General Settings

## Source Types

Isolate names comprise a _source type_ and _source name_. When creating isolates, users can be forced to use certain source type values for naming isolates.

Source type restrictions do not affect viruses that are imported into the database.

### Adding Source Types

Source types can be added by entering a new source type in the text box and clicking <i class="fa fa-plus-square"></i>. Once source types are added to the list, the can be accessed in isolate editing forms.

!["Source types add"](/docs_images/admin_source_types_add.gif)

### Removing Source Types

Source types can be removed by clicking <i class="fa fa-trash"></i>. Source types that were assigned to isolates before removal will still be assigned to those isolates.

### Disabling Restriction

The source types feature can be disabled to allow users to enter whatever text they want as a source type. This can be done by clicking off the checkbox in the header of the _Source Types_ setting section.

!["Source types disabled"](/docs_images/admin_source_types_disabled.png)

## Internal Control

If you are using an internal control during your lab procedures, the control virus can be provided to Virtool. This setting is not currently in use, but may be used for scaling results or flagging irregular samples in the future.

### Selecting Internal Control

The internal control can be selected from the virus database by selecting the virus name in the dropdown text box.

!["Internal control"](/docs_images/admin_internal_control.gif)

### Disabling Internal Control

This can be done by clicking off the checkbox in the header of the _Internal Control_ setting section. This has no effect for now.

!["Internal control disabled"](/docs_images/admin_internal_control_disabled.png)

## Unique Sample Names

By default sample names must be unique to the sample manager. This prevents confusion with duplicately named samples. It is possible to disable this feature by clicking <i class="far fa-check-square"></i> **Enable**.

!["Disabled unique sample names"](/docs_images/admin_unique_sample_names.png)

## Default Sample Rights

These settings determine how rights are assigned to newly created samples. Sample rights in Virtool are reminiscent of UNIX permissions.

### Sample Group

This determines how an owner group is applied to the sample when it is created.

!["Sample group options"](/docs_images/admin_sample_group.png)

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| _None_          | No group owner is assigned. Group rights do not apply                           |
| _Force Choice_  | The sample creator is forced to choose the owner group from their member groups |
| _Primary Group_ | The sample is automatically assigned the creators primary group                 |

### Group Rights

This settings determines how members of the owner group can interact with the sample. If the owner group is _None_, this setting has no effect.

!["Group rights"](/docs_images/admin_group_rights.png)

### Group Rights

This setting determines how members of the owner group can interact with the sample. If the owner group is _None_, this setting has no effect. Rights can be changes by sample owners and administrators at any time.

!["Group rights"](/docs_images/admin_group_rights.png)

|                |                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| _None_         | Sample is not returned in searches and is not accessible by URL.                                                    |
| _Read_         | Sample is returned in searches and is viewable. All editing interfaces are disabled and analyses cannot be started. |
| _Read & Write_ | In addition to _Read_ rights, editing interfaces are enabled and analyses can be run.                               |

### All Users' Rights

This settings determines how any Virtool user can interact with the sample. Rights for all users behave exactly as they do in **Group Rights**. Rights can be changes by sample owners and administrators at any time.
