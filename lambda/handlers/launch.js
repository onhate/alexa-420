import Alexa from 'ask-sdk-core';

export const LaunchRequestHandler = {
  canHandle(input) {
    return Alexa.getRequestType(input.requestEnvelope) === 'LaunchRequest';
  },
  handle(input) {
    const speakOutput1 = input.i18n('launch');
    const speakOutput2 = input.i18n('launch');
    return input.responseBuilder
      .speak(speakOutput1)
      .reprompt(speakOutput2)
      .getResponse();
  }
};
