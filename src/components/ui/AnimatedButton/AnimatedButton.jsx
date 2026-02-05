import styles from '../LinkButton/LinkButton.module.css'
import {useState} from 'react'
import {SvgIcon} from '../SvgIcon/SvgIcon'

export function AnimatedButton({text, backgroundText, copyToClipboard, svgName, svgSize = 15}) {
    const [copied, setCopied] = useState(false)

    const handleClick = (e) => {
        if (copyToClipboard) {
            e.preventDefault()
            navigator.clipboard
                .writeText(copyToClipboard)
                .then(() => {
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                })
                .catch((err) => console.error('Error copiando al portapapeles', err))
        }
    }

    return (
        <a className={styles.linkButton} onClick={handleClick}>
            {copied ? (
                <>
                    <SvgIcon name="check" size={20} />
                    <span>{backgroundText}</span>
                </>
            ) : (
                <>
                    <SvgIcon name={svgName} size={svgSize} />
                    <span>{text}</span>
                </>
            )}
        </a>
    )
}
