import input from "./input";
import github from "@actions/github";
import {performAction} from "./action";
import core from "@actions/core";

try {
    let octokit = github.getOctokit(input.token);

    (async () => core.setOutput("json", await performAction(octokit, input)))();
} catch (e: any) {
    core.setFailed(e.message);
}