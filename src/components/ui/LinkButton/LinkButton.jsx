import styles from './LinkButton.module.css'
import {SvgIcon} from '../SvgIcon/SvgIcon'

export function LinkButton({text, url, svgName, svgSize = 15}) {
    return (
        <a href={url} className={styles.linkButton} target="_blank" rel="noopener noreferrer">
            <SvgIcon name={svgName} size={svgSize} />
            <span>{text}</span>
        </a>
    )
}
