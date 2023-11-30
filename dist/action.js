"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performAction = void 0;
const graphql_1 = require("./graphql");
const rest_1 = require("./rest");
async function performAction(octokit, input) {
    let graphql = (0, graphql_1.createGraphql)(octokit, input.token);
    let discussions = await (0, graphql_1.fetchDiscussions)(graphql, input);
    let json = JSON.stringify(discussions);
    await (0, rest_1.createFile)(octokit, input, json);
    return json;
}
exports.performAction = performAction;
