---
title: "Analyses"
description: "Create, view, and manage analyses."
menu:
  manual:
    parent: "User Guide"
---

# Overview

# Analysis Jobs

Analyzing sample data is the most computationally intensive task Virtool performs. It can take minutes or hours to run analyses for large, complex sample libraries.

Long-running analyses are therefore tracked under the **Jobs** tab.

![Finished and running analysis jobs](jobs.png)

From an analysis job, you can easily navigate to the analysis listing for the sample being analyzed.

{{< video "job-to-analysis.mp4" >}}

# Caching

Sample data is automatically trimmed during analysis. Trimmed data are cached so that data doesn't have to be re-run.

![Sample files with no cache created](files-no-cache.png)

# What are analyses?

Analyses are the results of running a bioinformatic workflow on sample data.

When an analysis is started, the sample data is run through a series of bioinformatic tools to produce a meaningful result that is made available to the user.

# Reference Versions

Analyses make use of [references](/docs/manual/ug_references.md/) composed of pathogen sequences. Since references are modifiable and versioned, analyses are linked to specific versions of a reference. If a sample needs to be analyzed against a newer version, a new analysis must be created.

Here is an example of a sample with multiple analyses using different pipelines and different reference versions:

![Multi-analysis sample with different pipelines and index versions](multiple_analyses.png)


# Subtractions

Subtractions are sets of host or non-pest sequence data used to eliminiate non-pathogen reads from analysis results.

You can read more about creating and managing subtractions from the links below:

- [Subtraction Creation Tutorial](/docs/manual/tut_subtraction)
- [Subtraction User Guide](/docs/manual/ug_subtraction)

Virtool currently supports two built-in workflows/pipelines called PathoscopeBowtie and NuVs.

# View Analyses 

A list of analyses can be found under your sample of interest. Navigate to your sample and click the **Analyses** tab.
![Sample of Interest](sample_of_interest.png)

This page will list all the analyses that have been created or currently running on your sample. The following image shows that one analysis has been completed.
![List of Analysis](list_analyses.png)

# Create an Analysis

Navigate to the analyses list for your sample of interest.
![Analyses](analyses2.png)

Click on the {{< icon "fas fa-plus-square" >}} button to open the analysis creation dialog.
![Dialog Box](dialog.png)


Use this dialog box to choose the analysis algorithm (PathoscopeBowtie or NuVs), the subtraction, and the reference you want to use to analyze your sample. Once these fields are specified, click the {{< icon "fas fa-play" >}} **Start** button to start the analysis.
![Filled Dialog Box](filleddialog.png)

Once the analysis is running, you can view its progress under the **Jobs** tab.
![Jobs](jobs2.png)

Multiple samples can be analyzed at once using the quick analysis feature. [Read more about quick analyses](/docs/manual/ug_samples).

# Delete an Analysis

{{< note color="red" >}}
**Analysis deletion is permanent**. There is no way to recover a deleted analysis.
{{< /note >}}

Navigate to the analysis listing for the sample whose analysis you want to delete. Click on the {{< icon "fas fa-trash" >}} icon on an analysis record to delete it. 
![Analysis](delete.png)

The analysis record will be removed from the list.
![Analyses](analyses2.png)