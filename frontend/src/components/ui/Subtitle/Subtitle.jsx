import './Subtitle.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Subtitle ({ text, svgName, svgSize = 30, svgColors = ['#f3f4f6'] }) {
    return (
        <div className='subtitle'>
            <Svg name={svgName} size={svgSize} colors={svgColors} />
            <h2>{text}</h2>
        </div>
    )
}
