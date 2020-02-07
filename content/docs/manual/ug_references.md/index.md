---
title: "References"
description: "Create and manage Virtool references."
menu:
  manual:
    parent: "User Guide"
---
# Searching a Reference

Click on **References** in the main navigation bar to go to the Reference Overview Page. 
![Reference Overview Page](reference_overview.png)

Then type in the name of the reference in the search bar.
![Search](search.png)

Click on your reference to view detailed information about it.
![Detailed Information](detail_info.png)

# Creating References

## Installing an Official (Remote) Reference

Virtool is built for detecting viruses and is capable of detecting other pathogens. Managing collections of pathogen sequences used for this purpose is a key feature of Virtool.

At least one non-empty reference must be created in order to start analyzing samples. One quick way to accomplish this is to install the [official plant virus reference](https://github.com/virtool/ref-plant-viruses).

To see a a step-by-step tutorial on installing an official reference click [here](/docs/manual/tut_reference).

## Creating a Blank Reference
Click on **References** in the main navigation bar to go to the References Overview page. 
![Reference Overview Page](reference_overview.png)

To create a new empty reference, click on the {{< icon "fas fa fa-plus-square" >}} button. A dialog box like the one below will show up.
![Empty Reference Box](empty_ref.png)

Give your new reference a name, the organism to which it belongs, and an optional description. Once the fields in the dialog box are filled out, click {{< icon "fa fa-save" >}} **Save**.
![Filled Reference Dialog](filled_ref_dialog.png)

Your new reference will now appear in the References Overview page.
![Reference Overview Page](reference_overview2.png)

## Cloning a Reference

Click on **References** in the main navigation bar to go to the Reference Overview page.
![Reference Overview Page](reference_overview2.png)

To clone a reference click on the {{< icon "fas fa fa-plus-square" >}} button. A dialog box like the one below will show up.
![Empty Reference Box](empty_ref.png) 

Click on the blue **Clone** tab.

In the dialog box, click on the **Source Reference** you want to clone. Clicking on a source reference will automatically give your clone a default name which you can change. Filling out the **Description** field is optional.
![Clone Dialog Box FIlled](clone_ref.png)

Once the fields in the dialog box are specified, click {{< icon "fa fa-save" >}} **Clone**. Your Banana Viruses clone will be added to the references list.
![Clone Complete](clone_complete.png)

## Exporting a Reference

To export a reference, click on **References** in the main navigation bar. 
![References Overview](clone_complete.png)

Click on the reference you want to export. 
![Export Banana Viruses](export_banana.png)

On the top right click the {{< icon "fas fa-download" >}} button.
![Download](download.png)

To export the reference with the local OTU IDs, click **Normal**. This will begin the downloading process of that reference.

## Importing a Reference

Click on **References** in the main navigation bar to go to the Reference Overview page.
![Reference Overview Page](clone_complete.png)

To import a new reference, click on the {{< icon "fas fa fa-plus-square" >}} button. A dialog box like the one below will show up.
![Empty Reference Box](empty_ref.png)

Click on the blue **Import** tab.
![Import Tab](import_tab.png)

Click the {{< icon "fas fa-upload" >}} **Upload** button and open the reference file you want to import. You must also type in a name of the reference you want to import.
![Import Filled](import_filled.png)

Click {{< icon "fa fa-save" >}} **Import** to import the reference. The importing progress can be seen under the **References** tab.
![Import Progress](import_progress.png)

# Settings

## Source Types

Isolate names comprise a _source type_ and _source name_. Users can be forced to use certain source type values when creating isolates.

Source type restrictions do not affect viruses that are imported into the database.

Click the reference of interest under the **References** tab in the main navigation bar. In this example we will look at the **Clone of Plant Viruses** reference.
![Source Type Reference](source_ref.png)

Click the blue **Settings** tab to see a list of **Source Types** that users are allowed to choose from to create an isolate.
![Settings](settings.png)

Currenlty, the only source types that are allowed to be used in creating an isolate are **Isolate** and **Strain**. 

## Adding a Source Type

To add a new source type, click on {{< icon "far fa-lg fa-square" >}} **Enable** to disable the source type feature. 
![Source type feature disabled](disabled.png)


# Manage References

## Edit a Reference

The name of a reference cannot be changed once it has been made. You are however, allowed to make changes to the OTUs and its isolates. 

## Update Official (Remote) Reference

Your remote reference is the first reference you downloaded that is in sync with a reference published on GitHub. When changes are made to the reference of GitHub, your official reference on Virtool also needs to be updated.

To view if any updates are required, click on your official reference under the **References** tab. In this case our official reference is named as **Plant Viruses**.
![Update Official Reference](update.png)

Under the **Remote Reference** heading, we see that there is one update available.
![Remote Reference](remote_ref.png)

Click on the {{< icon "fas fa-download" >}} **Install** button to install the update. The progress of the installation is seen as shown below.
![Remote reference uploading progress](progress_remote_ref_update.png)

Once the installation is complete, you will see {{< icon "fa fa-check" >}} **Up-to-date** under the **Remote Reference** heading.
![Remote reference is up to date](up_to_date.png)

To check for other available updates click {{< icon "fas fa-sync" >}}.

## Rebuild Index

After making an update on your remote reference there may be unbuilt changes on your index. To rebuild your index after the update click the **Indexes** tab on the detailed view page of your official reference.
![Rebuild Index](rebuild_index.png) 

Then click the blue **Rebuild the index** link. 

A **Rebuild Index** dialog box will appear that will list all the changes that are going to be made. 
![Rebuild index dialog box](rebuild_index_dialog.png)

To start making these changes and rebuilding the index, click {{< icon "fa fa-wrench" >}} **Start** on the bottom of the dialog box.
![Start button to rebuild index](start_rebuild.png)

Once the changes have been made, you will see a new index version that is now {{< icon "fa fa-check" >}} **Active**.  
![Version 1 index active](active_index.png)

# OTUs

The Virtool OTU (Organization taxonomic unit) reference is a fully editable and tracked collection of viruses, viral isolates, and their genome sequences. The data in the virus reference is used to identify potential viral infections in Illumina libraries derived from your samples.

See the [OTUs documentation](/docs/manual/ug_otus) for more information.

# Indexes

See the [Indexes documentation](/docs/manual/ug_indexes) for more information.



## Disabling Restriction

The source types feature can be disabled to allow users to enter whatever text they want as a source type. This can be done by clicking off the checkbox in the header of the **Source Types** setting section.

!["Source Types Feature Disabled"](source_types_disabled.png)

# Internal Control

If you are using an internal control during your lab procedures, the control virus can be provided to Virtool. This setting is not currently in use, but may be used for scaling results or flagging irregular samples in the future.

## Selecting Internal Control

The internal control can be selected from the virus database by selecting the virus name in the dropdown text box.

!["Internal Control"](internal_control.gif)

## Disabling Internal Control

This can be done by clicking off the checkbox in the header of the **Internal Control** setting section. This has no effect for now.

!["Internal Control Disabled"](internal_control_disabled.png)
