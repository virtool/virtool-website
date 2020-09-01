---
title: "Run Pathoscope"
description: "Run the Pathoscope algorithm for detecting known OTUs in a Virtool reference."
menu:
    manual:
        parent: "Tutorials"
        weight: 50
---

This tutorial assumes you have already

-   [created a sample](/docs/manual/tutorials/sample/)
-   [created and built a reference](/docs/manual/tutorials/reference/)
-   [created a subtraction](/docs/manual/tutorials/subtraction/)

You will use these data sources to run a workflow for detecting, in a sample, known viruses from your virus database.

# Start a Pathoscope Job

1. Navigate to the **Samples** view

    ![Samples list view](samples.png)

2. Click on a sample

    You will see the general information view for the sample.

    ![Sample general](/docs/manual/tutorials/sample/detail.png)

3. Navigate to the **Analyses** tab

    You should see an empty list if you haven't already created an analysis for this sample.

    ![Empty analysis list](empty.png)

4. Click the {{< button icon="plus-square" >}} button to open the analyze dialog

    ![Analysis dialog](dialog.png)

5. Select the analysis parameters

    Select the Pathoscope workflow, a subtraction, and one or more references to search against. Selecting more than one reference will start a separate analysis job for each reference.

    ![Analysis dialog filled](dialog_filled.png)

6. Click the {{< button icon="play" label="Start" >}} button to start the job

    The dialog will close and you will immediately see your new analysis appear in the list.

    ![Pathoscope running](running.png)

    When the analysis is complete it will look like this:

    ![Pathoscope complete](ready.png)

7. Go back to the **Samples** view

    The sample item is tagged to show that a Pathoscope analysis has been completed.

    ![Pathoscope workflow tag](tag.png)

# View Pathoscope Results

1. Navigate to the analysis tab for a sample.


    ![Analysis list](list.png)

2. Click on an analysis

    The detail for the analysis will be displayed.

    ![Analysis detail](detail.png)

3. View the mapping overview

    This shows how many sample reads were mapped to the reference (eg. Plant Viruses) and the subtraction (eg. Arabidopsis thaliana).

    ![Mapping overview](mapping.png)

4. View the result list

    The list shows the viruses Virtool thinks are likely to be in the sample. Each identified OTU is listed and be expaned to show the coverage chart and detailed numbers for each isolate and sequence.

    ![Pathoscope result OTU list](list.png)

5. Use the mouse or the {{< key "w" >}} and {{< key "s" >}} keys to select OTUs

    {{< video "select.mp4" >}}

6. Click the {{< button color="grey" icon="filter" label="Filter OTUs" >}} button to show all OTUs

    By default, OTUs with low coverage or weight (relative abundance) are filtered out. The OTUs shown here would normally be filtered out:

    ![Unfiltered](unfiltered.png)

7. Clicking an OTU shows coverage charts for the isolates

    ![Filtered pathoscope coverage](coverage_filtered.png)

    - Deep, wide coverage of an isolate is indicative of an infection.
    - Shallow, wide, and broken coverage is suggestive of intra-plate contamination. Hits due to contamination also typically have low weights.
    - Isolates with high weight, and deep localized coverage are typical of low-complexity or host-similar regions in the isolate genome and do not indicate true infections.

8. Click the {{< button color="grey" icon="filter" label="Filter Isolates" >}} to show all isolates

    By default, isolates with low coverage or wheight are filtered out.

    Virtool excels at detecting virus infections at the isolate-level. In this case, it is clear that **Isolate 1050-02** is the infecting isolate rather than **Isolate GRSPaV-MG**, which would normally be filtered out.

    ![Unfiltered pathoscope isolates](coverage_unfiltered.png)
