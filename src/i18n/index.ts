import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import resources from './resources';

const defaultNS = 'translation';

const languageCode = getLocales()[0].languageCode;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: languageCode, // if you're using a language detector, do not define the lng option
    ns: [defaultNS],
    defaultNS,
    fallbackLng: 'en',
    pluralSeparator: '_',
    simplifyPluralSuffix: true,
    compatibilityJSON: 'v1',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export {resources, defaultNS};

export default i18n;
