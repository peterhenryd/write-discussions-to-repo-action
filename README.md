# write-discussions-to-repo-action

This GitHub action writes all the discussions of a repository to a JSON file in the repository.

## Inputs

| Name                                                  | Description                                                                                                                                                                 | Required | Default                                                                   |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------------------------------------------------------------------------|
| <div style="width: max-content;">`token`</div>        | The [token](https://github.com/settings/tokens) of an account which has access to the repositories. This action requires permission to read discussions and to write files. | Yes      | N/A                                                                       |
| <div style="width: max-content;">`repo`</div>         | The repository to fetch discussions from, and write to if `dest` is unspecified. Formatted `{owner}/{name}`.                                                                | Yes      | N/A                                                                       |
| <div style="width: max-content;">`dest`</div>         | The repository to write the emitted JSON to. Formatted `{owner}/{name}`.                                                                                                    | No       | Input for `repo`                                                          |
| <div style="width: max-content;">`categoryId`</div>   | The base64 encoded category ID of discussions to fetch. By default, all discussions from any category will be fetched.                                                      | No       | `""` (all categories)                                                     |
| <div style="width: max-content;">`query-fields`</div> | The GraphQL object fields to access when querying the discussion. See [here](https://docs.github.com/en/graphql/reference/objects#discussion) for additional fields.        | No       | `"title bodyHTML createdAt lastEditedAt author { ... on User { name } }"` |
| <div style="width: max-content;">`output-path`</div>  | The path to which the emitted JSON will be written to.                                                                                                                      | No       | `"discussions.json"`                                                      |

## Outputs

| Name   | Description                                                                                        |
|--------|----------------------------------------------------------------------------------------------------|
| `json` | The emitted JSON of the discussions. This output is equivalent to the content of the written file. |

## Example usage

In `.github/workflows/main.yml`:

```yaml
on:
  discussion:
    types: [ created, edited ]

jobs:
  discussions:
    runs-on: ubuntu-latest
    name: Writes discussions to file
    steps:
      - name: Write discussions step
        id: write_discussions
        uses: peterhenryd/write-discussions-to-repo-action
        with:
          token: "my_token"
          repo: "peterhenryd/peterhenryd-me"
          query-fields: "title id url"
          output-path: "data/discussions/urls.json"
```
