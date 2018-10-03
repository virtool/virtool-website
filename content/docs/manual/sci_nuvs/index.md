---
title: "NuVs"
type: "manual"
menu:
  manual:
    parent: "Science"
---

NuVs is a novel workflow used for discovering potential novel viral sequences in a sample library.

### How Does it Work?

NuVs complements the rapid detection of known viruses provided by the Pathoscope workflow. It is able to find novel virus sequences that cannot be detected using BLAST, mapping, or other approaches.

NuVs relies on profile hidden Markov models (pHMMs) to predict viral domains in sequences assembled from sample libraries.

The first step of the NuVs workflow is eliminating reads associated with known OTUs or a host genome. First, reads are mapped against a Virtool reference and any matching reads are discarded. The remaining reads are mapped against a host subtraction genome and similarly removed.

The next step is assembly of the remaining, undiscarded reads using [SPAdes](http://cab.spbu.ru/software/spades).
