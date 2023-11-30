"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRepo = void 0;
const core_1 = __importDefault(require("@actions/core"));
function parseRepo(slug) {
    if (slug == "") {
        return null;
    }
    const pieces = slug.split("/");
    if (pieces.length != 2) {
        core_1.default.setFailed("Your repository slug should be formatted \"{owner}/{name}\".");
    }
    const [owner, name] = pieces;
    return { owner, name };
}
exports.parseRepo = parseRepo;
