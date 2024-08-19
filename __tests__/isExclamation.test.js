import {isExclamation} from "../index"

describe("Input is an exclamation", () => {
    it.each([
        ['Wow!'],
        ['Wow!!'],
        ['Just do it!']
    ])('%s', (input) => {
        expect(isExclamation(input)).toBe(true);
    });
});

describe("Input is not an exclamation", () => {
    it.each([
        ['Selected time is not being shown in dateTime picker'],
        [''],
        ['      '],
        ['This is a test sentence'],
        ['Does this look like a question?'],
        ['Is this an emotional question ?!'],
    ])('%s', (input) => {
        expect(isExclamation(input)).toBe(false);
    });
});
