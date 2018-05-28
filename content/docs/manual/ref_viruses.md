---
title: "Viruses"
type: "manual"
menu:
    manual:
        parent: "Reference"
        weight: 50
---

{{< construction >}}

# Overview

The Virtool virus reference is a fully editable and tracked collection of viruses, viral  isolates, and their genome sequences. The data in the virus reference is used to identify potential viral infections in Illumina libraries derived from your samples.

## Record Structure

Here is the structure of a single virus record containing one isolate and its sequences.

> - **Virus** - Apple Mosaic Virus
    - **Isolate** - Isolate 1
        - **Sequence 1** - [NC_003464.1](https://www.ncbi.nlm.nih.gov/nuccore/NC_003464.1)
        - **Sequence 2** - [NC_003465.1](https://www.ncbi.nlm.nih.gov/nuccore/NC_003465.1)
        - **Sequence 3** - [NC_003480.1](https://www.ncbi.nlm.nih.gov/nuccore/NC_003480.1)
        
Virtool is capable of storing large numbers of isolates for each virus. It can use this data to identify which known isolates a virus in your sample is most closely related to.

## Editing

The virus reference database is fully editable. You can change the name and abbreviation, modify the schema, and alter the isolates and sequences of each virus. **There are a few important details to keep in mind when editing the virus database**:

- each change causes the virus's version to increase by one
- each change is recorded with a timestamp and the user's name

## Browsing

The viral reference database can be searched and viewed easily from your web browser. Clicking on _Viruses_ in the main navigation bar will bring you to the following view.

![](/docs_images/viruses_browse.png)

In the virus database browser, you can:

- find viruses by their names or abbreviations using the search bar
- view only viruses modified since the last [index build](/viruses/indexes.md)

# Editing

## Add an Isolate

Open the dialog for adding an isolate by clicking the <i class="vtfont i-new-entry"></i> icon in the rights corner of the _Isolates_ header:

![Isolates Header](/docs_images/viruses_isolates_header.png)

Fill the _Source Type_ and _Source Name_ fields. These fields are combined to create an isolate name. They are 

![Add Isolate Dialog](/docs_images/viruses_add_isolate.png)

- both fields are optional and the isolate named will be **Unamed** if they are both   empty
- in a single virus, multiple isolates can have the same name
- administrators can add new source types to the 