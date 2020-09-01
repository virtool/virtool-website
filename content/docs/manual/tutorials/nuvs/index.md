---
title: "Run NuVs"
description: "Run the NuVs algorithm for finding potential novel virus sequences."
menu:
    manual:
        parent: "Tutorials"
        weight: 60
---

This tutorial assumes you have already done the following:

-   [created a sample](/docs/manual/tutorials/sample/)
-   [created and built a reference](/docs/manual/tutorials/reference/)
-   [created a subtraction](/docs/manual/tutorials/subtraction/)
-   [installed HMM profiles and annotations](/docs/manual/tutorials/hmms/)

You will use these data sources to run a workflow for discovering potential novel virus sequences in a sample.

# Start an Analysis Job

1. Navigate to the **Samples** view

    ![Samples List View](samples.png)

2. Click on a sample

    You will see the general information for the sample.

    ![Sample General](/docs/manual/tutorials/sample/detail.png)

3. Navigate to the **Analyses** tab

    You will see a list of analyses for the sample. The sample _Test A_ has one PathoscopeBowtie analysis already complete.

    ![Empty Analysis List](list.png)

4. Click the {{< button icon="plus-square" >}} button to open the analyze dialog

    ![Analysis dialog](/docs/manual/tutorials/pathoscope/dialog.png)

5. Complete the analyze form

    Select the **NuVs** algorithm, a reference against which to eliminate known sequences. If you select multiple reference, a separate job will be created for each one.

    ![Analysis dialog filled](dialog_filled.png)

6. Click the {{< button icon="play" label="Start" >}} button

    The dialog will close and you will immediately see your new analysis appear in the list. NuVs can take significantly longer than Pathoscope to complete.

    ![Analysis running](running.png)

    When the analysis is complete, the list item will look like this:

    ![Analysis ready](ready.png)

7. Navigate back to the **Samples** view

    The sample entry will be tagged to show that a NuVs analysis has been completed.

    ![NuVs sample tag](tag.png)

# View NuVs Results

1. Navigate to the **Analyses** tab for a sample

    ![Analyses list with NuVs ready](list_nuvs.png)

2. Click on the NuVs analysis item

    The list shows assembled sequence fragments (contigs) that may be part of a novel virus.

    ![Filtered contigs](filtered.png)

    In the NuVs workflow, sample libraries are assembled into contigs. Open reading frames (ORFs) are calculated from these and potential protein annotations are assigned using profile HMMs.

    ![Expanded](focus.png)

3. Click the {{< button color="grey" icon="filter" label="Filter ORFs" >}} button.

    This will toggle the visibility of ORFs with no HMM annotations, which are hidden by default.

    ![Unfiltered ORFs](unfiltered_orfs.png)

4. Click the {{< button color="grey" icon="filter" label="Filter Sequences" >}} button

    This will toggle the visibility of contigs without significant HMM hits, which are filtered out by default.

    ![Unfiltered Sequences](unfiltered_sequences.png)

5. Click the {{< button color="grey" label="BLAST at NCBI" >}} button to BLAST the contig at NCBI

    ![BLAST at NCBI](blast_running.png)

6. Wait for the BLAST search to complete

    Part of interpreting NuVs results is BLASTing contigs to make sure they are truly unknown. The BLAST results for this sequence show it is likely a contamination from a technician.

    ![BLAST Results](blast.png)
