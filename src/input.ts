import core from "@actions/core";
import {Input} from "./types";
import {parseRepo} from "./repo";

const repo = parseRepo(core.getInput("repo"))!!;

const input: Input = {
    token: core.getInput("token"),
    repo,
    dest: parseRepo(core.getInput("dest")) ?? repo,
    categoryId: core.getInput("category-id"),
    queryFields: core.getInput("query-fields"),
    outputPath: core.getInput("output-path"),
}

export default input;