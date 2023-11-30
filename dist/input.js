"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const repo_1 = require("./repo");
const repo = (0, repo_1.parseRepo)(core_1.default.getInput("repo"));
const input = {
    token: core_1.default.getInput("token"),
    repo,
    dest: (0, repo_1.parseRepo)(core_1.default.getInput("dest")) ?? repo,
    categoryId: core_1.default.getInput("category-id"),
    queryFields: core_1.default.getInput("query-fields"),
    outputPath: core_1.default.getInput("output-path"),
};
exports.default = input;
