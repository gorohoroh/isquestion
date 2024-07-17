import {isQuestion} from "../index"

describe("Input is a question", () => {
    it.each([
        ['Run Lint from the command line?'],
        ['How to handle dynamic variables in useQuery?'],
        ['How to refresh a fragment ?'],
        ['matches() function not working correctly!?'],
        ['?'],
        ['   ?   '],
        ['Is this a question???']
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
        ['This is not a question!']
    ])('%s', (input) => {
        expect(isQuestion(input)).toBe(false);
    });
});
