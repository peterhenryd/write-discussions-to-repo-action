import {Input, Octokit} from "./types";
import {createGraphql, fetchDiscussions} from "./graphql";
import {createFile} from "./rest";

export async function performAction(octokit: Octokit, input: Input): Promise<string> {
    let graphql = createGraphql(octokit, input.token);
    let discussions = await fetchDiscussions(graphql, input);
    let json = JSON.stringify(discussions);

    await createFile(octokit, input, json);

    return json;
}