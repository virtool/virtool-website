---
title: "Known Issues"
description: "Fix issues encountered by other users and developers."
menu:
  manual:
    parent: "Getting Started"
    weight: 60
---

# `InotifyError` exception

## Problem

You see a fatal error message similar to the following when starting Virtool:

```shell
inotify.calls.InotifyError: Call failed (should not be -1): (-1) ERRNO=(0)
```

## Solution

Virtool uses inotify to keep track of changes to files in its data and watch paths.

This error indicates that the system inotify watch limit is too low. You can increase it.

Open `/etc/sysctl.conf` and add or update the following configuration line:

```shell  
fs.inotify.max_user_watches = 524288
```

Save the changes using the following command:

```shell
sudo sysctl -p --system
```

