import Alexa from 'ask-sdk-core';
import { LaunchRequestHandler } from './handlers/launch';
import { HelloWorldIntentHandler } from './handlers/hello-world';
import { HelpIntentHandler } from './handlers/help';
import { CancelAndStopIntentHandler } from './handlers/cancel-and-stop';
import { SessionEndedRequestHandler } from './handlers/session-ended';
import { ErrorHandler } from './handlers/error';
import { LocalizationRequestInterceptor } from './interceptors/localization';

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .addRequestInterceptors(LocalizationRequestInterceptor)
  .lambda();
