import './Tool.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Tool ({ text, svgName, svgSize = 30, svgColor = '#ffffff' }) {
    return (
        <div className='tool'>
            <Svg name={svgName} size={svgSize} color={svgColor} />
            <p style={{ color: svgColor }}>{text}</p>
        </div>
    )
}
