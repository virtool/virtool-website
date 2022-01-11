import argparse
import json
import os
import requests
import semver


MIN_VERSIONS = [
    ("virtool", "4.0.0"),
    ("ref-plant-viruses", "1.0.0"),
    ("virtool-hmm", "0.2.0"),
]

RELEASE_FILE_NUMBER = 4

RELEASE_KEYS = [
    "id",
    "name",
    "body",
    "prerelease",
    "published_at",
    "html_url"
]


def get_latest(releases):
    for release in releases:
        if release["prerelease"] is False:
            return release


def format_release(release):
    """
    Format a raw GitHub release object (dict) to something that can be sent to clients.

    :param release: a raw GitHub release object
    :type release: dict

    :return: a formatted release
    :rtype: dict

    """
    formatted = {key: release[key] for key in RELEASE_KEYS}

    asset_error = False

    try:
        asset = release["assets"][0]

        formatted.update(
            {
                "filename": asset["name"],
                "content_type": asset["content_type"],
                "size": asset["size"],
                "download_url": asset["browser_download_url"],
            }
        )
    except (KeyError, IndexError):
        asset_error = True

    formatted["asset_error"] = asset_error

    return formatted


def get_release_data(username, token):
    release_data = dict()

    for repo, min_version in MIN_VERSIONS:
        repo_key = repo.replace("-", "_")

        repo_releases = list()

        for page in range(1, 5):
            url = f"https://api.github.com/repos/virtool/{repo}/releases?per_page=100&page={page}"

            body = requests.get(url, auth=(username, token)).json()

            if not body:
                break

            for release in body:
                release_name: str = release["name"]

                if repo_key == "virtool" and not release_name.startswith("v4"):
                    continue

                if semver.compare(release_name.replace("v", ""), min_version) > -1:
                    repo_releases.append(release)

        release_data[repo_key] = [
            format_release(r) for r in repo_releases if r["assets"] and not r["draft"]
        ]

    return release_data


if __name__ == "__main__":
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "-u",
        dest="github_username",
        help="username for accessing github API",
        default=os.environ["GITHUB_USERNAME"],
    )

    parser.add_argument(
        "-t",
        dest="github_token",
        help="personal auth token for querying API",
        default=os.environ["GITHUB_TOKEN"],
    )

    args = parser.parse_args()

    downloaded = get_release_data(args.github_username, args.github_token)

    data = dict()

    for key in ["ref_plant_viruses", "virtool_hmm", "virtool"]:
        releases = downloaded[key]

        data[key] = {"latest": get_latest(releases), "releases": releases}

    with open(f"data/releases{RELEASE_FILE_NUMBER}.json", "w") as f:
        json.dump(data, f, indent=4)

    with open(f"static/releases{RELEASE_FILE_NUMBER}", "w") as f:
        json.dump({key: data[key]["releases"] for key in data}, f)
