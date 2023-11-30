import {DiscussionsPage, Graphql, Input, Octokit, PageInfo} from "./types";

export function createGraphql(octokit: Octokit, token: string): Graphql {
    const newDefaults = {
        headers: {
            authorization: `token ${token}`,
        },
    };

    return octokit.graphql.defaults(newDefaults);
}

async function fetchDiscussionsPage(graphql: Graphql, input: Input, endCursor?: string): Promise<DiscussionsPage | null> {
    if (endCursor) {
        endCursor = `, after: "${endCursor}"`;
    } else {
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

export async function fetchDiscussions(graphql: Graphql, input: Input): Promise<any[]> {
    let discussions = [];
    let pageInfo: PageInfo = { hasNextPage: true };

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