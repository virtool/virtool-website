---
title: "Dependencies"
description: "Install the bioinformatic tools Virtool requires."
menu:
  manual:
    parent: "Getting Started"
    weight: 20
---

We provide **opinionated** instructions for installing the external software required by Virtool.

# Skewer

Download the source code.

```shell
wget https://github.com/relipmoc/skewer/archive/0.2.2.tar.gz
```

Unpack the archive.

```shell
tar -xvf 0.2.2.tar.gz
```

Move into the unpacked directory.

```shell
cd skewer-0.2.2
```

Build the skewer binary using:

```shell
make
```

Move the binary to a directory that is in `PATH` \(eg. /usr/local/bin\).

```shell
sudo mv skewer /usr/local/bin
```

Ensure skewer is callable.

```shell
skewer
```

You should see the following output:

```shell
skewer (0.2.2): No input file specified
Usage: skewer [options] <file> [file2]
Try `skewer --help' for more information.
```

# FastQC

Download the software.

```shell
wget https://www.bioinformatics.babraham.ac.uk/projects/fastqc/fastqc_v0.11.5.zip
```

Unpack the archive.

```shell
unzip fastqc_v0.11.5.zip
```

Copy the unpacked directory to an installation path such as `/opt`.

```shell
sudo cp -rv FastQC /opt
```

Make the FastQC binary executable.

```shell
sudo chmod ugo+x /opt/FastQC/fastqc
```

Make a symbolic link to the binary in a directory in `PATH` \(eg. `/usr/local/bin`).

```shell
sudo ln -s /opt/FastQC/fastqc /usr/local/bin/fastqc
```

Verify that FastQC is callable.

```shell
fastqc --version
```

You should see the following output:

```shell
FastQC v0.11.5
```

# Bowtie2

Download the software.

```shell
wget https://github.com/BenLangmead/bowtie2/releases/download/v2.3.2/bowtie2-2.3.2-legacy-linux-x86_64.zip
```

Unpack the archive.

```shell
unzip bowtie2-2.3.2-legacy-linux-x86_64.zip
```

Copy the unpacked directory to an installation path such as `/opt`.

```shell
sudo cp -rv bowtie2-2.3.2-legacy /opt/bowtie2
```

Make symbolic links for all binaries in a directory in `PATH` \(eg. `/usr/local/bin`\).

```shell
sudo ln -s /opt/bowtie2/bowtie* /usr/local/bin
```

Verify that bowtie2 is callable.

```shell
bowtie2 --version
```

You should see output similar to the following:

```shell
/opt/bowtie2/bowtie2-align-s version 2.3.2
64-bit
Built on dde45b53bd81
Sat May  6 02:22:24 UTC 2017
Compiler: gcc version 4.1.2 20080704 (Red Hat 4.1.2-55)
Options: -O3 -m64 -msse2 -funroll-loops -g3 -DPOPCNT_CAPABILITY
Sizeof {int, long, long long, void*, size_t, off_t}: {4, 8, 8, 8, 8, 8}
```

Verify that bowtie2-build is callable.

```shell
bowtie2-build --version
```

You should see output similar to the following:

```shell
bowtie2-build version 2.3.2
64-bit
Built on dde45b53bd81
Sat May  6 02:22:24 UTC 2017
Compiler: gcc version 4.1.2 20080704 (Red Hat 4.1.2-55)
Options: -O3 -m64 -msse2 -funroll-loops -g3 -DPOPCNT_CAPABILITY
Sizeof {int, long, long long, void*, size_t, off_t}: {4, 8, 8, 8, 8, 8}
```

# SPADes

Download the software.

```shell
wget http://spades.bioinf.spbau.ru/release3.11.1/SPAdes-3.11.1-Linux.tar.gz
```

Unpack the archive.

```shell
tar -xvf SPAdes-3.11.1-Linux.tar.gz
```

Copy the unpacked directory to an installation path such as `/opt`.

```shell
sudo cp -rv SPAdes-3.11.1-Linux /opt/spades
```

Make a symbolic link to the binary in a directory in `PATH` \(eg. `/usr/local/bin`\).

```shell
sudo ln -s /opt/spades/bin/spades.py /usr/local/bin/spades.py
```

Verify that spades.py is callable.

```shell
spades.py --version
```

You should see an output similar to the following:

```shell
SPAdes v3.11.1
```

# HMMER

Download the software.

```shell
wget http://eddylab.org/software/hmmer3/3.1b2/hmmer-3.1b2-linux-intel-x86_64.tar.gz
```

Unpack the archive.

```shell
tar -xvf hmmer-3.1b2-linux-intel-x86_64.tar.gz
```

Copy the unpack directory to an installation path such as `/opt`.

```shell
sudo cp -rv hmmer-3.1b2-linux-intel-x86_64 /opt/hmmer
```

Make symbolic links to all binaries in a directory in `PATH` \(eg. `/usr/local/bin`\).

```shell
sudo ln -s /opt/hmmer/binaries/* /usr/local/bin
```

Verify that required HMMER binaries are in `PATH`.

```shell
cd ~
hmmscan -h
hmmpress -h
```

Each command should print an output that begins something like this

```shell
# hmmpress :: prepare an HMM database for faster hmmscan searches
# HMMER 3.1b2 (February 2015); http://hmmer.org/
# Copyright (C) 2015 Howard Hughes Medical Institute.
# Freely distributed under the GNU General Public License (GPLv3).
```
