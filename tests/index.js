const {token, repo, dest} = require("./env.json");
const {Octokit} = require("octokit");
const {performAction} = require("../dist/action");

let octokit = new Octokit({ auth: token, });

async function test() {
    await performAction(octokit, {
        token,
        repo,
        dest,
        categoryId: "",
        queryFields: "title bodyHTML createdAt lastEditedAt author { ... on User { name } }",
        outputPath: "data.json",
    });
}

(async () => await test())();