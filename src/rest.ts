import {Input, Octokit} from "./types";
import {base64encode} from "nodejs-base64";

export async function createFile(octokit: Octokit, input: Input, contentString: string) {
    const content = base64encode(contentString).toString();

    octokit.rest.repos.createOrUpdateFileContents({
        owner: input.dest.owner,
        repo: input.dest.name,
        path: input.outputPath,
        message: `Created ${input.outputPath}`,
        content,
    });
}