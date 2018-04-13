---
title: "Run Pathoscope"
type: "manual"
menu:
    manual:
        parent: "Tutorials"
        weight: 50
---

This tutorial assumes you have already [created a sample](/docs/manual/tut_create_sample/), [created and built a virus database](/docs/manual/tut_build_db/), and [created a subtraction](/docs/manual/tut_create_sub/). You will use these data sources to run a bioinformatic pipeline for detecting, in a sample, known viruses from your virus database.

# Starting an Analysis Job

1. Navigate to the _Analyses_ tab for one of your existing samples.
    !["Empty analysis list](/docs_images/analyses_empty.png)

2. Click <i class="fa fa-edit"></i> to open the analysis creation dialog, select PathoscopeBowtie, and click <i class="fa fa-play"></i> **Start**.
    !["Analysis dialog"](/docs_images/analysis_dialog.png)

3. The dialog will close and you will immediately see your new analysis appear in the list.
    !["Pathoscope running"](/docs_images/pathoscope_running.png)

4. When the analysis is complete, the list item will look like this:
    !["Pathoscope complete"](/docs_images/pathoscope_complete.png)

5. In the _Samples_ view, you will notice the sample entry is tagged to show that a Pathoscope analysis has been completed.
    !["Pathoscope sample tag"](/docs_images/pathoscope_sample_tag.png)

# Viewing Pathoscope Results

1. Click your recently created analysis in the analysis list. You should see something like this:
    !["Pathoscope sample tag"](/docs_images/pathoscope_initial.png)

2. The list shows the viruses Virtool thinks are likely to be in the sample. Viruses with low coverage or weight (relative abundance) are filtered out. They can be made visible by clicking <i class="fa fa-filter"></i>.
    !["Pathoscope unfiltered"](/docs_images/pathoscope_unfiltered.png)

3. Clicking a virus shows sequencing coverage charts for the isolates that may be in your sample. 
    !["Pathoscope coverage filtered"](/docs_images/pathoscope_coverage_filtered.png)

    Deep, wide coverage of an isolate is indicative of an infection.
    
    Shallow, wide, and broken coverage is suggestive of intra-plate contamination. Hits due to contamination also typically have low weights.
    
    Isolates with high weight, and deep localized coverage are typical of low-complexity or host-similar regions in the isolate genome and do not indicate true infections.

4. Filtering of low weight and coverage isolates is toggleable by clicking <i class="fa fa-filter"></i>. Virtool excels at detecting virus infections at the isolate-level. In this case, it is clear that **Isolate 1050-02** is the infective isolate rather than **Isolate GRSPaV-MG** or **Internal 16GVP002**. 
    !["Pathoscope unfiltered"](/docs_images/pathoscope_coverage_unfiltered.png)
