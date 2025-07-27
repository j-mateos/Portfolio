import './Tool.css'

export function Tool ({ text, svgName, svgSize = 45 }) {
    return (
        <div className='tool'>
            <img src={'/assets/svg/' + svgName + '.svg'} width={svgSize} height={svgSize} />
            <p>{text}</p>
        </div>
    )
}
