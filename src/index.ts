import * as github from "@actions/github";
import * as core from "@actions/core";
import getInput from "./input";
import {performAction} from "./action";

try {
    const input = getInput(core);
    const octokit = github.getOctokit(input.token);

    (async () => core.setOutput("json", await performAction(octokit, input)))();
} catch (e: any) {
    core.setFailed(e.message);
}