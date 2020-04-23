import Alexa from 'ask-sdk-core';

export const SessionEndedRequestHandler = {
  canHandle(input) {
    return Alexa.getRequestType(input.requestEnvelope) === 'SessionEndedRequest';
  },
  handle(input) {
    // Any cleanup logic goes here.
    return input.responseBuilder.getResponse();
  }
};
