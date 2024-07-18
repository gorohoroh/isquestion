export const isQuestion = input => {
    input = input.trim();
    const questionWords = ['who', 'what', 'where', 'when', 'why', 'how'];
    const startsWithQuestionWord = questionWords.some(word => input.toLowerCase().startsWith(word + ' '));
    return input.endsWith('?') || startsWithQuestionWord;
}
