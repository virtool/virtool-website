---
title: "Analyses"
description: "Create, view, and manage analyses."
menu:
  manual:
    parent: "User Guide"
---

# Overview



## What are analyses?

Analyses are the results of running a bioinformatic workflow on sample data.

When an analysis is started, the sample data is run through a series of bioinformatic tools to produce a meaningful result that is made available to the user.

## Reference Versions

Analyses make use of [references](/docs/manual/ug_references) composed of pathogen sequences. Since references are modifiable and versioned, analyses are linked to specific versions of a reference. If a sample needs to be analyzed against a newer version of a new analysis must be created.

Here is an example of a sample with multiple analyses using different pipelines and different reference versions:

![Multi-analysis sample with different pipelines and index versions](multiple-analyses.png)


## Subtractions

Subtractions are sets of host or non-pest sequence data used to eliminiate non-pathogen reads from analysis results.

You can read more about creating and managing subtractions:

- [Subtraction Creation Tutorial](/docs/manual/tut_subtraction)
- [Subtractions User Guide](/docs/manual/ug_subtraction)

Virtool currently supports two built-in workflows/pipelines called PathoscopeBowtie and NuVs.

# Analysis Jobs

Analyzing sample data is most computationally intensive task Virtool performs. It can take minutes or hours to run analyses for large, complex sample libraries.

Long-running analyses are therefore tracked in the **Jobs** view.

![Finished and running analysis jobs](jobs.png)

From an analysis job, you can easily navigate to the analysis listing for the sample being analyzed.

{{< video "job-to-analysis.mp4" >}}

# Caching

{{< note >}}
**New in v3.4.0**.
{{< /note >}}

Sample data is automatically trimmed during analysis. Trimmed data are cached so that data doesn't have to be re-run everytime a fucki



![Sample files with no cache created](files-no-cache.png)
