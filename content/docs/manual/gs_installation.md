---
title: "Installation"
description: "Download and install Virtool."
menu:
  manual:
    parent: "Getting Started"
    weight: 10
---

# System Requirements

We recommend the following minimum specifications for running a Virtool server:

- Linux operating system
- 32 GB RAM
- 1 TB fast storage
- 1 Gb network connection

Higher CPU clock speeds and core counts will allow more operations to be run in parallel.

# Browsers

Virtool works best in modern browsers including Chrome, Firefox, Safari, and Edge. **Internet Explorer is not supported**.

# Installing the Server

Download the latest Virtool release from the [Virtool website](http://www.virtool.ca "Virtool Website") and unpack the downloaded archive.

```term
tar -xvf virtool.tar.gz
```

Move the unpacked directory to your installation location:

```term
mv virtool /opt
```

Run in the background using `nohup`.

```term
nohup ./run &
```

{{% note %}}
We suggest running Virtool as a dedicated user.
{{% /note %}}

# MongoDB

Virtool uses MongoDB v3.6.0+ as a database service. You will have to get MongoDB running before starting Virtool. We highly recommend installing and updating MongoDB through your Linux package manager.

The MongoDB documentation provides step-by-step instructions for installing MongoDB on common Linux distributions:

- [Install on Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/>)
- [Install on Debian](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/>)
- [Install on SUSE](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-suse/>)
- [Install on Red Hat](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/>)

Once you have installed MongoDB, ensure it is running by issuing the following command:

```term
sudo service mongod status
```

You will receive output similar to the following if MongoDB is running:

```term
● mongod.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/etc/systemd/system/mongod.service; disabled; vendor preset: enabled)
   Active: active (running) since Fri 2017-04-21 15:55:59 PDT; 2s ago
 Main PID: 11844 (mongod)
    Tasks: 14
   Memory: 31.1M
      CPU: 95ms
   CGroup: /system.slice/mongod.service
           └─11844 /usr/bin/mongod --quiet --config /etc/mongod.conf
```

# External Software

Virtool relies on a number of common bioinformatics programs. These should be available in your `PATH` so Virtool can find them. You will encounter errors if these programs are not available.

| Name                                                               | Version | Purpose                                          |
| :----------------------------------------------------------------- | :------ | :----------------------------------------------- |
| [Skewer](https://github.com/relipmoc/skewer)                       | 0.2.2   | Read trimming and quality control                |
| [FastQC](http://www.bioinformatics.babraham.ac.uk/projects/fastqc) | v0.11.5 | Calculating quality metrics for sample libraries |
| [Bowtie2](http://bowtie-bio.sourceforge.net/bowtie2/index.shtml)   | 2.3.2   | High-throughput read alignment                   |
| [SPAdes](http://bioinf.spbau.ru/spades)                            | v3.8.1  | De novo assembly                                 |
| [HMMER](http://hmmer.org/)                                         | 3.1b2   | Motif detection                                  |
