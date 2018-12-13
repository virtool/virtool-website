import argparse
import base64
import json
import os
import requests
import semver


MIN_VERSIONS = [
    ("virtool", "3.0.0"),
    ("ref-plant-viruses", "1.0.0"),
    ("virtool-hmm", "0.2.0")
]

RELEASE_KEYS = [
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

        formatted.update({
            "filename": asset["name"],
            "content_type": asset["content_type"],
            "size": asset["size"],
            "download_url": asset["browser_download_url"]
        })
    except (KeyError, IndexError):
        asset_error = True

    formatted["asset_error"] = asset_error

    return formatted


def get_release_data(username, token):
    release_data = dict()

    for repo, min_version in MIN_VERSIONS:
        key = repo.replace("-", "_")

        releases = list()

        for page in range(1, 5):
            url = f"https://api.github.com/repos/virtool/{repo}/releases?per_page=100&page={page}"

            body = requests.get(url, auth=(username, token)).json()

            if not body:
                break

            for release in body:
                if semver.compare(release["name"].replace("v", ""), min_version) > -1:                  
                    releases.append(release)

        releases = [format_release(r) for r in releases if r["assets"] and not r["draft"]]

        release_data[key] = releases

    return release_data


if __name__ == "__main__":
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "-u",
        dest="github_username",
        help="username for accessing github API",
        default=os.environ["GITHUB_USERNAME"]
    )

    parser.add_argument(
        "-t",
        dest="github_token",
        help="personal auth token for querying API",
        default=os.environ["GITHUB_TOKEN"]
    )

    args = parser.parse_args()

    downloaded = get_release_data(args.github_username, args.github_token)

    data = dict()

    for key in ["ref_plant_viruses", "virtool_hmm", "virtool"]:
        releases = downloaded[key]
        data[key] = {
            "latest": get_latest(releases),
            "releases": releases
        }

    with open("data/releases3.json", "w") as f:
        json.dump(data, f, indent=4)

    with open("static/releases3", "w") as f:
        json.dump({key: data[key]["releases"] for key in data}, f)
