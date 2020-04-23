import Alexa from 'ask-sdk-core';

export const CancelAndStopIntentHandler = {
  canHandle(input) {
    return Alexa.getRequestType(input.requestEnvelope) === 'IntentRequest' &&
      ['AMAZON.CancelIntent', 'AMAZON.StopIntent'].includes(Alexa.getIntentName(input.requestEnvelope));
  },
  handle(input) {
    const speakOutput = input.i18n('close');
    return input.responseBuilder.speak(speakOutput).getResponse();
  }
};
