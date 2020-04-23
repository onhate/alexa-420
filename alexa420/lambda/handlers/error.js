export const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(input, error) {
    console.error(error);
    const speakOutput = input.i18n('error');
    return input.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
};
