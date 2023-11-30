"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDiscussions = exports.createGraphql = void 0;
function createGraphql(octokit, token) {
    const newDefaults = {
        headers: {
            authorization: `token ${token}`,
        },
    };
    return octokit.graphql.defaults(newDefaults);
}
exports.createGraphql = createGraphql;
async function fetchDiscussionsPage(graphql, input, endCursor) {
    if (endCursor) {
        endCursor = `, after: "${endCursor}"`;
    }
    else {
        endCursor = "";
    }
    let result = await graphql(`
        query {
            repository(owner: "${input.repo.owner}", name: "${input.repo.name}") {
                discussions(first: 100${input.categoryId ?? ""}${endCursor}) {
                    nodes {
                        ${input.queryFields}
                    }

                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                }
            }
        }
    `);
    if (!result.repository.discussions) {
        return null;
    }
    return result.repository.discussions;
}
async function fetchDiscussions(graphql, input) {
    let discussions = [];
    let pageInfo = { hasNextPage: true };
    if (input.categoryId !== "") {
        input.categoryId = `, categoryId: "${input.categoryId}"`;
    }
    while (pageInfo.hasNextPage) {
        const discussionsPage = await fetchDiscussionsPage(graphql, input, pageInfo.endCursor);
        if (!discussionsPage) {
            break;
        }
        pageInfo = discussionsPage.pageInfo;
        discussions.push(...discussionsPage.nodes);
    }
    return discussions;
}
exports.fetchDiscussions = fetchDiscussions;
