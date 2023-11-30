"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = void 0;
const nodejs_base64_1 = require("nodejs-base64");
async function createFile(octokit, input, contentString) {
    const content = (0, nodejs_base64_1.base64encode)(contentString).toString();
    octokit.rest.repos.createOrUpdateFileContents({
        owner: input.dest.owner,
        repo: input.dest.name,
        path: input.outputPath,
        message: `Created ${input.outputPath}`,
        content,
    });
}
exports.createFile = createFile;
