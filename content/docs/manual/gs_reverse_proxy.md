---
title: "Reverse Proxy"
type: "manual"
menu:
    manual:
        parent: "Getting Started"
        weight: 50
---

If you are using HTTPS or running Virtool on a public server, we suggest running it behind a reverse proxy server such as [NGINX](https://www.nginx.com/).


# NGINX
<article class="message is-warning is-flowing">
  <div class="message-header">
    Warning
  </div>
  <div class="message-body">
    It is not currently possible to load balance more than one Virtool instance using NGINX or any other load balancer or reverse proxy server.
  </div>
</article>

Because Virtool makes use of Websockets, some advanced configuration of NGINX is required. First, make sure you are running at least version 1.3.13 of NGINX.

We have used the following `nginx.conf` to serve Virtool behind NGINX using Websockets and HTTPS.

```term
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

* you are running the Virtool instance on the same host as NGINX
* the Virtool instance is listening on the default `9950` port
* you are using HTTPS
* you have a fully-qualified domain name

Ensure that SSL is not configured in Virtool. The SSL settings section should look like this:

![](/assets/ssl_settings.png)