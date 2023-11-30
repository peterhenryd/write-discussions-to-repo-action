"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const github_1 = __importDefault(require("@actions/github"));
const core_1 = __importDefault(require("@actions/core"));
const input_1 = __importDefault(require("./input"));
const action_1 = require("./action");
try {
    const input = (0, input_1.default)(core_1.default);
    const octokit = github_1.default.getOctokit(input.token);
    (async () => core_1.default.setOutput("json", await (0, action_1.performAction)(octokit, input)))();
}
catch (e) {
    core_1.default.setFailed(e.message);
}
