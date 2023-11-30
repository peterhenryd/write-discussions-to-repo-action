"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repo_1 = require("./repo");
function getInput(core) {
    const repo = (0, repo_1.parseRepo)(core, core.getInput("repo"));
    return {
        token: core.getInput("token"),
        repo,
        dest: (0, repo_1.parseRepo)(core, core.getInput("dest")) ?? repo,
        categoryId: core.getInput("category-id"),
        queryFields: core.getInput("query-fields"),
        outputPath: core.getInput("output-path"),
    };
}
exports.default = getInput;
