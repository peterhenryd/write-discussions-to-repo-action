export interface Repo {
    owner: string,
    name: string,
}

export interface Input {
    token: string,
    repo: Repo,
    dest: Repo,
    categoryId: string,
    queryFields: string,
    outputPath: string,
}

export interface PageInfo {
    hasNextPage: boolean,
    endCursor?: string,
}

export interface DiscussionsPage {
    nodes: any[],
    pageInfo: {
        hasNextPage: boolean,
        endCursor?: string,
    },
}

export interface Octokit {
    graphql: Graphql,
    rest: {
        repos: {
            createOrUpdateFileContents(
                params: {
                    owner: string
                    repo: string
                    path: string
                    message: string,
                    content: string,
                }
            ): void
        }
    }
}

export interface Core {
    getInput(id: string): string
    setFailed(message: string): void
}

export interface Graphql {
    (query: string): any,
    defaults(params: { headers: { authorization: string, }, }): Graphql
}