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

-   Linux operating system
-   32 GB RAM
-   1 TB fast storage
-   1 Gb network connection

Higher CPU clock speeds and core counts will allow more operations to be run in parallel.

# Browsers

Virtool works best in modern browsers including Chrome, Firefox, Safari, and Edge. **Internet Explorer is not supported**.

# Install the Server

1. Download the latest Virtool release from the [Virtool website](http://www.virtool.ca "Virtool Website") and unpack the downloaded archive

    ```shell
    tar -xvf virtool.tar.gz
    ```

2. Move the unpacked directory to your installation location

    ```shell
    mv virtool /opt
    ```

3. Start Virtool by executing the `run` file

    ```shell
    ./run
    ```

# Run as a Service

Virtool can be configured to run as a service on your Linux host using `systemd`. These instructions make the following assumptions:

-   You run Virtool using a dedicated user called `virtool`.
-   Virtool is installed at `/home/virtool/app`.

1. Create a new service unit file for Virtool at `/etc/systemd/system/virtoold.service`

    This service configuration ensures that Virtool doesn't start until `mongod` and networking services have started.

    {{< code_file "virtoold.service" >}}

    ```text
    [Unit]
    Description=A application server for NGS-based virus diagnostics.
    Documentation=https://www.virtool.ca/docs
    Requires=mongod.service network.target
    After=mongod.service network.target

    [Service]
    Type=simple
    User=virtool
    WorkingDirectory=/home/virtool/app
    ExecStart=/home/virtool/app/run

    [Install]
    WantedBy=mongod.service network.target mnt-array0.mount
    ```

2. Reload the `systemd` configuration

    ```shell
    sudo systemctl daemon-reload
    ```

## Start the Service

The new Virtool service can be started using `systemd`.

1. Issue the following command:

    ```shell
    sudo systemctl start virtoold.service
    ```

2. Check if Virtool is running

    ```shell
    sudo systemctl status virtoold.service
    ```

    The service status should look something like this if Virtool is running:

    ```text
    ● virtoold.service - A application server for NGS-based virus diagnostics.
      Loaded: loaded (/etc/systemd/system/virtoold.service; enabled; vendor preset: enabled)
      Active: active (running) since Fri 2020-01-31 09:11:50 PST; 1h 6min ago
        Docs: https://www.virtool.ca/docs
    Main PID: 1523 (run)
        Tasks: 203 (limit: 7372)
      CGroup: /system.slice/virtoold.service
              ├─ 1523 /home/virtool/app/run
              ├─29957 /home/virtool/app/run
              ├─30106 python /usr/local/bin/spades.py -t 14 -m 60 -s /mnt/array0/virtool/data/samples/uaofeeaw/analysis/nqy9xo0n/unmapped_hosts.fq -o /tmp/tmplojfnvz9 -k 21,33,55,75
              ├─32037 /home/virtool/app/run
              └─32194 /opt/spades/bin/spades /tmp/tmplojfnvz9/K21/configs/config.info

    ```

## Stop the Service

The Virtool service can be stopped using `systemd`.

1. Issue the following command:

    ```shell
    sudo systemctl stop virtoold.service
    ```

2. Check that the Virtool service has stopped using the `status` subcommand

    ```shell
    sudo systemctl status virtoold.service
    ```

## Run on System Start

The service file provided above allows Virtool to be started automatically on system start.

1. Enable the `virtoold.service` to make it start when the system is initializing

    ```shell
    sudo systemctl enable virtoold.service
    ```

2. This can be undone by disabling the service

    ```shell
    sudo systemctl disable virtoold.service
    ```

# External Software

Virtool relies on a number of common bioinformatics programs. These should be available in your `PATH` so Virtool can find them. You will encounter errors if these programs are not available.

| Name               | Version | Purpose                                          |
| :----------------- | :------ | :----------------------------------------------- |
| [Skewer][skewer]   | 0.2.2   | Read trimming and quality control                |
| [FastQC][fastqc]   | v0.11.5 | Calculating quality metrics for sample libraries |
| [Bowtie2][bowtie2] | 2.3.2   | High-throughput read alignment                   |
| [SPAdes][spades]   | v3.8.1  | De novo assembly                                 |
| [HMMER][hmmer]     | 3.1b2   | Motif detection                                  |
| [FLASH][flash]     | 3.1b2   | Motif detection                                  |
| [AODP][aodp]       | 2.5.0.1 | Motif detection                                  |

[skewer]: https://github.com/relipmoc/skewer
[fastqc]: http://bowtie-bio.sourceforge.net/bowtie2/index.shtml
[bowtie2]: http://bowtie-bio.sourceforge.net/bowtie2/index.shtml
[spades]: http://bioinf.spbau.ru/spades
[hmmer]: http://hmmer.org/
[fastqc]: http://www.bioinformatics.babraham.ac.uk/projects/fastqc
[flash]: https://ccb.jhu.edu/software/FLASH/#:~:text=About%20FLASH&text=FLASH%20is%20designed%20to%20merge,to%20merge%20RNA%2Dseq%20data.
[aodp]: https://bitbucket.org/wenchen_aafc/aodp_v2.0_release/src/master
