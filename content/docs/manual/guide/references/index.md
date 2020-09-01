---
title: "References"
description: "Create and manage Virtool references."
menu:
    manual:
        parent: "User Guide"
---

# Overview

Virtool is built for detecting viruses and is capable of detecting other pathogens. Managing collections of pathogen sequences used for this purpose is a key feature of Virtool.

At least one non-empty reference must be created in order to start analyzing samples.

## OTUs

The reference is a fully editable and tracked collection of pathogens, pathogen isolates, and their genome sequences. The data in the virus reference is used to identify potential viral infections in Illumina libraries derived from your samples.

In Virtool, pathogen records are called OTUs (organizational taxonomic unit). This leaves the organization of the reference up to the user. Generally, OTU is synonymous with pathogen species.

See the [OTUs documentation](/docs/manual/guide/otus) for more information.

## Indexes

Indexes are versioned snapshots of all of the OTUs in a reference at points in time. In the background, indexes are associated with optimized read mapping indices managed by Virtool.

When changes are made to OTUs, the index is rebuilt to include those changes in future analysis jobs. Each analysis is tied to a specific index (version) of its target reference.

See the [Indexes documentation](/docs/manual/guide/indexes) for more information.

## Rights

Access to references can be controlled by user and group.

Users or groups must be assigned to a reference to gain access to it. The actions a user or group can perform on the reference can be tightly controlled.

## Remote References

Remote references

# Find a Reference

1. Click on **References** in the main navigation bar

    A list of available references will appear

    ![Reference Overview Page](list.png)

2. Type a search term in the search bar

    The list will be narrowed to references that contain the search term in their names.

    ![Search](search.png)

3. Click on a reference to view detailed information about it.
   ![Detailed Information](detail.png)

# Install the Official Reference

One quick way to accomplish this is to install the [official plant virus reference](https://github.com/virtool/ref-plant-viruses).

We provide a [step-by-step tutorial on installing an official reference](/docs/manual/tutorials/reference).

# Create an Empty Reference

1. Navigate to the **References** view

    ![Reference Overview Page](list.png)

2. Click the {{< button icon="plus-square" >}} button

    The **Create Reference** dialog box will open. The **Create** is for making blank references and will be active by default.

    ![Empty Reference Box](empty.png)

3. Fill the form fields

    Give your new reference a name, the type of organism the OTUs are from (eg. viruses), and an optional description.

    Select a data type to tell Virtool if you will be entering whole genomes or barcode sequences.

    ![Filled Reference Dialog](empty_filled.png)

4. Click the {{< button icon="save" label="Save" >}} button

    Your new reference will now appear in the References Overview page.

    ![Reference Overview Page](empty_done.png)

# Clone a Reference

Existing references can be cloned to create a new reference than can be modified without affecting the original.

1. Navigate to the **References** view
   ![Reference Overview Page](list.png)

2. Click the {{< button icon="plus-square" >}} button

    The **Add Reference** dialog will appear.

    ![Empty Reference Box](empty.png)

3. Click on the **Clone** tab

    The clone form has a list of existing source references to chose from. The _organism_ and _data type_ are derived from the source reference and cannot be changed.

    ![The clone reference form](clone.png)

4. Fill the clone reference form

    Selecting a source reference will automatically generate a name for the reference, but this can be changed. Filling out the **Description** field is optional.

    ![A filled clone reference form](clone_filled.png)

5. Click the {{< button icon="save" label="Clone" >}} button

    The reference will be created and appear in the list. Cloning the source data takes time. The progress of this process is shown on the reference card.

    ![Clone in progress](clone_progress.png)

6. Wait for the clone to finish

    The reference card will look like this when the reference is ready:

    ![Clone process complete](clone_done.png)

## Quick Clone

An alternative way to clone a particular reference is by using the quick clone function.

1. Find the quick clone icon in the top-right of a reference card

    ![Quick clone icon](clone_quick.png)

2. Click the {{< icon "clone" "blue" >}} icon

    The **Add Reference** dialog will appear with the clone tab active. The form will have the reference you clicked pre-selected and a name will be auto-generated.

    ![Cloning shortcut tab](clone_quick_dialog.png)

3. Continue with [cloning as normal](#clone-a-reference)

# Import a Reference

It is possible to [export a reference](#export-a-reference) from one Virtool instance and import it into another. This allows you to share you reference with other people.

1. Navigate to the **References** view
   ![Reference Overview Page](list.png)

2. Click the {{< button icon="plus-square" >}} button

    ![Empty Reference Box](empty.png)

3. Click on the **Import** tab

    ![Import Tab](import.png)

4. Fill the import form

    Upload a `.json.gz` file containing a reference and give it and name and optional description.

    ![Import Filled](import_filled.png)

5. Click the {{< button icon="save" label="Import" >}} button

    The reference will be created and the import process will begin. You can see the progress on the reference card.

    ![Import in progress](import_progress.png)

6. Wait for the import to finish

    The reference card will look like this when it is complete:

    ![Import complete](import_complete.png)

# Export a Reference

1.  Navigate to the **References** view

    ![References list](list_with_clone.png)

2.  Click on the reference you want to export

    The detail view for the reference will appear.

    ![Reference header with export button](export_header.png)

3.  Click the {{< icon "download" "blue" >}} icon in the top-right

    The **Export Reference** dialog will appear.

    ![Export dialog](export_dialog.png)

4.  Click the {{< button icon="download" label="Export" color="grey" >}} button

    A file called `reference.json.gz` will be downloaded. It may take some time for the download to start as the reference file is prepared.

    ![Download of export complete](export_download.png)

# Edit a Reference

The _name_ and _description_ of a reference has been created. Its _data type_ and _organism_ cannot be changed.

1. Navigate to the detail view for a reference

    ![Clone of Plant Viruses detail view](detail.png)

2. Click on the {{< icon "pencil-alt" "orange" >}} icon in the top-right

    The **Reference Edit** dialog will appear. The current information for the reference will be in the form fields.

    ![The reference edit dialog](edit.png)

3. Make your changes to reference

    Here, we changed the name and added a description.

    ![The reference edit dialog with changes](edit_changed.png)

4. Click the {{< button icon="save" label="Save" >}} button

    Your changes will be applied to the reference.

    ![The reference edit dialog with changes](edit_complete.png)

# Delete a Reference

1. Navigate to the references view

    Notice that **Clone of Plant Viruses** is in the list of references.

    ![References list](list_with_clone.png)

2. Click on the reference you want to delete

    You will be taken to the detail view for the reference.

    ![Delete Reference](detail.png)

3. Navigate to the **Settings** tab

    ![Reference settings](settings_initial.png)

4. Click the {{< button icon="trash" label="Delete" color="red" >}} button on the bottom

    **Deleting a reference is permanent!** Make sure you want to delete the reference.

    You will be redirected to the references list when you delete a reference. It should be gone from the references list.

    ![Reference list with Clone of Plant Viruses deleted](list.png)

# Update the Official Reference

The official reference is a collection of plant viruses that lets you get started using Virtool right away. It can be automatically updated from our repository on GitHub. When changes are made to the reference on GitHub, your official reference on Virtool also needs to be updated.

1. Go to the detail view for the official reference

    To view if any updates are required, click on your official reference. The **Remote Reference** box shows than update is available.

    ![Update Official Reference](remote.png)

2. Click the {{< button icon="download" label="Install" >}} button to install the update

    The update process will begin. The progress will be shown in the **Remote Reference** box.

    ![Remote reference update progress](remote_updating.png)

3. Wait for the update to complete

    Once the installation is complete, you will see an {{< icon "check" "green" >}} **Up-to-date** on the **Remote Reference** box.

    ![Remote reference is up to date](remote_updated.png)

# Build an Index

After updating the official reference there will be unbuilt changes that need to be included in an index before they can be used in analysis. [Learn more about building indexes](/docs/manual/guide/indexes/#rebuild-index).

# Manage Source Types

Isolate names comprise a _source type_ and _source name_. Users can be forced to use certain allowed source type values when creating isolates.

Source type restrictions do not affect OTUs from import, remote, or clone sources.

1. Go to the detail view for the reference of interest
   ![Reference detail](detail.png)

2. Go to the **Settings** tab
   ![Reference](settings_initial.png)

3. Click the **Enable** checkbox

    This will turn on source type restrictions for the reference. Users will only be able to use the source types listed here when creating isolates.

    ![Source type control enabled](source_types.png)

4. Enter a new source type in the input and click the {{< icon "circle-check" >}} icon

    This will add the entered source type to the allowed source types for the reference. It will be available as a choice for users when they add isolates.

    {{< video "source_types_add.mp4" >}}

5. Click on the {{< icon "trash" "red" >}} icon on a source type to remove it

    {{< video "source_types_delete.mp4" >}}

# Rights

Reference rights control what users can do with a reference.

Access to references can be configured for individual users and user groups. Users and groups added to the reference will be able to read the reference and use it in analyses. Additional protected actions can be enabled for users and groups after they have been added.

## Add a User

Adding a user to a reference will give them the right to browse the reference.

1. Go to the settings tabs for a reference

    ![Reference](settings_initial.png)

2. Click the {{< dummy-link "Add User" >}} link

    The **Add User** dialog will appear. You can use the search input to filter the users on your Virtool instance.

    ![Add User dialog](user_add.png)

3. Click on a user to add them to the reference

    Check that the user is now in the users list.

    ![User Added](user_added.png)

## Add a Group

1. Go to the settings tabs for a reference

    ![Reference](settings_initial.png)

2. Click the {{< dummy-link "Add Group" >}} link

    The **Add Group** dialog will appear

    ![Add User dialog](group_add.png)

3. Click on a group to add it to the reference

    Check that the group is now in the groups list.

    ![User Added](group_added.png)

## Remove a User or Group

1. Click on {{< icon "trash" "red" >}} icon on the user or group you want to remove

    {{< video "user_group_delete.mp4" >}}

## Modifying Rights

This procedure is a exactly the same for users and groups.

1. Go to the settings tabs for a reference

    ![Reference](settings_initial.png)

2. Click on the {{< icon "edit" "orange" >}} icon on the user or group you want to modify

    The modification dialog will appear.

    ![Modify rights](rights_modify.png)

3. Click on the checkbox next to the permissions you would like to assign the user or group

    ![Modified Permissions](rights_modified.png)
