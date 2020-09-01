---
title: "Create a Sample"
description: "Create a sample from an Illumina FASTQ file."
menu:
    manual:
        parent: "Tutorials"
        weight: 40
---

# Upload a FASTQ File

1. Go to **Samples** view via the main navigation bar

    ![Empty Sample Manager](empty.png)

2. Click **Files** in the left sidebar to go to the sample read file manager

    ![Sample File Manager](files.png)

3. Upload a FASTQ read file

    {{< video "upload.mp4" >}}

4. Return to the **Samples** view

    ![Empty Sample Manager](empty.png)

5. Click the {{< button icon="plus-square" >}} button to open the sample creation dialog

    The file you uploaded should now be available in file list.

    ![Sample creation dialog](create.png)

# Create a Sample

1. Click the {{< button icon="plus-square" >}} button to open the sample creation dialog

    ![Sample creation dialog](create.png)

2. Fill out the fields in the sample creator

    Only the _sample name_, _default subtraction_, and one or two read files are required.

    ![Sample Creator Filled](create_filled.png)

3. Click the {{< button icon="save" label="Save" >}} button

    You should immediately see a placeholder for your sample in the **Samples** view. The spinner indicates that the sample is still being created.

    ![Sample Creator Filled](creating.png)

    When the sample creation process is finished your sample will look something like this:

    ![Sample Creation Complete](ready.png)

4. Click on the sample when it is ready

    You will be able to see some information about your sample that was calculated during the creation process.

    ![Sample General Information](detail.png)

5. Click the Quality tab

    This will display a quality assessment for the sample generated using [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/).

    ![Sample Quality](quality.png)
