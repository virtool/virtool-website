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

[Skewer][skewer] is used to trim sequencing read data in FASTQ format.

1. Download the source code

    ```shell
    wget https://github.com/relipmoc/skewer/archive/0.2.2.tar.gz
    ```

2. Unpack the archive

    ```shell
    tar -xvf 0.2.2.tar.gz
    ```

3. Move into the unpacked directory

    ```shell
    cd skewer-0.2.2
    ```

4. Build the skewer binary using `make`

    ```shell
    make
    ```

5. Move the binary to a directory that is in `PATH` \(eg. /usr/local/bin\)

    ```shell
    sudo mv skewer /usr/local/bin
    ```

6. Ensure skewer is callable

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

[FastQC][fastqc] is used to calculate quality information from Illumina sample libraries in FASTQ format.

1. Download the software

    ```shell
    wget https://www.bioinformatics.babraham.ac.uk/projects/fastqc/fastqc_v0.11.5.zip
    ```

2. Unpack the archive

    ```shell
    unzip fastqc_v0.11.5.zip
    ```

3. Copy the unpacked directory to an installation path such as `/opt`

    ```shell
    sudo cp -rv FastQC /opt
    ```

4. Make the FastQC binary executable

    ```shell
    sudo chmod ugo+x /opt/FastQC/fastqc
    ```

5. Make a symbolic link to the binary in a directory in `PATH` \(eg. `/usr/local/bin`)

    ```shell
    sudo ln -s /opt/FastQC/fastqc /usr/local/bin/fastqc
    ```

6. Verify that FastQC is callable

    ```shell
    fastqc --version
    ```

    You should see the following output:

    ```shell
    FastQC v0.11.5
    ```

# Bowtie2

[Bowtie2][bowtie2] is used to map sample reads to references and subtractions.

1. Download the software.

    ```shell
    wget https://github.com/BenLangmead/bowtie2/releases/download/v2.3.2/bowtie2-2.3.2-legacy-linux-x86_64.zip
    ```

2. Unpack the archive.

    ```shell
    unzip bowtie2-2.3.2-legacy-linux-x86_64.zip
    ```

3. Copy the unpacked directory to an installation path such as `/opt`.

    ```shell
    sudo cp -rv bowtie2-2.3.2-legacy /opt/bowtie2
    ```

4. Make symbolic links for all binaries in a directory in `PATH` \(eg. `/usr/local/bin`\).

    ```shell
    sudo ln -s /opt/bowtie2/bowtie* /usr/local/bin
    ```

5. Verify that bowtie2 is callable.

    ```shell
    bowtie2 --version
    ```

    You should see output similar to the following:

    ```text
    /opt/bowtie2/bowtie2-align-s version 2.3.2
    64-bit
    Built on dde45b53bd81
    Sat May  6 02:22:24 UTC 2017
    Compiler: gcc version 4.1.2 20080704 (Red Hat 4.1.2-55)
    Options: -O3 -m64 -msse2 -funroll-loops -g3 -DPOPCNT_CAPABILITY
    Sizeof {int, long, long long, void*, size_t, off_t}: {4, 8, 8, 8, 8, 8}
    ```

6. Verify that bowtie2-build is callable.

    ```shell
    bowtie2-build --version
    ```

    You should see output similar to the following:

    ```text
    bowtie2-build version 2.3.2
    64-bit
    Built on dde45b53bd81
    Sat May  6 02:22:24 UTC 2017
    Compiler: gcc version 4.1.2 20080704 (Red Hat 4.1.2-55)
    Options: -O3 -m64 -msse2 -funroll-loops -g3 -DPOPCNT_CAPABILITY
    Sizeof {int, long, long long, void*, size_t, off_t}: {4, 8, 8, 8, 8, 8}
    ```

# SPADes

[SPAdes][spades] is used to assemble sample reads into contigs when detecting novel viral sequences.

1. Download the software

    ```shell
    wget https://github.com/ablab/spades/releases/download/v3.11.1/SPAdes-3.11.1-Linux.tar.gz
    ```

2. Unpack the archive

    ```shell
    tar -xvf SPAdes-3.11.1-Linux.tar.gz
    ```

3. Copy the unpacked directory to an installation path such as `/opt`

    ```shell
    sudo cp -rv SPAdes-3.11.1-Linux /opt/spades
    ```

4. Make a symbolic link to the binary in a directory in `PATH` \(eg. `/usr/local/bin`\)

    ```shell
    sudo ln -s /opt/spades/bin/spades.py /usr/local/bin/spades.py
    ```

5. Verify that spades.py is callable

    ```shell
    spades.py --version
    ```

    You should see an output similar to the following:

    ```shell
    SPAdes v3.11.1
    ```

# HMMER

[HMMER][hmmer] is used to scan for protein motifs in open reading frames (ORF) derived from assembled contigs during novel virus detection.

1. Download the software

    ```shell
    wget http://eddylab.org/software/hmmer3/3.1b2/hmmer-3.1b2-linux-intel-x86_64.tar.gz
    ```

2. Unpack the archive

    ```shell
    tar -xvf hmmer-3.1b2-linux-intel-x86_64.tar.gz
    ```

3. Copy the unpack directory to an installation path such as `/opt`

    ```shell
    sudo cp -rv hmmer-3.1b2-linux-intel-x86_64 /opt/hmmer
    ```

4. Make symbolic links to all binaries in a directory in `PATH` \(eg. `/usr/local/bin`\)

    ```shell
    sudo ln -s /opt/hmmer/binaries/* /usr/local/bin
    ```

5. Verify that required HMMER binaries are in `PATH`

    ```shell
    cd ~
    hmmscan -h
    hmmpress -h
    ```

6. Each command should print an output that begins something like this

    ```text
    # hmmpress :: prepare an HMM database for faster hmmscan searches
    # HMMER 3.1b2 (February 2015); http://hmmer.org/
    # Copyright (C) 2015 Howard Hughes Medical Institute.
    # Freely distributed under the GNU General Public License (GPLv3).
    ```

# FLASH

[FLASH][flash] is used to join overlapping Illumina mate pairs in preparation for barcode matching.

1.  Download software

    ```shell
    wget http://ccb.jhu.edu/software/FLASH/FLASH-1.2.11-Linux-x86_64.tar.gz
    ```

2.  Unpack the software archive

    ```shell
     tar -xvf FLASH-1.2.11-Linux-x86_64.tar.gz
    ```

3.  Move the binary to a directory that is in `PATH` \(eg. /usr/local/bin\)

    ```shell
    mv FLASH-1.2.11-Linux-x86_64/flash /usr/local/bin
    ```

4.  Ensure that FLASH is callable

    ```shell
    flash --version
    ```

    You should see the following output:

    ```text
    FLASH v1.2.11

    Copyright (C) 2012 Tanja Magoc
    Copyright (C) 2012, 2013, 2014 Eric Biggers
    License GPLv3+; GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.
    This is free software: you are free to change and redistribute it.
    There is NO WARRANTY, to the extent permitted by law.

    Report bugs to flash.comment@gmail.com or https://sourceforge.net/p/flashpage/bugs
    ```

# AODP

[AODP][aodp] is used to match Illumina amplicon sequencing libraries against barcode target references.

1. Download software

    ```shell
    wget https://bitbucket.org/wenchen_aafc/aodp_v2.0_release/raw/5fcd5d2dfde61cd87ad3c63b8c92babd281fc0dc/aodp-2.5.0.1.tar.gz
    ```

2. Unpack software archive

    ```shell
    tar -xvf aodp-2.5.0.1.tar.gz
    ```

3. Move to the unpacked directory

    ```shell
    cd aodp-2.5.0.1
    ```

4. Configure build

    ```shell
    ./configure

    ```

5. Make build

    ```shell
    make
    ```

6. Move the binary to a directory that is in `PATH` \(eg. /usr/local/bin\)

    ```shell
    mv b/aodp /usr/local/bin/
    ```

7.  Ensure that aodp is callable

    ```shell
    aodp --version
    ```


    You should see the following output:

    ```text
    aodp (Automated Oligonucleotide Design Pipeline) 2.5.0.1

    (C) HER MAJESTY THE QUEEN IN RIGHT OF CANADA (2014-2018)
    (C) Manuel Zahariev mz@alumni.sfu.ca (2000-2008,2014-2018)

    License GPLv3: GNU GPL version 3 <http://gnu.org/licenses/gpl.html>
    This is free software: you are free to change and redistribute it.
    There is NO WARRANTY, to the extent permitted by law.

    author: Manuel Zahariev, mz@alumni.sfu.ca
    ```

[skewer]: https://github.com/relipmoc/skewer
[fastqc]: https://www.bioinformatics.babraham.ac.uk/projects/fastqc
[bowtie2]: http://bowtie-bio.sourceforge.net/bowtie2/index.shtml
[spades]: http://bioinf.spbau.ru/spades
[hmmer]: http://hmmer.org/
[flash]: https://ccb.jhu.edu/software/FLASH/#:~:text=About%20FLASH&text=FLASH%20is%20designed%20to%20merge,to%20merge%20RNA%2Dseq%20data.
[aodp]: https://bitbucket.org/wenchen_aafc/aodp_v2.0_release/src/master
