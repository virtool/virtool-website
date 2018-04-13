---
title: "Create a Sample"
type: "manual"
menu:
    manual:
        parent: "Tutorials"
        weight: 40
---

# Uploading a FASTQ File

1. Go the _Samples_ view via the main navigation bar.
    !["Sample Manager"](/docs_images/samples_main.png)

2. If you haven't already uploaded a FASTA file, you must do so. Click <i class="fa fa-folder-open"></i> to go to the read file uploader and upload as FASTQ file.
    !["Upload read file"](/docs_images/upload_read_file.gif)  

3. In the _Samples_ view, click <i class="far fa-edit text-primary"></i> to open the sample creator. The file you uploaded should now be available in file list.
    !["Sample creator"](/docs_images/sample_creator.png)

# Creating a Sample

1. Fill out the fields in the sample creator. Only the sample name, subtraction host, and one or two read files are required.
    !["Sample creator filled"](/docs_images/sample_creator_filled.png)

2. Click <i class="fas fa-save"></i> **Save** and you should immediately see a placeholder for your sample in the _Samples_ view. The spinner indicates that the sample is still being imported.
    !["Sample creator filled"](/docs_images/sample_importing.png)

3. When the import is complete you can see some information about your sample by clicking the sample entry in the _Samples_ view.
    !["Sample general detail"](/docs_images/sample_general.png)

4. You can view a quality assessment generated using [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/), by clicking the _Quality_ tab.
    !["Sample general detail"](/docs_images/sample_quality.png)



