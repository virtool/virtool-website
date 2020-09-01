---
title: "Subtraction"
description: "Create and view subtractions."
menu:
    manual:
        parent: "User Guide"
---

# Overview

Subtractions are whole genome references used for eliminating reads from the analysis that are likely to have originated from the host genome or non-pathogenic organisms associated with the host such as insects or fungi. A list of subtractions made can be found on the Subtraction Overview page.
![Subtraction Overview](subtraction_overview.png)

# Upload FASTA {#uploading}

Go to the **Subtraction** view via the main navigation bar. You should see the following:

!["Main Subtraction View"](empty.png)

Click on the **Files** link in the left sidebar to go to the subtraction file manager.

!["Subtraction File Manager](upload_manager.png)

Upload the previously obtained FASTA file.

{{< video "upload.mp4" >}}

# Create a Subtraction

Click on the **Subtraction** tab in the main navigation bar.
![New Subtraction](empty.png)

To create a new subtraction click the {{< button color="blue" icon="plus-square" >}} button next to the search bar. This will open up the subtraction creation dialog.
![Create Subtraction](create_subtraction.png)

Enter a unique name and an optional nickname, select the FASTA file, and click **Start** to start the job.
![Filled create subtraction dialog box](create_filled.png)

While the subtraction is being created it will have an **Importing** label.
![Importing](importing.png)

Wait for the job to complete before trying to use the new subtraction. You can view its progress by going to the **Jobs** view.
![Jobs View](job.png)

The subtraction will have the **Ready** label when it is ready to use.
![Subtraction Ready](ready.png)

# View a Subtraction

View detailed information about the subtraction by clicking on it. As you use the subtraction in samples, they will be added to the **Linked Samples** list.
![Subtraction Details](detail.png)

# Edit a Subtraction

Click on **Subtraction** in the main navigation bar and click on the subtraction you would like to edit.
![Overview of Subtraction](edit1.png)

Click on the {{< icon "pencil-alt" "orange" >}} icon on the subtraction details page to bring up the **Edit Subtraction** dialog box.
![Edit a Subtraction](edit.png)

Once a subtraction is made, the Unique Name and File cannot be changed. You are however, allowed to change the nickname of the subtraction.
![Nickname Added](cabbage.png)

The edits made on the subtraction will show up on the subtraction details page.
![Edits Shown on Subtractions Detail Page](text_filled.png)

# Delete a Subtraction

Click on **Subtraction** in the main navigation bar and click on the subtraction that you wish to delete.
![Subtraction Overview](subtraction_overview.png)

To delete the subtraction click on the {{< icon "trash" "red" >}} icon on the subtraction details page.
![Delete Subtraction](red_trash_can.png)

A dialog box will then pop up to confirm the deletion; select **Confirm**.
![Confirm Deletion of Subtraction](confirm.png)

After confirming the deletion of a subtraction, it will no longer be shown on the subtraction overview page.
![Post Deletion](post_deletion.png)

Once you start using subtractions in samples and they become **Linked Samples**, you will not be able to delete the subtraction.
![Linked Samples](linked.png)
