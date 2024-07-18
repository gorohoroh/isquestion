import {extractStackOverflowLinks} from "../index"

describe("Extracts StackOverflow links", () => {
    it.each([
        ["Just a random string", []],
        ["A string that contains a random URL: https://account.bbc.com/tvcode", []],
        ["Maybe this will help?\n\nhttps://stackoverflow.com/a/61337975", ["https://stackoverflow.com/a/61337975"]],
    ])('%s', (input, output) => {
        expect(extractStackOverflowLinks(input)).toEqual(output);
    });
});
