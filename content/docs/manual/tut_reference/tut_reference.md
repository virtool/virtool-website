---
title: "Use Official Reference"
type: "manual"
menu:
  manual:
    parent: "Tutorials"
    weight: 10
---

Virtool is built for detecting viruses. The collection of viral sequences used for this purpose is key to Virtool's mission.

When Virtool is first installed no virus reference data is included. You can get started quickly by using our official "remote" reference. In the future, there will be more remote references to choose from. Remote references automatically check for updates and you can apply them to your local copy of the remote at any time.

At least one valid virus must be added to the database in order to start analyzing samples.

# 1. Importing a Virus Database {#importing}

Instead of starting a virus database from scratch, you can do a one-time of import someone else's database or [our offical one](https://www.virtool.ca/downloads).

{{% note %}}
A virus database file can only be imported into an empty instance of Virtool. You cannot import viruses into an already populated database.
{{% /note %}}

We will use the offical database for this tutorial.

1. Go to the [Virtool downloads page](https://www.virtool.ca/downloads) and download the latest database release.
   !["Virus database download"](download.png)

2. Click the download link to get a `viruses.json.gz` file.

3. In Virtool, go to the main _Viruses_ view. You should see the following:
   !["Virus view with import link visible"](import_link.png)

4. Click the **Import** link to bring up the following dialog:
   !["Virus import dialog"](dialog_initial.png)

5. Drag or select the downloaded `viruses.json.gz` file. Information about the contents of the file will be shown.
   !["Virus import dialog with file info"](dialog_info.png)

6. Click the <i class="i-checkmark"></i> **Import** button to start the import process. A progress bar will appear.

7. Refresh the browser if the imported data doesn't appear when the progress bar finishes.

# 2. Browsing Viruses {#browsing}

1. Go to **Viruses** in the main navigation menu

2. Since no viruses have been created, you should see something like this:
   !["Viruses view when empty"](browse_empty.png)

# 3. Creating a Virus {#creating}

Creating the first virus requires only a name. You can optionally provide an abbreviation.

1. Click <i class="vtfont i-new-entry"></i> to bring up a dialog for creating viruses.
   !["Virus creation dialog](create.png)

2. Enter a name and abbreviation for the new virus.

3. Save the new virus.

4. The virus should now appear in the virus manager.
   !["Virus view with modified virus"](browse_tmv.png)

# 4. Adding an Isolate {#adding_an_isolate}

Isolates are how sequence data are organized within the virus record. To maintain continuity with virus sequence records in Genbank, isolates in Virtool are identified by a **source type** and **source name**. These two fields are concatenated to form the isolate's name.

Examples of source types are: _isolate_, _genotype_, and _culture_.

Examples of source names are: _A_, _Canada_, _8801-VLH_, or anything really.

1. Click on the virus entry.
   !["Virus detail empty"](tmv_empty.png)

2. Take note of the red notification at the top of the page. This indicates that the virus cannot be used in analyses until the listed issues are corrected.

3. Click <i class="vtfont i-new-entry"></i> near the **Isolates** heading to bring up a dialog for creating isolates.
   !["Isolate creation dialog"](create_isolate.png)

4. Notice that the **Isolate Name** field changes with the other two fields. This will be the display name for the isolate.

5. Save the changes. The new isolate appear in the isolate editor.
   !["Virus detail with one empty isolate"](empty_isolate.png)
6. You can edit or remove the isolate by clicking <i class="vtfont i-pencil"></i> and <i class="vtfont i-remove"></i>.

# 5. Adding a Sequence {#adding_a_sequence}

Sequences are members of isolates. Many isolates will only have one sequence. If the virus in question is multipartite, more than one sequence would be assigned to each isolate.

1. Click <i class="vtfont i-new-entry"></i> near the **Sequences** heading to bring up a dialog for creating sequences.
   !["Sequence addition dialog"](create_sequence.png)

2. Fill out the form fields. The **Host** field is optional. You can pull sequence records from GenBank by entering a valid GenBank accession in the **Accession** field and clicking <i class="vtfont i-wand"></i>.
   !["Populate sequence addition dialog"](create_sequence_2.png)

3. Save the new virus. It will appear in the isolate editor.
   !["Populated virus detail view"](isolate.png)
4. Click on the sequence entry to expand it and view all the data associated with the sequence record.

# 6. Building the Index {#building_an_index}

Before the imported data can be used in analyses, an optimized index must be built. Think of this as a publication or commit step.

1. The _Viruses_ view should look something the following. The yellow alert has shown up because changes have been made to the database.
   ![](changed.png)

2. Click the **Rebuild the index** link to go to the indexes view.
   ![](/docs_images/indexes_alert.png)

3. Click the <i class="vtfont i-hammer"></i> **Rebuild** button to prepare an index build. A dialog describing the changes to be built will appear.
   ![](/docs_images/index_build_changes.png)

4. Click the <i class="vtfont i-hammer"></i> **Start** button at the bottom of the dialog to start an index build job. A new index entry will appear.
   ![](/docs_images/index_build_running.png)

5. The index is ready to use when it has the <i class="vtfont i-checkmark"></i> **Active** label.
   ![](/docs_images/index_build_active.png)