import styles from './Subtitle.module.css'
import {SvgIcon} from '../SvgIcon/SvgIcon'

export function Subtitle({text, svgName, svgSize = 30}) {
    return (
        <div className={styles.subtitle}>
            <SvgIcon name={svgName} size={svgSize} />
            <h2>{text}</h2>
        </div>
    )
}
