import Alexa from 'ask-sdk-core';
import * as messages from './messages.json';
import i18n from 'i18next';

export const LocalizationRequestInterceptor = {
  async process(input) {
    const translate = await i18n.init({
      lng: Alexa.getLocale(input.requestEnvelope),
      resources: messages,
      returnObjects: true
    });
    input.i18n = (key, vars) => {
      const values = translate(key, vars);
      return Array.isArray(values) ? values[Math.floor(Math.random() * values.length)] : values;
    };
  }
};
