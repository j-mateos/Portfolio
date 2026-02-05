import styles from './Footer.module.css'
import {useTranslation} from 'react-i18next'

export function Footer() {
    const {t} = useTranslation()

    return (
        <footer className={styles.footer}>
            <p>© Juan Manuel</p>
            <a href="#presentation">{t('footer.contact')}</a>
        </footer>
    )
}
