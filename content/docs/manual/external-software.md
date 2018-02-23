---
title: "Utilities"
type: "manual"
menu:
    manual:
        parent: "Getting Started"
        weight: 20
---

We provide **opinionated** instructions for installing the external software required by Virtool.

# Skewer {#skewer}

1. Download the source code
   ```
   wget https://github.com/relipmoc/skewer/archive/0.2.2.tar.gz
   ```

2. Unpack the archive
   ```
   tar -xvf 0.2.2.tar.gz
   ```

3. Move into the unpacked directory
   ```
   cd skewer-0.2.2
   ```

4. Build the skewer binary using
   ```
   make
   ```

5. Move the binary to a directory that is in `PATH` \(eg. /usr/local/bin\)
   ```
   sudo mv skewer /usr/local/bin
   ```

6. Ensure skewer is callable
   ```
   cd ~
   skewer
   ```

7. You should see the following output:   
   ```
   skewer (0.2.2): No input file specified   
   Usage: skewer [options] <file> [file2]
   Try `skewer --help' for more information.
   ```
   
# FastQC {#fastqc}

1. Download the software
   ```
   wget https://www.bioinformatics.babraham.ac.uk/projects/fastqc/fastqc_v0.11.5.zip
   ```

2. Unpack the archive
   ```
   unzip fastqc_v0.11.5.zip
   ```

3. Copy the unpacked directory to an installation path such as /opt
   ```
   sudo cp -rv FastQC /opt
   ```

4. Make the FastQC binary executable.
   ```
   sudo chmod ugo+x /opt/FastQC/fastqc
   ```

5. Make a symbolic link to the binary in a directory in `PATH` \(eg. /usr/local/bin\)
   ```
   cd /usr/local/bin
   sudo ln -s /opt/FastQC/fastqc
   ```

6. Verify that FastQC is callable
   ```
   cd ~
   fastqc --version
   ```

7. You should see the following output:
   ```
   FastQC v0.11.5
   ```

# Bowtie2 {#bowtie2}

1. Download the software
   ```
   wget https://github.com/BenLangmead/bowtie2/releases/download/v2.3.2/bowtie2-2.3.2-legacy-linux-x86_64.zip
   ```

2. Unpack the archive
   ```
   unzip bowtie2-2.3.2-legacy-linux-x86_64.zip
   ```

3. Copy the unpacked directory to an installation path such as /opt
   ```
   sudo cp -rv bowtie2-2.3.2-legacy /opt/bowtie2
   ```

4. Make symbolic links for all binaries in a directory in `PATH` \(eg. /usr/local/bin\)
   ```
   cd /usr/local/bin
   for FILE in /opt/bowtie2/bowtie*; do sudo ln -s $FILE; done
   ```

5. Verify that bowtie2 is callable
   ```
   cd ~
   bowtie2 --version
   ```

6. You should see the following output:
   ```
   /opt/bowtie2/bowtie2-align-s version 2.3.2
   64-bit
   Built on dde45b53bd81
   Sat May  6 02:22:24 UTC 2017
   Compiler: gcc version 4.1.2 20080704 (Red Hat 4.1.2-55)
   Options: -O3 -m64 -msse2 -funroll-loops -g3 -DPOPCNT_CAPABILITY
   Sizeof {int, long, long long, void*, size_t, off_t}: {4, 8, 8, 8, 8, 8}
   ```

7. Verify that bowtie2-build is callable
   ```
   cd ~
   bowtie2-build --version
   ```

8. You should see the following output:
   ```
   bowtie2-build version 2.3.2
   64-bit
   Built on dde45b53bd81
   Sat May  6 02:22:24 UTC 2017
   Compiler: gcc version 4.1.2 20080704 (Red Hat 4.1.2-55)
   Options: -O3 -m64 -msse2 -funroll-loops -g3 -DPOPCNT_CAPABILITY
   Sizeof {int, long, long long, void*, size_t, off_t}: {4, 8, 8, 8, 8, 8}
   ```

# SPADes {#spades}

1. Download the software
   ```
   wget http://spades.bioinf.spbau.ru/release3.11.1/SPAdes-3.11.1-Linux.tar.gz
   ```

2. Unpack the archive
   ```
   tar -xvf SPAdes-3.11.1-Linux.tar.gz
   ```

3. Copy the unpacked directory to an installation path such as /opt
   ```
   sudo cp -rv SPAdes-3.11.1-Linux /opt/spades
   ```

4. Make a symbolic link to the binary in a directory in `PATH` \(eg. /usr/local/bin\)
   ```
   cd /usr/local/bin
   sudo ln -s /opt/spades/bin/spades.py
   ```

5. Verify that spades.py is callable
   ```
   cd ~
   spades.py --version
   ```

6. You should see the following output:
   ```
   SPAdes v3.11.1
   ```

# HMMER

1. Download the software
   ```
   wget http://eddylab.org/software/hmmer3/3.1b2/hmmer-3.1b2-linux-intel-x86_64.tar.gz
   ```

2. Unpack the archive
   ```
   tar -xvf hmmer-3.1b2-linux-intel-x86_64.tar.gz
   ```

3. Copy the unpack directory to an installation path such as `/opt`
   ```
   sudo cp -rv hmmer-3.1b2-linux-intel-x86_64 /opt/hmmer
   ```

4. Make symbolic links to all binaries in a directory in `PATH` \(eg. /usr/local/bin\)
   ```
   cd /usr/local/bin
   for FILE in /opt/hmmer/binaries/*; do sudo ln -s $FILE; done
   ```

5. Verify that required HMMER binaries are in `PATH`.
   ```
   cd ~
   hmmscan -h
   hmmpress -h
   ```

6. Each command should print output that begins something like this
   ```
   # hmmpress :: prepare an HMM database for faster hmmscan searches
   # HMMER 3.1b2 (February 2015); http://hmmer.org/
   # Copyright (C) 2015 Howard Hughes Medical Institute.
   # Freely distributed under the GNU General Public License (GPLv3).
   ```
