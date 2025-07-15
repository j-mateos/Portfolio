import './Subtitle.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Subtitle ({ text, svgName, svgSize = 30, svgColor = '#ffffff' }) {
    return (
        <div className='subtitle'>
            <Svg name={svgName} size={svgSize} color={svgColor} />
            <h2 style={{ color: svgColor }}>{text}</h2>
        </div>
    )
}
