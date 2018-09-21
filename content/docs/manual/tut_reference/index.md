---
title: "Install Reference"
type: "manual"
menu:
  manual:
    parent: "Tutorials"
    weight: 10
---

Virtool is built for detecting viruses and is capable of detecting other pathogens. Managing collections of pathogen sequences used for this purpose is a key feature of Virtool.

**Significant improvements were made this functionality for the [3.0.0](https://github.com/virtool/virtool/releases) release:**

- individual pathogen species are referred to as organizational taxonomic units (OTUs) to leave the door open for non-virus pathogens
- collections of OTUs are referred to as **_references_**
- multiple references can be maintained and analyzed against on a single Virtool instance
- the official Virtool plant virus reference can be automatically installed and updated from [GitHub](https://github.com/virtool/ref-plant-viruses)

At least one non-empty reference must be created in order to start analyzing samples. One quick way to accomplish this is to install the [official plant virus reference](https://github.com/virtool/ref-plant-viruses).

# 1. Install the Official Reference {#installing}

Instead of starting a virus database from scratch, you can use our [official plant virus reference](https://www.virtool.ca/downloads). Doing this will setup up **_remote_** connection to the reference on GitHub.

1. Go to the _References_ view. If you have not yet installed the official reference, you should see this:
   !["Official Reference Placeholder"](install_placeholder.png)

2. Click the **Install** button to begin the installation process. A new card should appear representing the official reference on your system.
   !["Official Reference Installing"](installing.png)

3. One the installation process is complete, the reference card should look something like this:
   !["Reference Installation Complete"](install_complete.png)

4. Clicking on the reference card will bring you to a detail page for the reference.
   !["Installed Official Reference Detail Page"](installed_detail.png)

# 2. Browse OTUs {#browsing}

Once the installation of the official reference is complete, you can browse the OTUs that are included in the reference.

1. Look for the **OTUs** tab in the reference detail view.
   !["Official Reference Detail Page"](installed_detail.png)

2. Click on the OTUs tab and you should see something like the following:
   !["The OTUs tab"](otus.png)

3. You can search OTUs by their names or abbreviations.
   !["Search OTUs"](search.png)

4. Note the _There are unbuilt changes_ message. This means you have to **_build_** a new index for the reference before you can use it in analyses.

# 3. Build an Index {#building_an_index}

Before the imported data can be used in analyses, an optimized index must be built. Think of this as a publication or commit step.

1. Look for the **Indexes** tab in the reference detail view.
   ![](indexes_tab.png)

2. Click the **Rebuild** button to prepare an index build.
   !["Empty Indexes List"](indexes.png)

3. A index creation dialog describing the changes to be built will appear.
   !["Index Creation Dialog Top"](create_index_1.png)
   !["Index Creation Dialog Bottom"](create_index_2.png)

4. Click the **Start** button at the bottom of the dialog to start an index build job. A new index entry will appear with the **Building** label:
   ![](index_building.png)

5. The index will look something like this is when it is ready to use. It will have the **Active** label.
   ![](index_ready.png)
