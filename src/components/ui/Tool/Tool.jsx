import './Tool.css'
import { useTheme } from '../../layout/App/ThemeContext.jsx'

const svgs = import.meta.glob('../../../assets/svg/*.svg', {
    eager: true,
    import: 'default'
})
const iconVariants = ['aws', 'bash', 'mysql', 'react']

export function Tool ({ text, svgName, svgSize = 45 }) {
    const [mode] = useTheme()
    const finalName = iconVariants.includes(svgName)
        ? `${svgName}_${mode}`
        : `${svgName}`
    const src = svgs[`../../../assets/svg/${finalName}.svg`]

    return (
        <div className='tool'>
            <img src={src} width={svgSize} height={svgSize} />
            <p>{text}</p>
        </div>
    )
}
