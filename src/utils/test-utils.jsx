import {render} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import {ThemeProvider} from '../context/ThemeContext'
import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'

// i18n instance but configured for tests
const i18nMock = i18next.createInstance()
i18nMock.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'es',
    ns: ['translation'],
    defaultNS: 'translation',
    resources: {
        es: {translation: {}},
        en: {translation: {}},
    },
    interpolation: {
        escapeValue: false,
    },
})

const AllTheProviders = ({children}) => {
    return (
        <ThemeProvider>
            <I18nextProvider i18n={i18nMock}>{children}</I18nextProvider>
        </ThemeProvider>
    )
}

const customRender = (ui, options) => {
    return render(ui, {wrapper: AllTheProviders, ...options})
}

export * from '@testing-library/react'
export {customRender as render}
