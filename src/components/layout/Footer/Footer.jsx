import {useTranslation} from 'react-i18next'

export function Footer() {
    const {t} = useTranslation()

    return (
        <footer className="mx-auto my-20 flex max-w-1/2 min-w-(--min-width) justify-between *:mx-12 *:opacity-70">
            <p>© Juan Manuel</p>
            <a
                href="#presentation"
                className="text-(--text-color) no-underline hover:cursor-pointer hover:opacity-100"
            >
                {t('footer.contact')}
            </a>
        </footer>
    )
}
