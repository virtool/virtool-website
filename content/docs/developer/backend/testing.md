---
title: "Testing"
menu:
  developer:
    parent: "Backend"
    weight: 30
---

Tests are implemented using the [pytest](https://docs.pytest.org/en/latest/) framework.

# Running Tests

## Services

The following services must be running first:

* `postgresql >= 16`
* `mongodb == 4.4`
* `redis == 6.0`

You can start these services using Docker Compose:

1. Ensure `docker` and the `compose` plugin are installed.

2. Clone the Virtool [compose](https://github.com/virtool/compose) respository:

   ```sh
   git clone https://github.com/virtool/compose.git
   ```

3. Start up containers using the `test` profile:

   ```sh
   docker-compose -p virtool --profile test up -d
   ```



## Testing

Run tests from the source directory root:

```sh
pytest
```

# Snapshots

Snapshots are used for tests were large outputs or API responses are validated.

Snapshots are data files saved to the repository that can be automatically:
* written the first time a test runs
* loaded to validate output in future runs of the same test

We use [syrupy](https://tophat.github.io/syrupy/) for snapshot testing in Python. Be familiar with its API and features.

## Rules

1. Never blindly update a snapshot.

   Read through every snapshot diff to see why it is failing. You should rarely have a total mismatch between your test output and the stored snapshot.

   Blindly accepting snapshot updates can lead to insidious bugs that will not be picked up in test runs for other commits.

2. Test and update snapshots as you go.

   Whenever you make a change in code. Run the corresponding tests and update the snapshots accordingly. It is no fun making a lot of code changes then attempting to comb through reams of confusing snapshot diffs.

3. Test and update one module or subpackage at a time.

   You can narrow the focus of `pytest` by passing it a path to the tests you want to run. Do this instead of running the entire suite and
   trying to update all snapshots.