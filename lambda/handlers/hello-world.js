import Alexa from 'ask-sdk-core';

export const HelloWorldIntentHandler = {
  canHandle(input) {
    return (
      Alexa.getRequestType(input.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(input.requestEnvelope) === 'HelloWorldIntent'
    );
  },
  handle(handlerInput) {
    const speakOutput = 'Hello World!';
    return (
      handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse()
    );
  }
};
