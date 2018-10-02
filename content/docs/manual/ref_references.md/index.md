---
title: "References"
type: "manual"
menu:
  manual:
    parent: "Reference"
---

# Settings

## Source Types

Isolate names comprise a _source type_ and _source name_. When creating isolates, users can be forced to use certain source type values for naming isolates.

Source type restrictions do not affect viruses that are imported into the database.

### Adding Source Types

Source types can be added by entering a new source type in the text box and clicking <i class="fa fa-plus-square"></i>. Once source types are added to the list, the can be accessed in isolate editing forms.

!["Add Source Types"](add_source_types.gif)

### Removing Source Types

Source types can be removed by clicking <i class="fa fa-trash"></i>. Source types that were assigned to isolates before removal will still be assigned to those isolates.

### Disabling Restriction

The source types feature can be disabled to allow users to enter whatever text they want as a source type. This can be done by clicking off the checkbox in the header of the _Source Types_ setting section.

!["Source Types Feature Disabled"](source_types_disabled.png)

## Internal Control

If you are using an internal control during your lab procedures, the control virus can be provided to Virtool. This setting is not currently in use, but may be used for scaling results or flagging irregular samples in the future.

### Selecting Internal Control

The internal control can be selected from the virus database by selecting the virus name in the dropdown text box.

!["Internal Control"](internal_control.gif)

### Disabling Internal Control

This can be done by clicking off the checkbox in the header of the _Internal Control_ setting section. This has no effect for now.

!["Internal Control Disabled"](internal_control_disabled.png)
