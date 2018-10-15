---
title: "Known Issues"
type: "manual"
menu:
  manual:
    parent: "Getting Started"
    weight: 50
---

# Inotify exception

## Problem

You see an fatal error message similar to the following when starting Virtool.

```
inotify.calls.InotifyError: Call failed (should not be -1): (-1) ERRNO=(0)
```

## Solution

Virtool uses inotify to keep track of changes to files in its data and watch paths.

This error indicates that the system inotify watch limit is too low. You can increase it.

1. Open `/etc/sysctl.conf`

2. Add or update the following configuration line:

   ```
   fs.inotify.max_user_watches = 524288
   ```

3. Save the changes using the following command
   ```
   sudo sysctl -p --system
   ```

# Missing `libtbb.so.2`

## Problem

You see an error similar to the following:

```
bowtie-inspect: error while loading shared libraries: libtbb.so.2: cannot open shared
object file: No such file or directory
```

## Solution

Install the missing package. If you are using our recommended operating system Debian, issue the following command in the terminal.

```
apt-get install libtbb-dev
```

If you are using a different operating system consult its documentation for information on installing packages.

# No history item description

## Problem

Some history items in the web interface have the description "No Description".

## Solution

There is no solution for now. A future release will repair these legacy history records to show the correct description.
