import argparse
import base64
import json
import requests

RELEASE_KEYS = [
    "name",
    "body",
    "draft",
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

    for repo, key in [("virtool", "software"), ("virtool-database", "database"), ("virtool-hmm", "hmm")]:
        release_data[key] = list()

        releases = list()

        for i in range(1, 5):
            url = "https://api.github.com/repos/virtool/{}/releases?per_page=100&page={}".format(repo, i)
            body = requests.get(url, auth=(username, token)).json()

            if not body:
                break

            releases += body

        releases = [format_release(r) for r in releases if r["assets"]]

        releases = [r for r in releases if not r["draft"]]

        for release in releases:
            release.pop("draft")

        release_data[key] = releases

    return release_data


def update_website_json(data, username, token):
    url = "https://api.github.com/repos/virtool/virtool-website/contents/_data/releases.json"

    body = requests.get(url, auth=(username, token)).json()

    import pprint
    pprint.pprint(body)

    sha = body["sha"]

    encoded = base64.standard_b64encode(json.dumps(data).encode()).decode("ascii")

    requests.put(url, auth=(username, token), json={
        "message": "Update releases.json",
        "committer": {
            "name": "Travis Build",
            "email": "dev@virtool.ca"
        },
        "content": encoded,
        "sha": sha
    })


def download_database_release(url, path):
    resp = requests.get(url, stream=True)

    raw = resp.raw

    with open(path, "wb") as f:
        while True:
            chunk = raw.read(1024, decode_content=True)

            if not chunk:
                break

            f.write(chunk)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()

    parser.add_argument(
        dest="github_username",
        help="username for accessing github API"
    )

    parser.add_argument(
        dest="github_token",
        help="personal auth token for querying API"
    )

    args = parser.parse_args()

    downloaded = get_release_data(args.github_username, args.github_token)

    data = dict()

    for key in ["database", "hmm", "software"]:
        releases = downloaded[key]
        data[key] = {
            "latest": get_latest(releases),
            "releases": releases
        }

    with open("data/releases.json", "w") as f:
        json.dump(data, f, indent=4)

    with open("static/releases", "w") as f:
        json.dump({key: data[key]["releases"] for key in data}, f)

    latest_database_url = data["database"]["latest"]["download_url"]
    
    download_database_release(latest_database_url, "./viruses.json.gz")
