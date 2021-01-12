---
title: "Data Model"
menu:
  developer:
    parent: "Backend"
    weight: 50
---

# Analyses

## Document

| Field                                  | Type       | Description                                                                      |
| :------------------------------------- | :--------- | :------------------------------------------------------------------------------- |
| `_id`                                  | `string`   | The unique ID for the analysis                                                   |
| [`cache`](#analysis_cache)             | `document` | Information about the read cache used for this analysis                          |
| `created_at`                           | `date`     | When the cache was created                                                       |
| [`index`](#analysis_index)             | `document` | Information about the index used for the analysis                                |
| [`job`](#analysis_job)                 | `document` | Information about the job doing the analysis                                     |
| `read_count`                           | `integer`  | The number of reads used in the analysis. **Missing in some documents**.         |
| `ready`                                | `boolean`  | The analysis is ready to be viewed                                               |
| [`reference`](#analysis_reference)     | `document` | Information about the reference used for the analysis                            |
| `results`                              | `document` | A JSON blob containing the results of the analysis that varies between workflows |
| [`sample`](#analysis_sample)           | `document` | Information about the parent sample                                              |
| `subtracted_count`                     | `document` | The number of reads subtracted **Only in Pathoscope records**                    |
| [`subtraction`](#analysis_subtraction) | `document` | Information about the subtraction used for the analysis                          |
| `updated_at`                           | `time`     | The last time the document was changed (used for caching)                        |
| [`user`](#analysis_user)               | `document` | Information about the user that created the analysis                             |
| `workflow`                             | `string`   | The analysis workflow (aodp, nuvs, pathoscope)                                   |

## `cache` {#analysis_cache}

| Field | Type     | Description                                             |
| :---- | :------- | :------------------------------------------------------ |
| `id`  | `string` | The unique ID for the read cache used for this analysis |

## `index` {#analysis_index}

| Field | Type     | Description                                                  |
| :---- | :------- | :----------------------------------------------------------- |
| `id`  | `string` | The unique ID for the reference index used for this analysis |

## `job` {#analysis_job}

| Field | Type     | Description                                 |
| :---- | :------- | :------------------------------------------ |
| `id`  | `string` | The unique ID for the job for this analysis |

## `reference` {#analysis_reference}

| Field | Type     | Description                                            |
| :---- | :------- | :----------------------------------------------------- |
| `id`  | `string` | The unique ID for the reference used for this analysis |

## `sample` {#analysis_sample}

| Field | Type     | Description                        |
| :---- | :------- | :--------------------------------- |
| `id`  | `string` | The unique ID of the parent sample |

## `subtraction` {#analysis_subtraction}

| Field | Type     | Description                                             |
| :---- | :------- | :------------------------------------------------------ |
| `id`  | `string` | The unique ID of the subtraction used for this analysis |

## `user`

| Field | Type     | Description                                          |
| :---- | :------- | :--------------------------------------------------- |
| `id`  | `string` | The unique ID of the user that created this analysis |

# Caches

Caches are sample read data that has been trimmed using a specific set of trim parameters and trimming tool.

[Example document](#example_cache)

## Document

| Field                       | Type       | Description                                                                           |
| :-------------------------- | :--------- | :------------------------------------------------------------------------------------ |
| `_id`                       | `string`   | The unique ID for the cache                                                           |
| `created_at`                | `date`     | When the cache was created                                                            |
| [`files`](#cache_files)     | `array`    | Describes the files included in the cache                                             |
| `hash`                      | `string`   | Hash of trimming parameters                                                           |
| `legacy`                    | `boolean`  | The cache represents a legacy dataset where trimming was performed on sample creation |
| `missing`                   | `boolean`  | The cache files cannot be found on disk                                               |
| `paired`                    | `boolean`  | The cache comprises paired data                                                       |
| [`parameters`](#parameters) | `document` | Key-value pairs describing the trimming parameters used to create the cache           |
| `quality`                   | `document` | JSON blob containing the data derived from FastQC                                     |
| `ready`                     | `boolean`  | The cache is ready to be used                                                         |
| `sample`                    | `document` | Information about the parent sample                                                   |

## `files` {#cache_files}

| Field  | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `name` | `string`  | The display name for the file |
| `size` | `integer` | The size of the file in bytes |

## `parameters`

| Field          | Type      | Description                        |
| :------------- | :-------- | :--------------------------------- |
| `end_quality`  | `integer` | The minimum end quality allowed    |
| `max_length`   | `integer` | The maximum read length allowed    |
| `mean_quality` | `integer` | The mean quality of read allowed   |
| `min_length`   | `integer` | The minimum lenght of read allowed |


# Files

Files are user uploads.

- [Example document](#example_file)
- File documents describe a file stored at `<data_path>/files`
- File IDs comprise and eight alphanumeric characters followed by the original file name

## Document

| Field                | Type       | Description                                    |
| :------------------- | :--------- | :--------------------------------------------- |
| `_id`                | `string`   | The unique ID for the file                     |
| `created_at`         | `date`     | When the cache was created                     |
| `name`               | `string`   | The original file name; used for display in UI |
| `ready`              | `boolean`  | The file is ready for use in app               |
| `reserved`           | `boolean`  | The file is involved in a sample creation job  |
| `size`               | `integer`  | The size of the file in bytes                  |
| `type`               | `string`   | The type of file (reads, subtraction)          |
| `uploaded_at`        | `date`     | The date and time the upload was initiated     |
| [`user`](#file_user) | `document` | Information about the creating user            |

## `user` {#file_user}

| Field | Type     | Description                              |
| :---- | :------- | :--------------------------------------- |
| `id`  | `string` | The ID of the user that created the file |


# Groups

Groups with permissions that users can be members of.

- [Example document](#example_group)
- Users inherit permissions from their groups
- Users `permissions` field is updated when one of their groups is modified

## Document

| Field         | Type       | Description                          |
| :------------ | :--------- | :----------------------------------- |
| `_id`         | `string`   | The unique ID and name for the group |
| `permissions` | `document` | The group permissions                |


# History

The changes made to OTUs.

History IDs are composed of the affected OTU ID prepended to the OTU version the change resulted in (eg. `001rsra0.0`). For removed OTUs, the change ID ends with `removed` (eg. `001rsra0.removed`).

- [Example document](#example_history)

## Document

| Field                             | Type       | Description                                                                       |
| :-------------------------------- | :--------- | :-------------------------------------------------------------------------------- |
| `_id`                             | `string`   | The unique ID for the change                                                      |
| `created_at`                      | `date`     | When the change was made                                                          |
| `description`                     | `string`   | A human readable description of the change                                        |
| `diff`                            | `array`    | A diff created from this version of the OTU and the previous using `dictdiffer`   |
| [`index`](#history_index)         | `index`    | Information about the index this change is included in                            |
| `legacy`                          | `document` | Data remaining from an older implementation of the history system                 |
| `method_name`                     | `string`   | The method that resulted in the change (eg. `clone`, `create_sequence`, `remove`) |
| [`otu`](#history_otu)             | `document` | Information about the OTU at the time of the change                               |
| [`reference`](#history_reference) | `document` | Information about the parent reference                                            |
| [`user`](#history_user)           | `document` | Information about the user that made the change                                   |

## `index` {#history_index}

All values in this document will be `null` if the change is not yet built into an index.

| Field     | Type      | Description                 |
| :-------- | :-------- | :-------------------------- |
| `id`      | `string`  | The unique ID for the index |
| `version` | `integer` | The index version           |

## `otu` {#history_otu}

| Field     | Type      | Description                                   |
| :-------- | :-------- | :-------------------------------------------- |
| `id`      | `string`  | The unique ID for the  OTU                    |
| `name`    | `string`  | The name of the OTU at the time of the change |
| `version` | `integer` | The OTU version at the time of the change     |

## `reference` {#history_reference}

| Field | Type     | Description                            |
| :---- | :------- | :------------------------------------- |
| `id`  | `string` | The unique ID for the parent reference |

## `user` {#history_user}

| Field | Type     | Description                                 |
| :---- | :------- | :------------------------------------------ |
| `id`  | `string` | The unique ID for user that made the change |

# HMM

HMMs represent profile hidden Markov models (HMM) and the annotations of the profile.

- [Example document](#example_hmm)
- Profile HMMs are created from similar clustered protein sequences
- The annotation data describes the proteins in the cluster (eg. taxonomy, naming, identifiers)
- Each HMM profile has a unique `_id` **and** a cluster number

## Document

| Field                 | Type       | Description                                                                          |
| :-------------------- | :--------- | :----------------------------------------------------------------------------------- |
| `_id`                 | `string`   | The unique ID for the HMM                                                            |
| `cluster`             | `integer`  | When the cache was created                                                           |
| `count`               | `integer`  | The number of sequence comprising the cluster                                        |
| [`entries`](#entries) | `array`    | Descriptions of the sequences in the cluster                                         |
| `families`            | `document` | A document with the number of sequences of families as keys with counts as values    |
| `genera`              | `document` | A document with the number of sequences of a given genera keyed by the genera name   |
| `hidden`              | `boolean`  | The HMM dataset was removed but this profile is still linked to an existing analysis |
| `length`              | `integer`  | The length of the profile                                                            |
| `mean_entropy`        | `float`    |                                                                                      |
| `names`               | `array`    | The three most common names observed in the cluster members                          |
| `total_entropy`       | `float`    |                                                                                      |

## `entries`

| Field       | Type      | Description                                   |
| :---------- | :-------- | :-------------------------------------------- |
| `accession` | `string`  | The unique public accession for the sequence  |
| `gi`        | `integer` | When the cache was created                    |
| `name`      | `string`  | The name of the protein (eg. replicase)       |
| `organism`  | `string`  | The name of the organism the sequence is from |


# Indexes

Reference indexes are builds of a reference. OTUs in the reference are changed over time and index builds are required to use the changes in subsequent analyses.

- [Example document](#example_index)

## Document

| Field                 | Type       | Description                                                                          |
| :-------------------- | :--------- | :----------------------------------------------------------------------------------- |
| `_id`                 | `string`   | The unique ID for the indexes                                                        |
| `created_at`          | `date`     | When the index was created                                                           |
| `has_files`           | `boolean`  | The files for the index exist on disk                                                |
| [`job`](#index_job)   | `document` | Information about the `build_index` job for this index                               |
| `manifest`            | `document` | Describes the OTU versions in the index; contains OTU versions keyed by OTU IDs      |
| `ready`               | `boolean`  | The index is ready for use                                                           |
| [`user`](#index_user) | `document` | Information about the creating user                                                  |
| `hidden`              | `boolean`  | The HMM dataset was removed but this profile is still linked to an existing analysis |
| `version`             | `integer`  | The version of the reference this index represents                                   |

## `job` {#index_job}

| Field | Type     | Description                                    |
| :---- | :------- | :--------------------------------------------- |
| `id`  | `string` | The ID of the `build_index` job for this index |

## `user` {#index_user}

| Field | Type     | Description                               |
| :---- | :------- | :---------------------------------------- |
| `id`  | `string` | The ID of the user that created the index |


# Jobs

Jobs represent runs of bioinformatic workflows.

- [Example document](#example_job)

## Document

| Field                | Type       | Description                                     |
| :------------------- | :--------- | :---------------------------------------------- |
| `_id`                | `string`   | The unique ID for the job                       |
| `args`               | `document` | When the cache was created                      |
| `mem`                | `integer`  | The memory (GB) available for the job           |
| `proc`               | `integer`  | The processes to be used by the job             |
| [`status`](#status") | `array`    | The status log for the job                      |
| `task`               | `string`   | The name of the workflow                        |
| [`user`](#job_user)  | `document` | Information about the user that started the job |

## `status`

| Field       | Type     | Description                                               |
| :---------- | :------- | :-------------------------------------------------------- |
| `error`     | `string` | The unique public accession for the sequence              |
| `progress`  | `float`  | The progress value for the job                            |
| `stage`     | `string` | The step the job is at                                    |
| `state`     | `string` | The state of the job (waiting, running. error, cancelled) |
| `timestamp` | `date`   | When the status record was created                        |
 
## `user` {#job_user}

| Field | Type     | Description                             |
| :---- | :------- | :-------------------------------------- |
| `id`  | `string` | The ID of the user that started the job |


# Keys

The user-associated API keys created by users.

The `_id` for the API key is the bcrypted value of the key `string` itself. Users use this API key `string` to authenticate their requests.

- [Example document](#example_key)

## Document

| Field                         | Type            | Description                                                     |
| :---------------------------- | :-------------- | :-------------------------------------------------------------- |
| `_id`                         | `string`        | The hased API key value                                         |
| `id`                          | `string`        | The unique ID returned on the API                               |
| `name`                        | `string`        | The display name for the key                                    |
| `administrator`               | `boolean`       | The key has administrative rights                               |
| `groups`                      | `array[string]` | The groups the keys is a member of                              |
| [`permissions`](#permissions) | `document`      | The permissions the key has; booleans keyed by permission names |
| `created_at`                  | `date`          | When the key was creatted                                       |
| [`user`](#key_user)           | `document`      | Information about the owner user                                |

## `user` {#key_user}

| Field | Type     | Description                          |
| :---- | :------- | :----------------------------------- |
| `id`  | `string` | The ID of the user that owns the key |


# OTUs

OTUs are the highest-level child record of references. The typically represent virus species, but can be used for other organisms.

- Schemas are ordered arrays describing which the genomic segments that should be in isolates of the OTU
- Schema ordering affect display order of isolate sequences in the UI
- [Example document](#example_otu)

## Document

| Field                         | Type                 | Description                                                 |
| :---------------------------- | :------------------- | :---------------------------------------------------------- |
| `_id`                         | `string`             | The ID of the OTU                                           |
| `abbreviation`                | `string`             | The abbreviation for the OTU (common for viruses)           |
| `created_at`                  | `date`               | When the OTU was created                                    |
| [`isolates`](#isolates)       | `array`              | The isolates for the OTU                                    |
| `last_indexed_version`        | `integer`            | The last version of the OTU that was included in an index   |
| `lower_name`                  | `string`             | The lowercase name of the OTU                               |
| `name`                        | `string`             | The display name for the OTU                                |
| [`reference`](#otu_reference) | `document`           | Information about the parent reference                      |
| [`remote`](#remote)           | `optional(document)` | Information about the remote OTU this OTU was copied from   |
| `schema`                      | `array(document)`    | Defines the segments that should be in isolates of this OTU |
| [`user`](#otu_user)           | `document`           | Information about the user that created the OTU             |
| `verified`                    | `boolean`            | The OTU has passed validation                               |
| `version`                     | `integer`            | The version of the OTU                                      |

## `isolates`

| Field         | Type     | Description                                             |
| :------------ | :------- | :------------------------------------------------------ |
| `id`          | `string` | The unique ID for the isolate                           |
| `source_name` | `string` | The identifying part of the isolate name (eg. Canada-1) |
| `source_type` | `string` | The common first part of the isolate name (eg. Isolate) |


## `remote`

| Field | Type     | Description                                        |
| :---- | :------- | :------------------------------------------------- |
| `id`  | `string` | The ID of the remote OTU this one was created from |

## `reference` {#otu_reference}

| Field | Type     | Description                    |
| :---- | :------- | :----------------------------- |
| `id`  | `string` | The ID of the parent reference |

## `schema`

| Field    | Type    | Description                                                             |
| :------- | :------ | :---------------------------------------------------------------------- |
| molecule | string  | The genome nucleic acid class (eg. dsRNA)                               |
| name     | string  | The display name for the segment                                        |
| required | boolean | Whether the segment is required in an isolate for it to pass validation |


## `user` {#otu_user}

| Field | Type     | Description                             |
| :---- | :------- | :-------------------------------------- |
| `id`  | `string` | The ID of the user that created the OTU |


# References

References are collections of [OTUs](#otus). They can be built into versioned [indexes](#indexes).

- [Example document](#example_reference)

## Document

| Field                           | Type                 | Description                                                               |
| :------------------------------ | :------------------- | :------------------------------------------------------------------------ |
| `_id`                           | `string`             | The unique ID for the reference                                           |
| [`cloned_from`](#cloned_from)   | `optional(document)` | Information about the source reference if this one is a clone             |
| `created_at`                    | `date`               | When the reference was created                                            |
| `data_type`                     | `string`             | What type of data the reference contains (barcode, genome)                |
| `description`                   | `string`             | A detailed description of the reference                                   |
| [`groups`](#reference_groups)   | `array(document)`    | User groups that have access to the reference                             |
| [`installed`](#installed)       | `document`           | Information about the installed release of a remote reference             |
| `name`                          | `string`             | The display name for the reference                                        |
| `organism`                      | `string`             | The type of organism represented by the reference (eg. virus, bacteria)   |
| [`task`](#reference_task)       | `document`           | Describes any background task associated with the reference (eg. cloning) |
| [`release`](#reference_release) | `document`           | Describes the latest release of a remote reference                        |
| [`remotes_from`](#remotes_from) | `document`           | Describes the source of a remote reference                                |
| `restrict_source_types`         | `boolean`            | Only allow users to create isolates with the allowed `source_types`       |
| `source_types`                  | `array(string)`      | A list of allowed source types for isolates in this reference             |
| [`user`](#reference_user)       | `document`           | Information about the user that created the reference                     |  | [`users`](#reference_users) | `array(document)` | Individual Users that have access to the reference |
| [`updates`](#reference_updates) | `array(document)`    | Describes the updates previously applied to a remote reference            |

## `cloned_from`

Describes the source reference for cloned references. **Only defined for cloned references**.

| Field  | Type     | Description                                      |
| :----- | :------- | :----------------------------------------------- |
| `id`   | `string` | The unique ID for the source reference           |
| `name` | `string` | The source reference name at the time of cloning |

## `groups` {#reference_groups}

| Field        | Type      | Description                                        |
| :----------- | :-------- | :------------------------------------------------- |
| `id`         | `string`  | The unique ID for the user group                   |
| `created_at` | `time`    | When the group was added to the reference          |
| `build`      | `boolean` | The user group can build indexes for the reference |
| `modify`     | `boolean` | The user group can modify the reference            |
| `modify_otu` | `boolean` | The user group can modify OTUs in the reference    |
| `remove`     | `boolean` | The user group can remove the reference            |

## `installed`

Describes the installed release for a remote reference. **Only defined for remote references**.

| Field                     | Type       | Description                                           |
| :------------------------ | :--------- | :---------------------------------------------------- |
| `id`                      | `integer`  | The release ID from GitHub                            |
| `body`                    | `string`   | The markdown body from the GitHub release             |
| `created_at`              | `time`     | When the release was installed                        |
| `filename`                | `string`   | The name of the release archive                       |
| `html_url`                | `string`   | The URL to the release page on GitHub                 |
| `published_at`            | `date`     | When the release was published on GitHub              |
| `name`                    | `string`   | The name of the release (eg. `v4.1.2`)                |
| `ready`                   | `boolean`  | The installation is complete                          |
| `size`                    | `integer`  | The size in bytes of the release archive file         |
| [`user`](#installed_user) | `document` | Information about the user that installed the release |

### `installed.user` {#installed_user}

| Field | Type     | Description                                   |
| :---- | :------- | :-------------------------------------------- |
| `id`  | `string` | The ID of the user that installed the release |

## `release` {#reference_release}

Describes the installed release for a remote reference. **Only defined for remote references**.

| Field          | Type      | Description                                                                                |
| :------------- | :-------- | :----------------------------------------------------------------------------------------- |
| `id`           | `integer` | The release ID from GitHub                                                                 |
| `body`         | `string`  | The markdown body from the GitHub release                                                  |
| `content_type` | `string`  | The `Content-Type` of the release `GET` response                                           |
| `download_url` | `string`  | The URL where the installable release archive can be downloaded                            |
| `etag`         | `string`  | The [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) for the release |
| `filename`     | `string`  | The name of the release archive                                                            |
| `html_url`     | `string`  | The URL to the release page on GitHub                                                      |
| `name`         | `string`  | The name of the release (eg. `v4.1.2`)                                                     |
| `newer`        | `boolean` | The release is newer than the installed one                                                |
| `published_at` | `date`    | When the release was published on GitHub                                                   |
| `retrieved_at` | `date`    | When the release was last retrieved                                                        |
| `size`         | `integer` | The size in bytes of the release archive file                                              |

## `remotes_from`

Describes the source of a remote reference. **Only defined for remote references**.

| Field  | Type      | Description                                                         |
| :----- | :-------- | :------------------------------------------------------------------ |
| `slug` | `integer` | The GitHub slug for the reference (eg. `virtool/ref-plant-viruses`) |

## `task` {#reference_task}

| Field | Type     | Description                                      |
| :---- | :------- | :----------------------------------------------- |
| `id`  | `string` | The ID of the task associated with the reference |

## `updates` {#reference_updates}

Describes the updates applied to the reference with the most recent first. Updates have an identical schema to [`installed`](#reference_installed).

**Only set on remote references**.

## `user` {#reference_user}

| Field | Type     | Description                                   |
| :---- | :------- | :-------------------------------------------- |
| `id`  | `string` | The ID of the user that created the reference |

## `users` {#reference_users}

| Field        | Type      | Description                                  |
| :----------- | :-------- | :------------------------------------------- |
| `id`         | `string`  | The unique ID for the user                   |
| `created_at` | `time`    | When the user was added to the reference     |
| `build`      | `boolean` | The user can build indexes for the reference |
| `modify`     | `boolean` | The user can modify the reference            |
| `modify_otu` | `boolean` | The user can modify OTUs in the reference    |
| `remove`     | `boolean` | The user can remove the reference            |


# Samples

Samples are pieces of sequencing data that can be used to run analyses. Samples are linked to analyses they are used in.

- [Example document](#example_sample)

## Document

| Field                                | Type              | Description                                                       |
| :----------------------------------- | :---------------- | :---------------------------------------------------------------- |
| `_id`                                | `string`          | The unique ID for the sample                                      |
| `all_read`                           | `boolean`         | All users on the instance can read the sample                     |
| `all_write`                          | `boolean`         | All users on the instance can modify or remove the sample         |
| `created_at`                         | `date`            | When the sample was created                                       |
| [`files`](#sample_files)             | `array(document)` | Describes the sequencing files that comprise the sample           |
| `group`                              | `string`          | The owner group of the sample                                     |
| `group_read`                         | `boolean`         | The sample can be read by members of `group`                      |
| `group_write`                        | `boolean`         | The sample can be modified by members of `group`                  |
| `host`                               | `string`          | User-supplied host for the sample                                 |
| `host`                               | `string`          | User-supplied isolate for the sample                              |
| `library_type`                       | `string`          | The sample library type (amplicon, normal, srna)                  |
| `locale`                             | `string`          | User-supplied locale for the sample                               |
| `name`                               | `string`          | The display name for the sample                                   |
| `nuvs`                               | `boolean`         | The sample has a completed NuVs analysis associated with it       |
| `paired`                             | `boolean`         | The sample contains paired data                                   |
| `pathoscope`                         | `boolean`         | The sample has a completed Pathoscope analysis associated with it |
| `quality`                            | `document`        | A JSON blob describing the FastQC quality of the sample           |
| `ready`                              | `boolean`         | The sample has been successfully created and is ready for use     |
| [`subtraction`](#sample_subtraction) | `document`        | Information about the default subtraction for the sample          |
| [`user`](#sample_user)               | `document`        | Information about the user that created the sample                |


## `files` {#sample_files}

| Field                 | Type       | Description                                                              |
| :-------------------- | :--------- | :----------------------------------------------------------------------- |
| `download_url`        | `string`   | The URL path where the file can be download                              |
| [`from`](#files_from) | `document` | Information about the original uploaded file                             |
| `name`                | `string`   | The display and download name for the file                               |
| `size`                | `integer`  | The size of the uploaded file in bytes                                   |
| `raw`                 | `boolean`  | The data is raw. Older samples stored trimmed data as their primary data |
| `size`                | `integer`  | The size of the file in bytes                                            |

### `files.from` {#files_from}
Describes the original uploaded file.

| Field  | Type      | Description                            |
| :----- | :-------- | :------------------------------------- |
| `id`   | `string`  | The unique upload ID                   |
| `name` | `string`  | The original name of the uploaded file |
| `size` | `integer` | The size of the uploaded file in bytes |

## `subtraction` {#sample_subtraction}

| Field | Type     | Description                       |
| :---- | :------- | :-------------------------------- |
| `id`  | `string` | The ID of the default subtraction |

## `user` {#sample_user}

| Field | Type     | Description                                |
| :---- | :------- | :----------------------------------------- |
| `id`  | `string` | The ID of the user that created the sample |


# Sequence


Sequence records describe genomic sequences linked to [isolates](#isolates).

- [Example document](#example_sequence)

## Document

| Field                              | Type       | Description                                                                      |
| :--------------------------------- | :--------- | :------------------------------------------------------------------------------- |
| `_id`                              | `string`   | The unique ID for the task                                                       |
| `accession`                        | `string`   | The user-entered accession for the sequence (corresponds with Genbank accession) |
| `definition`                       | `string`   | The long-form definition for the sequence (corresponds with Genbank field)       |
| `host`                             | `string`   | A host annotation sequence (corresponds with the Genbank feature data)           |
| `isolate_id`                       | `string`   | The ID of the parent isolate                                                     |
| `otu_id`                           | `string`   | The ID of the parent OTU                                                         |
| [`reference`](#sequence_reference) | `document` | Information about the parent reference                                           |
| [`remote`](#sequence_remote)       | `document` | Describes the origin of the sequence if it is from a remote reference            |
| `segment`                          | `string`   | What segment from the OTU schema this sequence represents                        |
| `sequence`                         | `string`   | The nucleotide sequence itself                                                   |

## `reference` {#sequence_reference}

| Field | Type     | Description                    |
| :---- | :------- | :----------------------------- |
| `id`  | `string` | The ID of the parent reference |

## `remote` {#sequence_remote}

Describes the source sequence if this sequence is from a remote reference.

| Field | Type     | Description                   |
| :---- | :------- | :---------------------------- |
| `id`  | `string` | The ID of the remote sequence |

# Tasks

Tasks are background tasks that are too long-lived to run during the handling of an HTTP request.

- [Example document](#example_task)
- Triggered on a schedule, on application start, or by a user

## Document

| Field        | Type       | Description                                                                  |
| :----------- | :--------- | :--------------------------------------------------------------------------- |
| `_id`        | `string`   | The unique ID for the task                                                   |
| `complete`   | `boolean`  | The task is complete                                                         |
| `context`    | `document` | A JSON blob containing data used by the task or to render the task in the UI |
| `count`      | `integer`  | A counter that can be used to calculate progress for the current step        |
| `created_at` | `date`     | When the task was started                                                    |
| `file_size`  | `integer`  | The size in bytes of a file being processed                                  |
| `progress`   | `integer`  | The progress of the task (`0` - `100`)                                       |
| `step`       | `string`   | The step the task is currently running                                       |
| `type`       | `string`   | The task type (eg. `update_software`, `remove_reference`)                    |


# Session

A brower client session.

Sessions duplicate user information as authentication of a session must be very performant and not rely on multiple database calls. They are automatically updated when changes are made to the associated user account.

## Document

| Field                         | Type            | Description                                                          |
| :---------------------------- | :-------------- | :------------------------------------------------------------------- |
| `_id`                         | `string`        | The session ID (stored as a cookie)                                  |
| `administrator`               | `boolean`       | The session is for an administrator account                          |
| `created_at`                  | `date`          | When the session was created                                         |
| `expiresAt`                   | `date`          | Enables auto-deletion of the session document by MongoDB             |
| `force_reset`                 | `boolean`       | Forces the user to reset their password next time the make a request |
| `groups`                      | `array(string)` | The groups the session user is a member of                           |
| `ip`                          | `string`        | The IP the session originated from                                   |
| [`permissions`](#permissions) | `document`      | The permissions associated with the session                          |
| `token`                       | `string`        | The authentication token for a authenticated session                 |
| [`user`](#session_user)       | `document`      | Information about the user associated with the session               |

## `user` {#user_session}

| Field | Type     | Description                                    |
| :---- | :------- | :--------------------------------------------- |
| `id`  | `string` | The ID of the user associated with the session |


# Settings

The settings collection contains a single document contain settings that can be modified from the UI and API.

## Document

| Field                     | Type            | Description                                                                                    |
| :------------------------ | :-------------- | :--------------------------------------------------------------------------------------------- |
| `_id`                     | `string`        | Static value: `settings`                                                                       |
| `default_source_types`    | `array(string)` | A list of source types that will be set as the `allowed_source_types` field for new references |
| `enable_api`              | `boolean`       | Enable the Virtool HTTP API                                                                    |
| `enable_sentry`           | `boolean`       | Enable Sentry error reporting on server and client                                             |
| `hmm_slug`                | `string`        | The GitHub slug for the repository HMM dataset releases should be pulled from                  |
| `minimum_password_length` | `integer`       | The minimum length of user password allowed                                                    |
| `sample_all_read`         | `boolean`       | Should new samples be readable by all users by default                                         |
| `sample_all_write`        | `boolean`       | Should new sample be modifiable by all users by default                                        |
| `sample_group`            | `string`        | A default owner user group for all new samples                                                 |
| `sample_group_read`       | `boolean`       | Should new samples be readable by all members of the owner group by default                    |
| `sample_group_write`      | `boolean`       | Should new samples be modifiable by all members of the owner group by default                  |
| `unique_sample_names`     | `boolean`       | Force unique sample naming                                                                     |
| `software_channel`        | `string`        | The software channel to pull updates from (stable, beta, alpha)                                |

# Subtractions

Subtractions are reference genomes and mapping indexes used to eliminate reads from analyses.

## Document


| Field                       | Type       | Description                                                       |
| :-------------------------- | :--------- | :---------------------------------------------------------------- |
| `_id`                       | `string`   | The unique ID for the subtraction value: `settings`               |
| `count`                     | `integer`  | The number of sequence entries in the source FASTA file           |
| `deleted`                   | `boolean`  | The subtraction has been removed by a user                        |
| [`file`](#subtraction_file) | `document` | Information about the source FASTA file                           |
| [`gc`](#gc)                 | `document` | A document describing the nucleotide composition of the sequences |
| `is_host`                   | `boolean`  | The subtraction is a pathogen host genome                         |
| [`job`](#subtraction_job)   | `document` | Information about the subtraction creation job                    |
| `name`                      | `string`   | The display name for the subtraction                              |
| `nickname`                  | `string`   | A nickname for the subtraction; typically the common name         |
| `ready`                     | `boolean`  | The subtraction is ready for use                                  |
| [`user`](#subtraction_user) | `document` | Information about the creating user                               |

## `file` {#subtraction_file}

| Field  | Type     | Description                         |
| :----- | :------- | :---------------------------------- |
| `id`   | `string` | The unique ID for the uploaded file |
| `name` | `string` | The original of the uploaded file   |

## `gc` {#gc}

| Field | Type    | Description        |
| :---- | :------ | :----------------- |
| `a`   | `float` | The adenine ratio  |
| `c`   | `float` | The cytosine ratio |
| `g`   | `float` | The guanine ratio  |
| `n`   | `float` | The unknown ratio  |
| `t`   | `float` | The thymine ratio  |

## `job` {#subtraction_job}

| Field | Type     | Description                                         |
| :---- | :------- | :-------------------------------------------------- |
| `id`  | `string` | The unique ID for creation job for this subtraction |

## `user` {#subtraction_user}

| Field | Type     | Description                                              |
| :---- | :------- | :------------------------------------------------------- |
| `id`  | `string` | The unique ID for the user that created this subtraction |


# Users {#users}

User accounts on the Virtool instance.

- [Example document](#example_user)

| Field                         | Type            | Description                                                                |
| :---------------------------- | :-------------- | :------------------------------------------------------------------------- |
| `_id`                         | `string`        | The unique ID for the user (username)                                      |
| `administrator`               | `boolean`       | Is the user an administrator                                               |
| `email`                       | `string`        | The user's email address                                                   |
| `force_reset`                 | `boolean`       | The user should be forced to reset their password                          |
| `groups`                      | `array(string)` | IDs of groups the user is a member of                                      |
| `identicon`                   | `string`        | A string that is used to create and identicon for the user on the frontend |
| `last_password_change`        | `date`          | When the user last changed their password                                  |
| `password`                    | `binary`        | The Bcrypt-hashed and salted password for the user                         |
| [`permissions`](#permissions) | `document`      | The permissions inherited from the user's groups                           |
| `primary_group`               | `string`        | The primary group for the user; can be used to assign sample ownership     |
| `settings`                    | `document`      | Contains user-specific settings; currently unused                          |


# Common

These subdocuments are seen in a few collections.

## Permissions {#permissions}

A subdocument in [keys](#keys), [groups](#groups), and [users](#users).

| Field                | Type      | Description                                                  |
| :------------------- | :-------- | :----------------------------------------------------------- |
| `cancel_job`         | `boolean` | The group members can cancel jobs                            |
| `create_sample`      | `boolean` | The group members can create sample                          |
| `create_ref`         | `boolean` | The group members can create references                      |
| `modify_hmm`         | `boolean` | The group members can modify HMMs (delete installed dataset) |
| `modify_subtraction` | `boolean` | The group members can modify subtraction                     |
| `remove_file`        | `boolean` | The group members can remove files                           |
| `remove_job`         | `boolean` | The group members can remove jobs                            |

# Examples

## Cache {#example_cache}
```json
{
   "_id":"00qw6j6d",
   "created_at":{
      "$date":"2020-05-17T00:57:35.740Z"
   },
   "files":[
      {
         "name":"reads_1.fq.gz",
         "size":64591205
      },
      {
         "name":"reads_2.fq.gz",
         "size":53963680
      }
   ],
   "hash":"232b1565a0d704b47883fdbb03dea6cac456930b",
   "legacy":false,
   "missing":false,
   "paired":true,
   "parameters":{
      "end_quality":"20",
      "mode":"pe",
      "max_error_rate":"0.1",
      "max_indel_rate":"0.03",
      "max_length":null,
      "mean_quality":"25",
      "min_length":160
   },
   "program":"skewer-0.2.2",
   "ready":true,
   "sample":{
      "id":"20yhymde"
   },
   "quality":{
      "count":753492,
      "encoding":"Sanger / Illumina 1.9\n",
      "length":[
         160,
         301
      ],
      "gc":50.5,
      "bases":[
         [
            33,
            34,
            34,
            34,
            34,
            34
         ],
         [
            33,
            34,
            34,
            34,
            34,
            34
         ]
      ],
      "sequences":[
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         1,
         10,
         63,
         180,
         657,
         1302
      ],
      "composition":[
         [
            39.5,
            21,
            12,
            26
         ],
         [
            16,
            18.5,
            37,
            26
         ],
         [
            16.5,
            23.5,
            31,
            26.5
         ]
      ]
   }
}
```

## File {#example_file}

```json
{
   "_id":"07a7zbv6-17NR001b_S23_R1_001.fastq.gz",
   "name":"17NR001b_S23_R1_001.fastq.gz",
   "type":"reads",
   "user":{
      "id":"igboyes"
   },
   "uploaded_at":{
      "$date":"2019-02-04T19:29:28.254Z"
   },
   "expires_at":null,
   "created":false,
   "reserved":false,
   "ready":false
}
```

## Group {#example_group}

```json
{
   "_id":"biotech",
   "permissions":{
      "cancel_job":true,
      "create_ref":false,
      "create_sample":true,
      "modify_hmm":false,
      "modify_subtraction":true,
      "remove_file":true,
      "remove_job":true,
      "upload_file":true
   }
}
```

## History {#example_history}

```json
{
   "_id":"01i5mb0j.2",
   "method_name":"create_sequence",
   "description":"Created new sequence KP757934.1 in Unnamed Isolate",
   "created_at":{
      "$date":"2019-12-16T22:31:09.181Z"
   },
   "otu":{
      "id":"01i5mb0j",
      "name":"Drosophila-associated Chrysoviridae-like",
      "version":2
   },
   "reference":{
      "id":"5x3k0mme"
   },
   "index":{
      "id":"78vzx5th",
      "version":0
   },
   "user":{
      "id":"mrott"
   },
   "diff":[
      [
         "change",
         "verified",
         [
            false,
            true
         ]
      ],
      [
         "add",
         [
            "isolates",
            0,
            "sequences"
         ],
         [
            [
               0,
               {
                  "_id":"f7yjp0mf",
                  "accession":"KP757934.1",
                  "definition":"Drosophila-associated Chrysoviridae-like clone",
                  "host":"large pool of wild-caught Drosophila",
                  "sequence":"GCTTGTCAGCCTCAGTCAATTAAT...",
                  "segment":"",
                  "otu_id":"01i5mb0j",
                  "isolate_id":"t0f",
                  "reference":{
                     "id":"5x3k0mme"
                  }
               }
            ]
         ]
      ],
      [
         "change",
         "version",
         [
            1,
            2
         ]
      ]
   ]
}
```

## HMM {#example_hmm}

```json
{
   "_id":"015sqfg4",
   "families":{
      "Bunyaviridae":4
   },
   "total_entropy":50.4,
   "length":90,
   "cluster":3846,
   "entries":[
      {
         "accession":"YP_004928150.1",
         "gi":"356457880",
         "organism":"Puumala virus",
         "name":"nonstructural protein"
      },
      {
         "accession":"YP_004928151.1",
         "gi":"356457879",
         "organism":"Andes virus",
         "name":"putative nonstructural protein"
      },
      {
         "accession":"YP_004928152.1",
         "gi":"356218600",
         "organism":"Sin Nombre virus",
         "name":"putative nonstructural protein"
      },
      {
         "accession":"YP_004928154.1",
         "gi":"356460853",
         "organism":"Tula virus",
         "name":"nonstructral protein"
      }
   ],
   "genera":{
      "Hantavirus":4
   },
   "mean_entropy":0.56,
   "count":4,
   "names":[
      "putative nonstructural protein",
      "nonstructural protein",
      "nonstructral protein"
   ],
   "hidden":false
}
```

## Index {#example_index}

The `manifest` field is abbreviated in this example.

```json
{
   "_id":"05whv76j",
   "version":11,
   "created_at":{
      "$date":"2018-09-25T18:44:51.658Z"
   },
   "manifest":{
      "10798798":0,
      "10857991":0,
      "13053251":0,
      "16174395":2,
      "16699571":0,
      "19843998":0,
      "20603017":2  
   },
   "ready":true,
   "has_files":false,
   "job":{
      "id":"fbaya08n"
   },
   "reference":{
      "id":"original"
   },
   "user":{
      "id":"igboyes"
   }
}

```

## Job {#example_job}

```json
{
   "_id":"bfljofyo",
   "task":"pathoscope_bowtie",
   "args":{
      "analysis_id":"60g6rg76",
      "ref_id":"original",
      "sample_id":"hl5v0i0y",
      "sample_name":"20PRT_3_A2_10Mil",
      "index_id":"vrfjyuyv"
   },
   "proc":15,
   "mem":60,
   "user":{
      "id":"james"
   },
   "status":[
      {
         "state":"waiting",
         "stage":null,
         "error":null,
         "progress":0,
         "timestamp":{
            "$date":"2021-01-11T18:26:31.616Z"
         }
      },
      {
         "state":"running",
         "stage":"make_analysis_dir",
         "error":null,
         "progress":0.08,
         "timestamp":{
            "$date":"2021-01-11T18:26:31.763Z"
         }
      }
   ]
}
```

## Key {#example_key}

```json
{
   "_id":"8cb62c3a14a0bfe7b694243636a4d862f07e8fa5d8f4d42937568ed047191d09",
   "id":"test_0",
   "name":"Test",
   "administrator":false,
   "groups":[
      "diagnostics",
      "biotech"
   ],
   "permissions":{
      "cancel_job":true,
      "create_ref":true,
      "create_sample":true,
      "modify_hmm":true,
      "modify_subtraction":true,
      "remove_file":true,
      "remove_job":true,
      "upload_file":true
   },
   "created_at":{
      "$date":"2019-08-20T21:08:00.257Z"
   },
   "user":{
      "id":"igboyes"
   }
}
```

## OTU {#example_otu}

```json
{
   "_id":"c93ec9a9",
   "lower_name":"abaca bunchy top virus",
   "last_indexed_version":13,
   "imported":true,
   "isolates":[
      {
         "source_type":"isolate",
         "source_name":"Q767",
         "default":true,
         "id":"4e8amg20"
      },
      {
         "source_type":"isolate",
         "source_name":"Q1108",
         "default":false,
         "id":"3h3"
      }
   ],
   "abbreviation":"ABTV",
   "name":"Abaca bunchy top virus",
   "version":13,
   "verified":true,
   "user":{
      "id":"igboyes"
   },
   "reference":{
      "id":"original"
   },
   "schema":[
      {
         "name":"DNA M",
         "molecule":"ssDNA",
         "required":true
      },
      {
         "name":"DNA S",
         "molecule":"ssDNA",
         "required":true
      },
      {
         "name":"DNA N",
         "molecule":"ssDNA",
         "required":true
      }
   ]
}
```

## Reference {#example_reference}

```json
{
   "_id":"21n3j5v6",
   "created_at":{
      "$date":"2019-10-04T17:17:48.935Z"
   },
   "data_type":"genome",
   "description":"",
   "name":"Clone of Banana Viruses",
   "organism":"virus",
   "internal_control":null,
   "restrict_source_types":false,
   "source_types":[
      "isolate",
      "strain"
   ],
   "groups":[
      
   ],
   "users":[
      {
         "id":"igboyes",
         "build":true,
         "modify":true,
         "modify_otu":true,
         "remove":true
      }
   ],
   "user":{
      "id":"igboyes"
   },
   "cloned_from":{
      "id":"9mciizg6",
      "name":"Banana Viruses"
   },
   "process":{
      "id":"zhio57ug"
   }
}
```

## Task {#example_task}

```json
{
   "_id":"57hh6wxw",
   "complete":true,
   "count":41,
   "created_at":{
      "$date":"2019-05-31T22:32:00.655Z"
   },
   "progress":1,
   "resumable":false,
   "context":{
      "created_at":{
         "$date":"2019-05-31T22:32:00.639Z"
      },
      "ref_id":"b8y5vdor",
      "release":{
         "id":15629173,
         "name":"v1.3.1",
         "body":"- add missing schema fields to all OTUs\r\n- improve testing\r\n- reduce reference size by not indenting data\r\n",
         "etag":"W/\"faf57a24724b2af782181d737cb0a397\"",
         "filename":"reference.json.gz",
         "size":3907351,
         "html_url":"https://github.com/virtool/ref-plant-viruses/releases/tag/v1.3.1",
         "download_url":"https://github.com/virtool/ref-plant-viruses/releases/download/v1.3.1/reference.json.gz",
         "published_at":"2019-02-18T21:07:02Z",
         "content_type":"application/gzip",
         "newer":true,
         "retrieved_at":{
            "$date":"2019-05-31T22:31:08.673Z"
         }
      },
      "user_id":"igboyes"
   },
   "step":"update_reference",
   "type":"update_remote_reference"
}
```

## Sample {#example_sample}

The `quality` field is abbreviated in this example.

```json
{
   "_id":"hl5v0i0y",
   "name":"20PRT_3_A2_10Mil",
   "isolate":"",
   "host":"",
   "locale":"",
   "subtraction":{
      "id":"Vitis vinifera + plastids"
   },
   "files":[
      {
         "name":"reads_1.fq.gz",
         "download_url":"/download/samples/hl5v0i0y/reads_1.fq.gz",
         "size":416281737,
         "from":{
            "name":"20PRT_3_A2_S23_R1_001 sampled.R1.fastq.gz",
            "size":416281737,
            "id":"f256p0os-20PRT_3_A2_S23_R1_001 sampled.R1.fastq.gz"
         },
         "raw":true
      }
   ],
   "library_type":"normal",
   "group":"none",
   "nuvs":false,
   "pathoscope":true,
   "created_at":{
      "$date":"2021-01-11T18:24:33.149Z"
   },
   "format":"fastq",
   "ready":true,
   "quality":{
      "count":10000000,
      "encoding":"Sanger / Illumina 1.9\n",
      "length":[
         35,
         76
      ],
      "gc":43,
      "bases":[
         [
            31,
            32,
            32,
            32,
            32,
            32
         ],
         [
            31,
            32,
            32,
            32,
            32,
            32
         ],
         [
            31,
            32,
            32,
            32,
            32,
            32
         ],
         [
            31,
            32,
            32,
            32,
            32,
            32
         ],
         [
            31,
            32,
            32,
            32,
            32,
            32
         ]
      ],
      "sequences":[
         0,
         0,
         3512,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         0,
         2,
         1,
         34,
         164,
         640,
         2044,
         5589,
         14429,
         32328
      ],
      "composition":[
         [
            37,
            12,
            7,
            41
         ],
         [
            23,
            13,
            35,
            26
         ],
         [
            20,
            17,
            27,
            34
         ],
         [
            23,
            24,
            25,
            26
         ],
         [
            24,
            30,
            25,
            19
         ]
      ]
   },
   "hold":true,
   "group_read":true,
   "group_write":true,
   "all_read":true,
   "all_write":true,
   "user":{
      "id":"james"
   },
   "paired":false
}

```

## Sequence {#example_sequence}

The `sequence` field is abbreviated in this example.

```json
{
   "_id":"001eadn5",
   "definition":"Clerodendron yellow mosaic virus, complete genome",
   "molecule_structure":"circular",
   "host": null,
   "sequence":"ACCGGATGGCAACGGCCCCGCGTGTGGGACCCACCAC",
   "isolate_id":"rzr8acbe",
   "accession":"NC_009451",
   "otu_id":"hehwsvr8",
   "reference":{
      "id":"21n3j5v6"
   },
   "remote":{
      "id":"NC_009451"
   },
   "segment":""
}
```

## Session {#example_session}

```json
{
   "_id":"a1b2c3d4e5f6",
   "created_at":{
      "$date":"2020-12-21T18:03:13.460Z"
   },
   "expiresAt":{
      "$date":"2021-01-20T18:03:13.459Z"
   },
   "ip":"127.0.0.1",
   "token":"bar",
   "administrator":false,
   "groups":[
      "biotech",
      "fred"
   ],
   "permissions":{
      "cancel_job":true,
      "create_ref":true,
      "create_sample":true,
      "modify_hmm":false,
      "modify_subtraction":true,
      "remove_file":true,
      "remove_job":true,
      "upload_file":true
   },
   "force_reset":false,
   "user":{
      "id":"fred"
   }
}
```

## Settings {#example_settings}

```json
{
   "_id":"settings",
   "default_source_types":[
      "isolate",
      "strain"
   ],
   "enable_api":true,
   "enable_sentry":true,
   "hmm_slug":"virtool/virtool-hmm",
   "minimum_password_length":8,
   "sample_all_read":true,
   "sample_all_write":true,
   "sample_group":"none",
   "sample_group_read":true,
   "sample_group_write":true,
   "sample_unique_names":true,
   "software_channel":"stable"
}
```

## Subtraction {#example_subtraction}

```json
{
   "_id":"Apis mellifera",
   "nickname":"honey bee",
   "ready":true,
   "is_host":true,
   "file":{
      "id":"ii23chjh-GCF_003254395.2_Amel_HAv3.1_genomic.fa",
      "name":"GCF_003254395.2_Amel_HAv3.1_genomic.fa"
   },
   "user":{
      "id":"james"
   },
   "job":{
      "id":"98b12fh9"
   },
   "count":177,
   "gc":{
      "a":0.336,
      "t":0.335,
      "g":0.162,
      "c":0.162,
      "n":0.006
   },
   "name":"Apis mellifera",
   "deleted":false
}
```

## User {#example_user}

```json
{
   "_id":"bob",
   "administrator":false,
   "groups":[
      "bob",
      "technicians"      
   ],
   "settings":{},
   "identicon":"81b637d8fcd2c6da6359e6963113a1170de795e4b725b84d1e0b4cfd9ec58ce9",
   "permissions":{
      "cancel_job": false,
      "create_ref": false,
      "create_sample": true,
      "modify_hmm": false,
      "modify_subtraction": false,
      "remove_file": false,
      "remove_job": false,
      "upload_file": false
   },
   "password":{
      "$binary":"jksD727ADWlXOGtpRTVyS0YuNlEzcnhLcHVHSHBJelNDM0lyaVo2dVE0dkZLUGMuSWVGTDM2d2J5",
      "$type":"0"
   },
   "primary_group":"",
   "force_reset":true,
   "last_password_change":{
      "$date":"2020-08-21T21:45:18.227Z"
   }
}
```