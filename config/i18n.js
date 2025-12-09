import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'

const getInitialLanguage = () => {
    const savedLang = localStorage.getItem('app-language')
    if (savedLang === 'es' || savedLang === 'en') return savedLang
    return 'es'
}

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        lng: getInitialLanguage(),
        fallbackLng: 'en',
        supportedLngs: ['es', 'en'],

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },

        ns: ['translation'],
        defaultNS: 'translation',

        interpolation: {
            escapeValue: false
        }
    })

export default i18n
