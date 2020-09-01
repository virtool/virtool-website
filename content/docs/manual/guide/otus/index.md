---
title: "OTUs"
description: "Create, edit, and view the fundamental components of Virtool references."
menu:
    manual:
        parent: "User Guide"
---

# Overview

In Virtool, references are collections of OTUs (organization taxonomic unit), their isolates, and genomic sequences.

Virtool references are fully editable and tracked. The data is used to identify potential pathogen infections in Illumina libraries derived from your samples.

## Structure

An OTU typically represents a single pathogen species.

Each OTU is itself a collection of _isolates_. In Virtool, isolates include strains, genotypes, or variants of the same OTU. An isolate can have one or more genome sequences attached to it.

An OTU must contain one or more isolates and each isolate must have one or more sequences attached to it.

Here is the structure of a single viral OTU containing one isolate and its sequences:

## Isolate Naming

Virtool isolates are named with two pieces of information: the source type and source name. This naming system was inspired by the way isolate information is stored in Genbank records.

A **source type** is the first word in the isolate name and is a classification keyword used by the publisher of the sequence. Examples include _strain_, _genotype_, _culture_, and _variant_. The use of the **source type** keywords are not standardized in Genbank.

A **source name** is the unique second part of the isolate name that identifies the isolate.

Here are some examples of isolate names, source types, and source names:

| Name             | Source Type | Source Name |
| ---------------- | ----------- | ----------- |
| Isolate A        | Isolate     | A           |
| Isolate Shenyang | Isolate     | Shenyang    |
| Variant B        | Variant     | B           |
| Genotype 6       | Genotype    | 6           |

## Schemas

In Virtool, OTU _schemas_ are a way of defining what each isolate in the OTU should look like.

Schemas allow you to define what sequence segments should be present in isolates created for the OTU. Once a schema is defined, users will be to mark each sequence in the isolate with the segment it represents. Assigning a segment to a sequence has the follow effects:

-   sequences in the OTU detail view are sorted according to the schema order
-   sequences in the OTU detail view sequence headers display the segment name instead of the definition
-   sequences coverage charts in Pathoscope are sorted by the schema order

## History

All changes made to OTUs are tracked. Change records include a description of what was changed, the timestamp, and the user responsible.

The history for an OTU can be viewed in its detail view under the **History** tab. Changes are separated into those that have been made since the last index build (**Unbuilt Changes**) and those included in previous builds (**Built Changes**) by clicking on the {{< icon "history" "blue" >}} icon.

[See more information about history](/docs/manual/guide/history).

# Browse OTUs

The OTUs that belong to a Virtool reference can be easily browsed and edited. To start browsing member OTUs for a given reference:

1. Click on **References** in the main navigation bar

    This will show a list of all references.

    ![References list](references.png)

2. Click the reference of interest

    This will open the detail view for the reference.

    ![Banana Viruses reference](reference_detail.png)

3. Navigate to the OTUs tab

    This view shows the OTUs that belong to the reference

    ![Banana Viruses OTUs](reference_otu_list.png)

4. Click on an OTU item to view its detail page

    ![ABTV Detail](abtv_detail.png)

# Create an OTU

Creating a new OTU for a given reference requires only a name. You can optionally provide an abbreviation like those commonly used for viruses.

1. Click the {{< button icon="plus-square" >}} button under the OTUs tab

    ![Create OTU button](create_button.png)

    A dialog will appear with a form for creating a new OTU.

    ![Create OTU dialog](create.png)

2. Enter a name and optionally an abbreviation for the new virus

    ![Create OTU dialog filled out](create_filled.png)

3. Click the {{<button icon="save" label="Save" >}} button to create the new OTU

    It should now appear in the list of OTUs for this reference.

    ![New OTU in modified state](created.png)

4. Click on the newly created OTU

    This will navigate to the OTU's detail view. Notice that there is a warning indicating that the OTU is not ready for use in analyses.

    ![New OTU detail](bad_banana.png)

# Edit an OTU

The name or abbreviation for an OTU can be changed after its creation.

1. Navigate to the detail view for the OTU you want to edit

    ![Bad Banana Detail](bad_banana.png)

2. Click on the {{< icon "pencil-alt" "orange" >}} icon in the top-right

    This will display the edit dialog. **Note that you will not see this icon if you don't have modification rights on the parent reference**.

    ![Edit dialog](edit.png)

3. Change any of the fields and click the {{< button icon="save" label="Save" >}} button

    We will change the abbreviation in this example.

    ![Edit dialog changes](edit_changed.png)

# Remove an OTU

1. Navigate to the detail view for the OTU you want to delete.

    ![Remove OTU](tmv_initial.png)

2. Click on the topmost {{< icon "trash" "red" >}} next to the OTU name

    A dialog box like the one below will show up to confirm the deletion of the OTU.

    ![Confirm removal of OTU](remove.png)

3. Click the {{< button icon="check" color="red" label="Confirm" >}} button to permanently remove the OTU

    The OTU will be removed from the **OTUs** list and the index must be rebuilt to include this change in future analyses.

    ![Remove OTU](removed.png)

# Add an Isolate

Isolates are how sequence data are organized within the OTU record. Read about isolates in the [section overview](#overview).

1. Navigate to the detail view for an OTU

    ![TMV with one existing isolate](tmv_initial.png)

2. Click on {{< dummy-link "Add Isolate" >}} to the right of the **Isolates** heading

    This will display a dialog for creating isolates.

    ![Add isolate initial](isolate_add.png)

3. Fill the form with your **source type** and **source name** values

    Notice that the **Isolate Name** field changes with the other two fields. Both fields are optional and the isolate name will be **Unnamed** if they are both empty. Multiple isolates in a single OTU can have the same name.

    ![Add isolate dialog filled](isolate_add_filled.png)

4. Save the changes by clicking the {{< button icon="save" label="Save" color="blue" >}} button

    The new isolate will appear in the isolate editor

    ![Virus detail with one empty isolate](tmv_sxfq.png)

# Edit an Isolate

1. Navigate to the OTU whose isolate you would like to edit

    ![Edit TMV](tmv_sxfq.png)

2. Select the isolate you want to edit

    We will select _Isolate SXFQ_ in this example. This isolate is new and has no sequences associated with it.

    ![TMV with Isolate SXFQ selected](tmv_sxfq_selected.png)

3. Click on the {{< icon "pencil-alt" "orange" >}} icon next to the isolate

    A dialog box will show up like the one below. The fields are populated with the current isolate data.

    ![Dialog box for editing an isolete](edit_isolate.png)

4. Make the necessary changes to the isolate

    In this example, we changed the source name to _TMV-WS06_.

    ![Edited Isolate](isolate_edit_filled.png)

5. Click the {{< button icon="save" label="Save" >}} button

    The new changes will be reflected in the detail view page of the OTU.

    ![New changes to OTU name displayed](isolate_edited.png)

# Remove an Isolate

1. Select the isolate you would like to remove

    ![Delete new isolate](tmv_sxfq_selected.png)

2. Click on the {{< icon "trash" "red" >}} next to the isolate name

    A removal confirmation dialog like the one shown below will appear.

    ![Confirm removal of isolate](isolate_remove_confirm.png)

3. Click the {{< button icon="check" label="Confirm" color="red" >}} button to permanently delete the isolate

    The isolate should now be removed from the **Isolates** list.

    ![Isolate is removed from list](tmv_initial.png)

# Add a Sequence

1. Select the isolate you want to add a sequence to

    ![TMV with Isolate SXFQ selected](tmv_sxfq_selected.png)

2. Click the {{< dummy-link "Add Sequence" >}} link near the **Sequences** heading

    This will display the **Add Sequence** dialog

    ![Sequence addition dialog](sequence_add.png)

3. Fill out the form fields

    You can pull sequence records from GenBank by entering a valid GenBank accession in the **Accession** field and clicking the {{< icon "magic" >}} icon.

    ![Sequence addition dialog with completed form](sequence_add_filled.png)

4. Click the {{< button icon="save" label="Save" >}} button to create the new virus

    It will appear in the isolate editor.

    ![TMV with sequence added for Isolate SXFQ](sequence_added.png)

5. Click on the sequence entry to expand it

    ![Sequence Record](sequence_expanded.png)

# Edit a Sequence

1. Select the isolate and sequence you want to edit

    Here we have selected sequence _JX993906.1_ in _Isolate SXFQ_.

    ![Sequence Record](sequence_expanded.png)

2. Click the {{< icon "pencil-alt" "orange" >}} icon in the sequence header

    The **Edit Sequence** dialog will appear.

    ![Edit sequence dialog box](sequence_edit.png)

3. Make your changes to the sequence

    Here we changed the host field from _Solanum lycopersicum_ to _Tomato_.

    ![Edit sequence dialog box with change to host field](sequence_edit_changed.png)

4. Click {{< button icon="save" label="Save" color="blue" >}} to save your edits

    Notice that the changes have been applied on the sequence record.

    ![Updated sequence record](sequence_edited.png)

# Remove a sequence

1. Select the sequence you want to remove

    Here we have selected sequence _JX993906.1_ in _Isolate SXFQ_.

    ![Sequence Record](sequence_expanded.png)

2. Click on the {{< icon "trash" "red" >}} next to the sequence header

    A dialog box like the one shown below will show up.

    ![Confirm removal of the sequence](sequence_remove.png)

3. Click {{< button icon="check" label="Confirm" color="red" >}} to permanently delete the isolate

    The sequence should now be removed from the **Sequences** list.

    ![Isolate is removed from list](sequence_removed.png)

# Add a Segment

1. Navigate to an OTU you want to define a schema for

    We will look at Abutilon mosaic virus (AbMV) in this example. Notice that AbMV has two genome segments: _DNA-A_ and _DNA-B_.

    ![Abutilon mosaic virus detail](abmv.png)

2. Navigate to the **Schema** tab.

    ![Schema Overview](schema.png)

3. Click the {{< button icon="plus-square" label="Add Segment" >}} button

    The **Add Segment** dialog box will appear.

    ![Add Segment](segment_add.png)

4. Fill the form field

    Give the segment a name and select a **Molecule Type**. AbMV has a circular single-stranded DNA genome.

    The **Segment Required** checkbox indicates that the segment must be present in an isolate for is to be valid.

    ![Add Segment](segment_add_filled.png)

5. Click the {{< button icon="save" label="Save" >}} button to add the segment

    The new _DNA-A_ segment will be displayed in the schema list.

    ![DNA-A added to AbMV schema](segment_added.png)

6. Add _DNA-B_ to finish populating the schema

    ![Both segments added to AbMV schema](segments_added.png)

# Edit a Segment

1. Locate the segment you want to edit

    We will change the name of _DNA-A_.

    ![DNA-A will be edited](segments_added.png)

2. Click the {{< icon "pencil-alt" "orange" >}} icon

    The **Edit Segment** dialog will appear. The form will be populated with the current segment data.

    ![Edit segment dialog](segment_edit.png)

3. Make your changes to the segment

    Here, we changed the name from _DNA-A_ to _DNA A_.

    ![Edit segment dialog with changes](segment_edit_changed.png)

4. Click the {{< button icon="save" label="Save" >}} button

    The changes made will be reflected under the **Schema** tab.

    ![DNA-A was changed to DNA A](segment_edited.png)

# Use a Segment

Once you have defined a schema for an OTU, you can set a segment on each isolate sequence when adding or editing them.

1. Check the schema for the OTU

    We have defined _DNA-A_ and _DNA-B_ for AbMV. The segments are ordered alphabetically.

    ![Schema for AbMV](segments_added.png)

2. Navigate to the **OTU** tab and select and isolate

    ![AbMV isolates before segment assignment](segment_use_initial.png)

3. Select a sequence

    Here, we have selected _NC_001929_. Notice that the **Segment** field is _Not configured_.

    ![AbMV with NC_001929](segment_use_select.png)

4. Click the {{< icon "pencil-alt" "orange" >}} icon

    The **Edit Sequence** dialog will appear.

    ![Sequence edit dialog for NC_001929](segment_use_edit.png)

5. Click the **Segment** dropdown

    The segments defined in the schema will be available for selection.

    ![Sequence edit dialog with Segment dropdown](segment_use_edit_dropdown.png)

6. Select the segment for your sequence

    Here, we will select _DNA-B_ to match the information from the Genbank-sourced definition for the sequence.

    ![Sequence edit dialog with segment set](segment_use_edit_changed.png)

7. Click the {{< button icon="save" label="Save" >}} button

    The change to the **Segment** field will be reflected in the sequence record and the sequence header will contain the segment name instead of the sequence definition.

    ![AbMV sequence list with segment change reflected](segment_use_changed.png)

8. Set the segment for the other sequence

    When this has been done, the **Sequences** list will be ordered according to the schema.

    ![AbMV sequence list ordered according to schema](segment_use_ordered.png)

# Reorder a Schema

1. Select an OTU and isolate and note the current sequence ordering

    These sequences have a segment set and are ordered based on the OTU schema.

    ![AbMV sequence list ordered according to schema](segment_use_ordered.png)

2. Navigate to the OTU **Schema** tab

    The segments are currently ordered alphabetically.

    ![AbMV schema with both segments](segments_added.png)

3. Drag and drop the segments to reorder them

    {{< video "schema_reorder.mp4" >}}

4. Return to the isolate from **Step 1**

    Note that the sequence ordering has changed to match the schema.

    ![AbMV schema with both segments](sequences_reordered.png)

# Remove a Segment

1. Navigate to the schema page for an OTU

    ![Schema for AbMV](segments_added.png)

2. Click the {{< icon "trash" "red" >}} icon on a segment

    The **Remove Segment** dialog will appear.

    ![Confirm removal of segment](segment_remove.png)

3. Click the {{< button icon="check" label="Confirm" color="red" >}} button to remove the segment

    The segment will be removed from the schema segment list.

    ![Segment removed](segment_removed.png)
