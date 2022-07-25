---
title: "Wet Lab"
description: "Learn about the lab work involved prior to using Virtool."
menu:
  manual:
    parent: "Science"
    weight: 30
---
# Nucleic Acid Extractions

Nucleic acid extractions are a key process in molecular biology as they are a starting point for a number of downstream applications. The high quality of nucleic acid extractions is of high importance to assure success for future analysis.

The three key steps involved in extracting pure nucleic acids are:

1. Lysing the tissues and cells
2. Eliminating macromolecules such as proteins, lipids, and other contaminants from the nucleic acids
3. Perserving the nucleic acid in water or a buffer solution for use in subsequent work such as PCR   and sequencing.

There are a number of different nucleic acids that can be extracted and used in Virtool. The most common one is dsRNA, however, totRNA, and smRNA can also be used.

Each method of extraction represents a different level of viral RNA enrichment. In general totRNA would have the lowest level of enrichment, whereas dsRNA would have the highest level of enrichment. 

# dsRNA Extractions

Double stranded RNA (dsRNA) extracted from plant tissue is most commonly used for Virtool applications. dsRNA is known to be highly stable and an excellent tool for the characterization of novel viruses that are resistant to purification. Because of its presence in most plant species, and its ability to enrich viral sequences it has the highest level of enrichment.

# Total RNA Extractions

Total RNA extraction is not as beneficial as dsRNA as it contains the RNA of the host as well. Therefore, when you sequence your sample it will include a lower titre of the viral RNA and make your analysis more difficult. 

# Small RNA Extractions

Small RNAs are known to be important regulators of plant development and gene expression. However, like total RNA, small RNAs also contain sequences from the host and therefore decreasing the titre of viral sequences. 

# Contamination

There are a number of sources that can cause contamintion throughtout the extraction and sequencing process. Overlooking the change of gloves or not utilizing sterile tools can be the main cause of contamination. Other sources include sample to sample contamination, environmental exposure, RNases in the air, and human contact with hands and skin.

## Bleed-through

Bleed-through, also known as sample bleeding, is a source of contamination that can be present during a sequencing run. Sample bleeding occurs by incorrect detection of clusters on the flowcell during initial sequencing cycles. Reads are incorrectly assigned to  multiplex samples that are being sequenced in the same sequencing lane.

# Sequencing Power

For a dsRNA library 24 samples are equipped to be sequenced on a NextSeq500, 75 base high output flow cell. This results in an average of over 16 million reads per sample. 

Generally five million reads is a good baseline for a dsRNA library, but the percentage of mapped reads are of more importance. For dsRNA, percentages can range from less than 1% to greater than 80%. The greater the enrichment of viral RNA (i.e. the higher the percent mapped reads) the less number of total reads are required. Therefore, mapped reads is a more important indicator than total reads. 2% of five million reads or 100 000 mapped reads is considered good.

In terms of a total RNA library, 80 million reads is a good baseline and in terms of a small RNA library, one you have at least 20 million reads.

Note that these numbers should be considered as a guideline only. As a single value, library read count is of limited value, and useful when no virus is detected and/or in the absence of an internal control.