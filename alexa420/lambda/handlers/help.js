import Alexa from 'ask-sdk-core';

export const HelpIntentHandler = {
  canHandle(input) {
    return (
      Alexa.getRequestType(input.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(input.requestEnvelope) === 'AMAZON.HelpIntent'
    );
  },
  handle(input) {
    const speakOutput = input.i18n('help');
    return input.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
};
