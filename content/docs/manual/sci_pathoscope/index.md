---
title: "Pathoscope"
menu:
  manual:
    parent: "Science"
---

The Pathoscope workflow is used for detecting known reference OTUs in an Illumina sample library.

# How Does it Work?

The concept behind this bioinformatic workflow is very simple. Put simply, sample reads are mapped against a Virtool [reference](/docs/manual/ref_references) and reads matching OTUs are counted and used to arrive at a detection result. In order to understand this section, you must be familiar with [references](/docs/manual/ref_references) and [OTUs](/docs/manual/ref_otus).

The first step of the workflow involves mapping sample reads against _default_ isolates of all OTUs in the target reference. This can be thought of as a fishing or prescreening step for OTUs that may be potentially represented in the sample. Any OTUs with at least one matching read are retained as candidate hits for the second step.

The second step begins with the creation of a Bowtie2 mapping index containing all isolates of the OTUs identified in the _default_ isolate mapping. This step provides a more diverse mapping target for each virus and allows isolate-level detection.

A major complication of this diagnostic method is multi-mapping, the situation in which single reads find multiple mapping positions in a set of reference sequences. We can make the assumption that there are only a small number of real source sequences in the sample. In practice, reads with a single real source sequence find multiple mapping locations in Virtool references. This is especially true when OTUs contain large numbers of similar isolates.

Virtool uses the [Pathoscope2 Python library](https://github.com/PathoScope/PathoScope) to reassign multi-mapped reads to their most likely source sequences. An expectation maximization (EM) algorithm is used to perform the reassignment. Pathoscope makes the assumption that source sequences with high numbers of **uniquely mapped** (not multi-mapped) reads are mostly likely to be real source sequences. Read counts are reassigned fractionally when it is assigned to multiple genomes after reassignment.
