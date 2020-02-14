---
title: "Indexes"
description: "Create, manage, and understand reference indexes."
menu:
  manual:
    parent: "User Guide"
---

# Overview

Indexes are versioned snapshots of all of the OTUs in a reference at points in time. In the background, indexes are associated with optimized read mapping indicies managed by Virtool.

When changes are made to OTUs, the index is rebuilt to include those changes in future analysis jobs. Each analysis is tied to a specific index (version) of its target reference.

# Viewing Indexes

To view indexes, click the **References** tab in the top navigation bar.
![References Overview Page](references.png)

On this page you will see the **Latest Build** box. This will advise the user what index is currently being used for that specific reference. In our example above, the Latest Index Build is **Index 20**.

Click on the reference of interest to view its index.
![Original Reference](original.png) 

Once again, on this page you will be able to view the **Latest Index Build** for the reference you are using.

Click on the **Indexes** tab under the reference's name.
![Indexes Overveiw](indexes_overview.png)

Here you will see all the index versions for that reference. The current version will be on the very top and will have {{< icon "fa fa-check" >}} **Active**.

# View a Specific Index

To view a specific index, simply click on it. We will look at the **Version 20** index.
![View Index 20](index20.png)

On this page we can view all the changes that have been made to the index. We can also view which user made the changes and how many changes they have made under **Contributors**.

Under **OTUs**, you can view all the OTUs that have been modified. In our example 27 OTUs have been changed. The number of changes made to each OTU is listed on its right.

To view all these changes individually click on the **Changes** tab.
![Index Changes](changes.png)

Here all 259 changes are listed. The list shows all OTUs and what changes were made to them.

# Rebuild Index

After making an update on your remote reference there may be unbuilt changes on your index. When this occurs, a yellow {{< icon "fa fa-info-circle" >}} alert will pop up in multiple views of your Virtool site.  

To rebuild your index after the update click the **Indexes** tab on the detailed view page of your official reference.
![Rebuild Index](rebuild_index.png) 

Then click the blue **Rebuild the index** link. 

A **Rebuild Index** dialog box will appear that will list all the changes that are going to be made. 
![Rebuild index dialog box](rebuild_index_dialog.png)

To start making these changes and rebuilding the index, click {{< icon "fa fa-wrench" >}} **Start** on the bottom of the dialog box.
![Start button to rebuild index](start_rebuild.png)

Once the changes have been made, you will see a new index version that is now {{< icon "fa fa-check" >}} **Active**.  
![Version 1 index active](active_index.png)