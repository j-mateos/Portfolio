import './Tool.css'

const svgs = import.meta.glob('../../../assets/svg/*.svg', { eager: true, import: 'default' })

export function Tool ({ text, svgName, svgSize = 45 }) {
    const src = svgs[`../../../assets/svg/${svgName}.svg`]
    return (
        <div className='tool'>
            <img src={src} width={svgSize} height={svgSize} />
            <p>{text}</p>
        </div>
    )
}
