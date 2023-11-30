"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRepo = void 0;
function parseRepo(core, slug) {
    if (slug === "") {
        return null;
    }
    const [owner, name] = slug.split("/");
    return { owner, name };
}
exports.parseRepo = parseRepo;
