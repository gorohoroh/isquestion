import {extractStackOverflowQuestionsAndAnswers} from "../index"

describe("Extracts StackOverflow questions and answers", () => {
    it.each([
        // Provided test cases
        ["Just a random string", []],
        ["A string that contains a random URL: https://account.bbc.com/tvcode", []],
        ["Maybe this will help?\n\nhttps://stackoverflow.com/a/61337975", ["https://stackoverflow.com/a/61337975"]],
        ["neo4jrb/neo4j) or [StackOverflow](https://stackoverflow.com/questions/ask?tags=neo4j.rb+neo4j+ruby)).", []],
        ["somewhere else like [stackoverflow](https://stackoverflow.com/)\\r", []],

        // Additional test cases
        // Case with multiple URLs including a valid StackOverflow URL
        ["Check this: https://stackoverflow.com/q/123456 and also this: https://example.com/path", ["https://stackoverflow.com/q/123456"]],

        // Case with multiple valid StackOverflow URLs
        ["Check these: https://stackoverflow.com/q/123456 and https://stackoverflow.com/a/654321", ["https://stackoverflow.com/q/123456", "https://stackoverflow.com/a/654321"]],

        // Case with StackOverflow question URL with a slug
        ["Check this question: https://stackoverflow.com/questions/123456/some-slug-text", ["https://stackoverflow.com/questions/123456/some-slug-text"]],

        // Case with StackOverflow question URL with an anchor
        ["Check this answer: https://stackoverflow.com/questions/123456/some-slug-text#answer-789012", ["https://stackoverflow.com/questions/123456/some-slug-text#answer-789012"]],

        // Case with StackOverflow URL with a comment anchor
        ["Check this comment: https://stackoverflow.com/questions/123456#comment-345678", ["https://stackoverflow.com/questions/123456#comment-345678"]],

        // Case with invalid StackOverflow URL pattern
        ["This should not match: https://stackoverflow.com/questions/ask", []],

        // Case with subdomain StackOverflow URL
        ["Mobile version: https://mobile.stackoverflow.com/questions/123456", ["https://mobile.stackoverflow.com/questions/123456"]],

        // Case with nested valid StackOverflow URL
        ["Nested URL: <a href='https://stackoverflow.com/q/123456'>link</a>", ["https://stackoverflow.com/q/123456"]],

        // Case with a very long string but valid StackOverflow URL within limit
        ["Long string " + "a".repeat(9990) + " https://stackoverflow.com/q/123456", ["https://stackoverflow.com/q/123456"]],

        // Case with exactly 10000 characters and valid StackOverflow URL
        ["Long string " + "a".repeat(9983) + " https://stackoverflow.com/q/123456", ["https://stackoverflow.com/q/123456"]],

        // Case with a string exceeding 10000 characters
        ["Very long string " + "a".repeat(10001), "Error"],
    ])('%s', (input, output) => {
        if (output === "Error") {
            expect(() => extractStackOverflowQuestionsAndAnswers(input)).toThrow();
        } else {
            expect(extractStackOverflowQuestionsAndAnswers(input)).toEqual(output);
        }
    });
});
