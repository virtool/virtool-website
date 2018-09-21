---
title: "Create a Subtraction"
type: "manual"
menu:
  manual:
    parent: "Tutorials"
    weight: 30
---

Subtractions are whole genome references used for eliminating reads from the analysis that are likely to have originated from the host genome or non-pathogenic organisms associated with the host such as insects or fungi.

## 1. Find source FASTA {#finding}

We will use the _Arabidopsis thaliana_ genome for this example.

1. Go the Ensembl Genomes FTP site for Arabidopsis [here](ftp://ftp.ensemblgenomes.org/pub/plants/release-37/fasta/arabidopsis_thaliana/dna/). Download the unmasked version of the genome.
   !["Download Arabidopsis Genome"](download.png)

2. Decompress the downloaded file. Virtool does not currently accept GZIP-compressed subtraction FASTA data.

## 2. Upload FASTA {#uploading}

1. Go to the _Subtraction_ view via the main navigation bar. You should
   !["Main Subtraction View"](empty.png)

2. Click on the **Files** link in the left sidebar to go to the subtraction file manager.
   !["Subtraction File Manager](upload_manager.png)

3. Upload the FASTA file obtained during step **1.2**.
   !["Upload Subtraction File"](upload.gif)

## 3. Create Subtraction {#creating}

1. Go to the _Subtraction_ view via the main navigation bar.
   ![Subtraction Listing](subtraction.png)

2. Click the <i class="vtfont i-new-entry"></i> button to open the subtraction creation dialog.
   ![Creation Dialog](create.png)

3. Enter a unique name and an optional nickname, select the FASTA file, **Start** to start the job.
   ![Filled Creation Dialog](create_filled.png)

4. While the subtraction is being created it will have an **Importing** label.
   ![Subtraction Importing](importing.png)

5. Wait for the job to complete before trying to use the new subtraction. You can view its progress by going to the _Jobs_ view.
   ![Subtraction Job in Progress](job.png)

6. The subtraction will have the <i class="vtfont i-checkmark"></i> **Ready** label when it is ready to use.
   ![Subtraction Ready](ready.png)

7. View detailed information for the subtraction by clicking on it. As you use the subtraction in samples, they will be added to the **Linked Samples** list.
   ![Subtraction Detail](detail.png)
