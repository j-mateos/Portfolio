import './Footer.css'
import { useTranslation } from 'react-i18next'

export function Footer () {
    const { t } = useTranslation()

    return (
        <footer className='footer'>
            <p>© Juan Manuel</p>
            <a href='#presentation'>{t('footer.contact')}</a>
        </footer>
    )
}
