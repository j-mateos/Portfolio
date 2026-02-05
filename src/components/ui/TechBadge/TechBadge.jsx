import styles from './TechBadge.module.css'
import {useTheme} from '@/context/ThemeContext'

const svgs = import.meta.glob('../../../assets/icons/*.svg', {
    eager: true,
    import: 'default',
})
const iconVariants = ['aws', 'bash', 'mysql', 'react']

export function TechBadge({text, svgName, svgSize = 45}) {
    const [mode] = useTheme()
    const finalName = iconVariants.includes(svgName) ? `${svgName}_${mode}` : `${svgName}`
    const src = svgs[`../../../assets/icons/${finalName}.svg`]

    return (
        <div className={styles.techBadge}>
            <img src={src} width={svgSize} height={svgSize} />
            <p>{text}</p>
        </div>
    )
}
