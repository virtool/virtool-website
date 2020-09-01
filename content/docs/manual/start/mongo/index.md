---
title: "MongoDB"
description: "Install and upgrade MongoDB."
menu:
    manual:
        parent: "Getting Started"
        weight: 30
---

# Install MongoDB

Virtool uses MongoDB v3.6.0+ as a database service. You will have to get MongoDB running before starting Virtool. We highly recommend installing and updating MongoDB through your Linux package manager.

1. Install the MongoDB software

    The MongoDB documentation provides step-by-step instructions for installing MongoDB on common Linux distributions:

    - [Install on Ubuntu](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-ubuntu)
    - [Install on Debian](https://docs.mongodb.com/v3.6/manual/tutorial/install-mongodb-on-debian)
    - [Install on SUSE](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-suse)
    - [Install on Red Hat](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-red-hat)

2. Once you have installed MongoDB, ensure it is running by issuing the following command:

    ```shell
    sudo systemctl status mongod.service
    ```

    You will receive an output similar to the following if MongoDB is running:

    ```text
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

# Upgrade MongoDB

In future versions of Virtool, an upgrade to MongoDB may be required for continued compatibility. This is a simple process for users experienced with command line usage and basic administration.

## Upgrade MongoDB 3.4 to 3.6 {#mongo_3_6_0}

{{< note color="red" >}}
**MongoDB 3.6.0 or newer is required in Virtool 4.0.0**

-   Virtool will not start if it detects that the configured database does not meet this requirement
-   Virtool versions prior to 4.0.0 are not compatible with MongoDB 4.0.0
    {{</ note >}}

1. Backup the Database

    First, backup your database using the following command (assuming your database is called `virtool`). This will dump the entire database to a folder that can later be restored if necessary.

    ```shell
    mongodump -d virtool
    ```

2. Check Compatibility Version

    Open a Mongo shell:

    ```shell
    mongo
    ```

    In the shell, check the current `featureCompatibilityVersion` value:

    ```js
    db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 });
    ```

    The response should contain the current version compatibility information:

    ```js
    // Nothing needs to be done in this case.
    { "featureCompatibilityVersion" : { "version" : "3.4" }, "ok" : 1 }

    // Feature compatibility must be set to 3.4 in this case.
    { "featureCompatibilityVersion" : { "version" : "3.2" }, "ok" : 1 }
    ```

3. Update Compatibility Version

    If the `version` value is not `3.4`, the compatibility version need to be updated:

    ```js
    db.adminCommand({ setFeatureCompatibilityVersion: "3.4" });
    ```

    The `featureCompatibility` value should now be set to `3.4`. Check using:

    ```js
    db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 });
    ```

    The response should have the value set to `3.4`.

    ```js
    { "featureCompatibilityVersion" : { "version" : "3.4" }, "ok" : 1 }
    ```

4. Update Database Software

    Install MongoDB 3.6 according to the instructions from MongoDB:

    - [Install on Ubuntu](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-ubuntu)
    - [Install on Debian](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-debian)
    - [Install on SUSE](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-suse)
    - [Install on Red Hat](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-red-hat)

5. Update Compatibility Version

    The `featureCompatibilityVersion` now needs to be set to `3.6`. This process is the same as in **step 2** except the value is being set to `3. 6` instead of `3.4`.

    Open the Mongo shell and set the compatibility version:

    ```js
    db.adminCommand({ setFeatureCompatibilityVersion: "3.6" });
    ```

    The `featureCompatibility` value should now be set to `3.6`. Check using:

    ```js
    db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 });
    ```

    The response should show the `version` value set to `3.6`.

    ```js
    { "featureCompatibilityVersion" : { "version" : "3.6" }, "ok" : 1 }
    ```
