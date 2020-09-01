---
title: "Configuration"
description: "Learn how to perform advanced configuration of Virtool."
menu:
    manual:
        parent: "Getting Started"
        weight: 50
---

A Virtool process can be configured using command line arguments, a configuration file, or environmental variables.

The order of precedence for resolving option values is:

-   Command line arguments (CLI)
-   Configuration file
-   Environmental variables

# Reference

| Command Line             | Configuration          | Environment               | Description                                            |
| ------------------------ | ---------------------- | ------------------------- | ------------------------------------------------------ |
| `--host`                 | `host`                 | `VT_HOST`                 | The host Virtool should listen on                      |
| `--port`                 | `port`                 | `VT_PORT`                 | The port Virtool should listen on                      |
| `--proxy`                | `proxy`                | `VT_PROXY`                | The address of a proxy server Virtool should use       |
| `--data-path`            | `data_path`            | `VT_DATA_PATH`            | The path to read and write data files to               |
| `--watch-path`           | `watch_path`           | `VT_WATCH_PATH`           | The path to automatically retrieve read files from     |
| `--proc`                 | `proc`                 | `VT_PROC`                 | The processor limit for the Virtool instance           |
| `--mem`                  | `mem`                  | `VT_MEM`                  | The memory limit (GB) for the Virtool instance         |
| `--lg-proc`              | `lg_proc`              | `VT_LG_PROC`              | The number of processors to use for large jobs         |
| `--lg-mem`               | `lg_mem`               | `VT_LG_MEM`               | The amount of memory (GB) to use for large jobs        |
| `--sm-proc`              | `sm_proc`              | `VT_SM_PROC`              | The number of processors to use for small jobs         |
| `--sm-mem`               | `sm_mem`               | `VT_SM_MEM`               | The amount of memory (GB) to use for small jobs        |
| `--db-connection-string` | `db_connection_string` | `VT_DB_CONNECTION_STRING` | The MongoDB connection string for the Virtool database |
| `--db-name`              | `db_name`              | `VT_DB_NAME`              | The name of the MongoDB database to use                |
| `--dev`                  | `dev`                  | `VT_DEV`                  | Run in development mode                                |
| `--force-version`        | `force_version`        | `VT_FORCE_VERSION`        | Force the instance to think it is the passed version   |
| `--no-db-checks`         | `no_db_checks`         | `VT_NO_DB_CHECKS`         | Do not run database checks on start                    |
| `--no-file-manager`      | `no_file_manager`      | `VT_NO_FILE_MANAGER`      | Do not initialize the file manager on start            |
| `--no-job-manager`       | `no_job_manager`       | `VT_NO_JOB_MANAGER`       | Do not initialize the job manager on start             |
| `--no-refreshing`        | `no_refreshing`        | `VT_NO_REFRESHING`        | Do not automatically check for remote resources        |
| `--no-sentry`            | `no_sentry`            | `VT_NO_SENTRY`            | Do not initialize Sentry on start                      |
| `--no-setup`             | `no_setup`             | `VT_NO_SETUP`             | Do not enter first-time setup on start                 |
| `--verbose`              | `verbose`              | `VT_VERBOSE`              | Log debug messages                                     |

# HTTP

The address for the HTTP server can be changed by modifying the host and port number the server listens on.

Virtool must be restarted for these settings to take effect. Make sure the user running the Virtool server has the permissions required to bind the selected port. If you want to listen on port 80, we suggest setting up a [reverse proxy server](/docs/manual/start/reverse_proxy) rather than running Virtool as a superuser.

{{< option host >}}

The host Virtool should listen on.

Examples are `localhost`, `192.169.1.32`, or `https://example.virtool.ca`.

{{< option port >}}

The port Virtool should listen on.

{{< option proxy >}}

A proxy server that Virtool should make requests through. **HTTPS proxies are not supported**

## Examples

### CLI

```bash
# Running a Virtool server that listens at 192.168.1.50:9801.
python run.py --host "192.168.1.50" --port 9801

# Using a Squid (http://www.squid-cache.org/) caching proxy.
python run.py --proxy "http://192.168.20.2:3128"

# Using a Squid (http://www.squid-cache.org/) caching proxy with authentication.
python run.py --proxy "http://virtool:foobar@192.168.20.2:3128"

```

### Configuration

```json
{
    "host": "192.168.1.50",
    "port": 9801,
    "proxy": "http://virtool:foobar@192.168.20.2:3128"
}
```

### Environmental Variable

```bash
# Running a Virtool server that listens at 192.168.1.50:9801.
export VT_HOST="192.168.1.50"
export VT_PORT=9801

# Using a Squid (http://www.squid-cache.org/) caching proxy with authentication.
export VT_PROXY="http://virtool:foobar@192.168.20.2:3128"
```

# Paths

{{< option data_path >}}

Virtool stores application data here. This includes samples and analyses, reference indexes, subtractions, log files, and uploaded files.

{{< option watch_path >}}

Virtool will automatically retrieve files dropped here and make them available for sample creation. Files are deleted from the watch path once they are pulled into the file manager.

## Examples

### CLI

```bash
# Running a Virtool server that stores application data at /mnt/array/virtool and retrive sample files from /home/igb/Watch
python run.py --data-path "/mnt/array/virtool" --watch-path "/home/igb/Watch"

```

### JSON

```json
{
    "data_path": "/mnt/array/virtool",
    "watch_path": "/home/igb/Watch"
}
```

### Environmental Variables

```bash
# Environmental variables to store application data at /mnt/array/virtool and retrieve sample files from /home/igb/Watch.
export VT_DATA_PATH="/mnt/array/virtool"
export VT_WATCH_PATH="/home/igb/Watch"

```

# Resources

Configure resource limits for the instance.

{{< option proc >}}

The maximum number of processors the instance may use for running jobs.

{{< option mem >}}

The maximum amount of memory in gigabytes (GB) the instance may use for running jobs.

{{< option lg_proc >}}

The number of processors that will be reserved by a large job.

Large jobs include _Pathoscope_ and _NuVs_.

{{< option lg_mem >}}

The number of processors that will be reserved by a large job.

Large jobs include _Pathoscope_ and _NuVs_.

{{< option sm_proc >}}

The number of processors that will be reserved by a small job.

Small jobs include _Build Index_, _Create Sample_ and _Create Subtraction_.

{{< option sm_mem >}}

The amount of memory in GB that will be reserved by a small job.

Small jobs include _Build Index_, _Create Sample_ and _Create Subtraction_.

## Examples

### CLI

```bash
# Running a Virtool server with custom resource allocation.
python run.py --proc 12 --mem 24 --lg-proc 6 --lg-mem 12 --sm-proc 2 --sm-proc 4
```

### JSON

```json
{
    "proc": 12,
    "mem": 24,
    "lg_proc": 6,
    "lg_mem": 12,
    "sm_proc": 2,
    "sm_mem": 4
}
```

### Environmental Variables

```bash
# Set custom resource allocation using environmental variables.
export VT_PROC=12
export VT_MEM=24
export VT_LG_PROC=6
export VT_LG_MEM=12
export VT_SM_PROC=2
export VT_SM_MEM=4
```

# Database

Configure the database connection for the instance.

{{< option db_connection_string >}}

The [MongoDB connection string](https://docs.mongodb.com/manual/reference/connection-string/) for connecting to the Virtool database.

{{< option db_name >}}

The name of the MongoDB database to use once connected to the server.

# Other

{{< option dev >}}

Run the server in development mode

## Examples

### CLI

```bash
# Running a Virtool server in development mode.
python run.py --dev

# Running a Virtool server with version set to v2.2.2.
python run.py --force-version v2.2.2
```

### JSON

```json
{
    "dev": true,
    "force_version": "v2.2.2"
}
```

### Environmental Variables

```bash
# Set custom resource allocation using environmental variables.
export VT_PROC=12
export VT_MEM=24
export VT_LG_PROC=6
export VT_LG_MEM=12
export VT_SM_PROC=2
export VT_SM_MEM=4
```

# Reverse Proxy

If you are using HTTPS or running Virtool on a public server, we suggest running it behind a reverse proxy server such as [NGINX](https://www.nginx.com/).

## NGINX

{{< note color="yellow" >}}
It is not currently possible to load balance more than one Virtool instance using NGINX or any other load balancer or reverse proxy server.
{{< /note >}}

Because Virtool makes use of Websockets, some advanced configuration of NGINX is required. First, make sure you are running at least version 1.3.13 of NGINX.

We have used the following `nginx.conf` to serve Virtool behind NGINX using Websockets and HTTPS.

```shell
user www-data;
worker_processes 1;

error_log /var/log/nginx/error.log;
pid /var/run/nginx.pid;

events {
   worker_connections 768;
   use epoll;
}

http {
   upstream frontends {
      server 127.0.0.1:9950;
   }

   upstream websockets {
      server 127.0.0.1:9950;
   }

   include /etc/nginx/mime.types;
   default_type application/octet-stream;

   access_log /var/log/nginx/access.log;

   keepalive_timeout 65;
   proxy_read_timeout 200;
   sendfile on;
   tcp_nopush on;
   tcp_nodelay on;

   gzip on;
   gzip_min_length 1000;
   gzip_proxied any;
   gzip_types text/plain text/html text/css text/xml application/x-javascript application/xml application/atom+xml text/javascript;

   proxy_next_upstream_error;

   # This entry is for redirecting non-HTTPS.
   server {
      listen 80 default_server;
      listen [::]:80 default-_server;

      # Replace FQDN with your fully qualified domain name
      server_name <FQDN>

      # Replace FQDN with your fully qualified domain name.
      return 301 https://<FQDN>
   }

   # This entry is for serving HTTPS traffic.
   server {
      # Listen at default HTTPS port.
      listen 443 ssl;

      # Allow uploads up to 5 GB in size. This is required for uploading read files etc.
      client_max_body_size 5000M;

      # Replace DOMAIN_NAME with your domain name (eg. virtool.ca).
      server_name <DOMAIN NAME>;

      # Security configuration.
      ssl_certificate <SSL certificate path>;
      ssl_certificatte_key <SSL key path>;
      ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

      # Forward regular HTTPS traffic.
      location / {
         proxy_pass_header Server;
         proxy_set_header Host $http_host;
         proxy_redirect off;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Scheme $scheme;
         proxy_pass http://frontends;
      }

      # Forward Websocket traffic.
      location /ws {
         proxy_pass http://websocket;
         proxy_http_version 1.1;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection "upgrade";
      }
   }
}
```

This configuration assumes that:

-   you are running the Virtool instance on the same host as NGINX
-   the Virtool instance is listening on the default `9950` port
-   you are using HTTPS
-   you have a fully-qualified domain name
