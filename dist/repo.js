"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRepo = void 0;
function parseRepo(core, slug) {
    if (slug == "") {
        return null;
    }
    const pieces = slug.split("/");
    if (pieces.length != 2) {
        core.setFailed("Your repository slug should be formatted \"{owner}/{name}\".");
    }
    const [owner, name] = pieces;
    return { owner, name };
}
exports.parseRepo = parseRepo;
