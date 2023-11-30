"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = __importDefault(require("./input"));
const github_1 = __importDefault(require("@actions/github"));
const action_1 = require("./action");
const core_1 = __importDefault(require("@actions/core"));
try {
    let octokit = github_1.default.getOctokit(input_1.default.token);
    (async () => core_1.default.setOutput("json", await (0, action_1.performAction)(octokit, input_1.default)))();
}
catch (e) {
    core_1.default.setFailed(e.message);
}
