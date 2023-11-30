import {Core, Repo} from "./types";

export function parseRepo(core: Core, slug: string): Repo | null {
    if (slug === "") {
        return null;
    }

    const [owner, name] = slug.split("/");

    return { owner, name }
}