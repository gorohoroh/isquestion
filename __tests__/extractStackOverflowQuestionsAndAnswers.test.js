import {extractStackOverflowQuestionsAndAnswers} from "../index"

describe("Extracts StackOverflow questions and answers", () => {
    it.each([
        ["Just a random string", []],
        ["A string that contains a random URL: https://account.bbc.com/tvcode", []],
        ["Maybe this will help?\n\nhttps://stackoverflow.com/a/61337975", ["https://stackoverflow.com/a/61337975"]],
        ["neo4jrb/neo4j) or [StackOverflow](https://stackoverflow.com/questions/ask?tags=neo4j.rb+neo4j+ruby)).", []],
        ["somewhere else like [stackoverflow](https://stackoverflow.com/)\\r", []],
    ])('%s', (input, output) => {
        expect(extractStackOverflowQuestionsAndAnswers(input)).toEqual(output);
    });
});
