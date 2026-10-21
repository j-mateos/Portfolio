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
        <div className="flex flex-col items-center justify-center gap-2.5 [&>p]:whitespace-nowrap">
            <img
                src={src}
                alt=""
                style={{width: svgSize, height: svgSize}}
                className="object-contain"
            />
            <p>{text}</p>
        </div>
    )
}
