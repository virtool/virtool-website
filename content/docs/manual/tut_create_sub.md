---
title: "Create a Subtraction"
type: "manual"
menu:
    manual:
        parent: "Tutorials"
        weight: 30
---

# 2. Creating a Subtraction

Subtractions are whole genome references used for eliminating reads from the analysis that are likely to have originated from the host genome or non-pathogenic organisms associated with the host such as insects or fungi.

## 2.1 Finding source FASTA {#finding}

We will use the _Arabidopsis thaliana_ genome for this example.

1. Go the Ensembl Genomes FTP site for Arabidopsis [here](ftp://ftp.ensemblgenomes.org/pub/plants/release-37/fasta/arabidopsis_thaliana/dna/).

2. Download the unmasked version of the genome.
   ![](/assets/arabidopsis_ftp.png)
   
3. Decompress the downloaded file.
   

## 2.2 Uploading FASTA {#uploading}

1. Go to the _Subtraction_ view via the main navigation bar.
   ![](/assets/subtraction_empty.png)

2. Go to the subtraction file manager by clicking <i class="vtfont i-folder-open"></i>.

3. Upload the FASTA file obtained during step **2.1**.
   ![](/assets/subtraction_upload.gif)


## 2.3 Creating Subtraction {#creating}

1. Go back to the _Subtraction_ view via the main navigation bar.

2. Click the <i class="vtfont i-new-entry"></i> button to open the subtraction creation dialog.
   ![](/assets/subtraction_creation.png)

3. Enter a unique name and select the FASTA file and click <i class="vtfont i-play"></i> **Start** to start the job.
   ![](/assets/subtraction_creation_start.png)
   
4. While the subtraction is being created it will have an **Importing** label.
   ![](/assets/subtraction_importing.png)

5. Wait for the job to complete before trying to use the new subtraction. You can see it by going to the _Jobs_ view using the main navigation bar.
   ![](/assets/subtraction_creation_job.png)
   
6. The subtraction will have the <i class="vtfont i-checkmark"></i> **Ready** label when it is ready to use.
   ![](/assets/subtraction_creation_ready.png)
   

