---
title: "Create a Sample"
description: "Create a sample from an Illumina FASTQ file."
menu:
  manual:
    parent: "Tutorials"
    weight: 40
---

# Uploading a FASTQ File

Go the _Samples_ view via the main navigation bar.

![Empty Sample Manager](empty.png)

Click **Files** in the left sidebar to go to the sample read file manager.

![Sample File Manager](files.png)

Upload a FASTQ read file.

![Upload Read File](upload.gif)

In the _Samples_ view, click <i class="fa fa-plus-square"></i> to open the sample creator. The file you uploaded should now be available in file list.

![Sample Creator](create.png)

# Creating a Sample

Fill out the fields in the sample creator. Only the sample name, subtraction host, and one or two read files are required.

![Sample Creator Filled](filled.png)

Click <i class="fas fa-save"></i> **Save** and you should immediately see a placeholder for your sample in the _Samples_ view. The spinner indicates that the sample
is still being created.

![Sample Creator Filled](creating.png)

When the sample creation process is finished your sample will look something like this:

![Sample Creation Complete](ready.png)

When the sample is ready, you can see some information about your sample by clicking the sample entry in the _Samples_ view.

![Sample General Information](general.png)

You can view a quality assessment generated using [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/), by clicking the _Quality_ tab.

![Sample Quality](quality.png)
