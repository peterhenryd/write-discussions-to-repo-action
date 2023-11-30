import {Repo} from "./types";
import core from "@actions/core";

export function parseRepo(slug: string): Repo | null {
    if (slug == "") {
        return null;
    }

    const pieces = slug.split("/");

    if (pieces.length != 2) {
        core.setFailed("Your repository slug should be formatted \"{owner}/{name}\".");
    }

    const [owner, name] = pieces;

    return { owner, name }
}