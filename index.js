import urlRegex from "url-regex";

export const isQuestion = input => {
    input = input.trim();
    const questionWords = ['who', 'what', 'where', 'when', 'why', 'how'];
    const startsWithQuestionWord = questionWords.some(word => input.toLowerCase().startsWith(word + ' '));
    return input.endsWith('?') || startsWithQuestionWord;
}

export const extractStackOverflowLinks = input => {
    if(typeof input !== "string") {
        throw new Error("Can't extract URLs from something that's not a string. Please provide a string instead");
    }

    if(input.length > 10000) {
        throw new Error("The provided string is too long, please try something shorter")
    }

    const regex = urlRegex({strict: false});
    const urls = input.match(regex);

    if (!urls) {
        return []
    }

    const stackOverflowLinks = [];

    const SO_DOMAIN = "http(s?)://((mobile\\.)?)stackoverflow\\.com/";
    const SO_TYPE = "(questions|q|a)/";
    const SO_QUESTION_TEXT = "(/[a-z0-9%\\-]{1,}){0,1}";
    const SO_NUMBER = "\\d{1,10}";
    const SO_ANCHOR_PREFIXES = "(comment|answer-){0,1}";

    const stackOverflowUrlPattern = new RegExp(
        SO_DOMAIN +
        SO_TYPE +
        SO_NUMBER +
        SO_QUESTION_TEXT +
        "(/" +
        SO_NUMBER +
        "){0,1}(#" +
        SO_ANCHOR_PREFIXES +
        SO_NUMBER +
        "){0,1}"
    );

    for (const url of urls) {
        if (stackOverflowUrlPattern.test(url)) {
            stackOverflowLinks.push(url);
        }
    }

    return stackOverflowLinks;
};

