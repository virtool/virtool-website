---
title: "Create a Subtraction"
description: "Create a subtraction from a plant genome FASTA file."
menu:
    manual:
        parent: "Tutorials"
        weight: 30
---

Subtractions are whole genome references used for eliminating reads from the analysis that are likely to have originated from the host genome or non-pathogenic organisms associated with the host such as insects or fungi.

# Find source FASTA {#finding}

We will use the _Arabidopsis thaliana_ genome as a subtraction in this tutorial.

1. Go to the [Ensembl Genomes FTP site for Arabidopsis](ftp://ftp.ensemblgenomes.org/pub/plants/release-37/fasta/arabidopsis_thaliana/dna/)

    Download the unmasked version of the genome.

    !["Download Arabidopsis Genome"](download.png)

# Upload FASTA {#uploading}

1. Go to the **Subtraction** view via the main navigation bar

    There will be a warning indicating that no subtraction has been created.

    ![Empty subtraction list](empty.png)

2. Click on the **Files** link in the left sidebar to go to the subtraction file manager

    !["Subtraction File Manager](files.png)

3. Upload the previously obtained FASTA file.

    {{< video "upload.mp4" >}}

# Create Subtraction {#creating}

1. Go to the **Subtraction** view via the main navigation bar

    There will be a warning indicating that no subtraction has been created.

    ![Empty subtraction list](empty.png)

2. Click the {{< button icon="plus-square" >}} button

    This will open the subtraction creation dialog.

    ![Creation Dialog](create.png)

3. Enter information for the new subtraction

    Give it a unique name and an optional nickname and select the uploaded FASTA file. Click the {{< button icon="play" label="Start" >}} button to start the job.

    ![Filled Creation Dialog](create_filled.png)

    While the subtraction is being created it will have an {{< icon "circle-notch" >}} **Importing** label.

    ![Subtraction Importing](importing.png)

4. Wait for the job to complete before trying to use the new subtraction

    You can view the creation progress by going to the **Jobs** view.

    ![Subtraction Job in Progress](job.png)

    The job will look like this when it is complete:

    ![Subtraction Job Complete](job_complete.png)

    The subtraction will have the {{< icon "check" "green" >}} **Ready** label when it is ready to use.

    ![Subtraction Ready](ready.png)

5. Click on the subtraction to view its details

    ![Subtraction Detail](detail.png)
