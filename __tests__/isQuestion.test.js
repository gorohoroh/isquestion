import {isQuestion} from "../index"

describe("Input is a question", () => {
    it.each([
        ['Run Lint from the command line?'],
        ['How to handle dynamic variables in useQuery?'],
        ['How to refresh a fragment ?'],
        ['matches() function not working correctly!?'],
        ['?'],
        ['   ?   '],
        ['Is this a question???'],
        ['What is 2 + 2?'],
        ['Can you help me with this, please?'],
        ['This is a question, right?'],
        ['Are you sure this is correct?'],
        ['This is a statement. Is this a question?'],
        ['First statement. Second statement?'],
        ['What does @ mean?'],
        ['Is # trending?'],
        ['Is 42 the answer to everything?']
    ])('%s', (input) => {
        expect(isQuestion(input)).toBe(true);
    });
});

describe("Input is not a question", () => {
    it.each([
        ['Selected time is not being shown in dateTime picker'],
        ['X-forwared-for shows Cloudflare IP instead of real IP'],
        ['Pyright type checking does not pass (causing Pylance in vscode to show typing errors)'],
        [''],
        ['      '],
        ['This is not a question!'],
        ['This is a test sentence'],
        ['Here is another example'],
        ['This is a statement, not a question.'],
        ['Just an exclamation mark!'],
        ['This is the first sentence. Here is another.'],
        ['Another example. More text here.'],
        ['Special character @'],
        ['Hash symbol #'],
        ['The number 42 is significant.'],
        ['Counting: 1, 2, 3.']
    ])('%s', (input) => {
        expect(isQuestion(input)).toBe(false);
    });
});
