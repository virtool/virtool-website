---
title: "Setup"
type: "manual"
menu:
    manual:
        parent: "Getting Started"
        weight: 30
---

# Run

After installing Virtool, the server can be started by issuing the following command in the Virtool install directory.

```shell
./run
```
Use ``./run --help`` to see an overview of additional command line arguments Virtool can accept.

By default, the server listens at ``localhost:9950``. When you visit this address for the first time, you will be confronted with a one-time setup interface. This will allow you to configure the essential settings required for Virtool to run.

!["Setup page overview"](/docs_images/setup_overview.png)

As each section is completed, its _Required_ label will change to _Ready_. Once all sections are ready the _Save and Reload_ button can be clicked, restarting the server and presenting the login interface to the user.


# Connect to MongoDB {#mongodb}

MongoDB must be [installed and running](setup.md#MongoDB) before you can use Virtool. Once MongoDB is ready, you can configure a connection to it using the following form.

Error messages will appear if the connection fails or the provided database name already exists.

!["Setup MongoDB connection](/docs_images/setup_connect_mongodb.png)

> #### info::Note
> More advanced MongoDB configurations, including improved security features, will be
> available in future releases.


# Add First User {#first_user}

An administrative user account must be created during setup. After setup, this account can be used to add more user accounts and populate Virtool with data. The first user account can be added using the following form.

> #### danger::Important
> We strongly recommend **not** making this account a generic adminstrative account. Doing so defeats Virtool's built-in auditing, which is designed in accordance with [ISO 17025:2005](https://www.iso.org/standard/39883.html). Each account should correspond to an individual user.

![](/docs_images/setup_first_user.png)


# Set Data Path {#data_path}

The data path is where Virtool stores bioinformatic data including uploaded Illumina libraries, imported sample data, and reference indexes. The data path should be a storage location that offers good speed, capacity, and redundancy.

Paths beginning with ``/`` will be assumed to be absolute paths. All other paths will be interpreted relative to the Virtool installation directory.

![](/docs_images/setup_path_data.png)

By default the data path will be set to ``data`` and will be created in the Virtool installation directory. This configuration should only be used for testing purposes.

Errors will occur if:

- the executing user does not have permission to write to the data path
- a multi-level directory tree would have to be created to satify the data path setting
- the data path already exists and is not empty

# Set Watch Path {#watch_path}

The primary method for making Illumina FASTQ files available to Virtool for sample creation is by uploading them through the web interface.

It is also possible to set a path accessible to the server that will be watched for new read files. Any FASTQ files dropped in this watch directory will be pulled into Virtool and made available for sample creation.

> #### danger::Important
> Files dropped in the watch directory will be removed once they have been pulled into Virtool. Do not unintentionally place your only copy of a sample FASTQ file in the watch path.

![](/docs_images/setup_path_watch.png)


# Save and Restart

Once all setup sections have been completed, the _Save and Restart_ button will be be enabled. Clicking it will create and populate the data and watch directories, create a first user, and write a configuration file called ``settings.json`` to the Virtool installation directory.

The server will then restart and you can login for the first time.











