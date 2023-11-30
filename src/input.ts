import {Core, Input} from "./types";
import {parseRepo} from "./repo";

function getInput(core: Core): Input {
    const repo = parseRepo(core, core.getInput("repo"))!!;

    return {
        token: core.getInput("token"),
        repo,
        dest: parseRepo(core, core.getInput("dest")) ?? repo,
        categoryId: core.getInput("category-id"),
        queryFields: core.getInput("query-fields"),
        outputPath: core.getInput("output-path"),
    };
}

export default getInput;