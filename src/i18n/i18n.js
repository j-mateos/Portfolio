import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import HttpBackend from 'i18next-http-backend'

const DEFAULT_LANGUAGE = 'es'
const SUPPORTED_LANGUAGES = ['es', 'en']
const LANGUAGE_STORAGE_KEY = 'app-language'

const getInitialLanguage = () => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE
    const savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return SUPPORTED_LANGUAGES.includes(savedLang) ? savedLang : DEFAULT_LANGUAGE
}

i18n.use(HttpBackend)
    .use(initReactI18next)
    .init({
        lng: getInitialLanguage(),
        fallbackLng: 'en',
        supportedLngs: SUPPORTED_LANGUAGES,

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        ns: ['translation'],
        defaultNS: 'translation',

        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
