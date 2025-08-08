import './Button.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Button ({ text, url, svgName, svgSize = 15, svgColors = ['#f3f4f6'] }) {
    return (
        <a href={url} className='button'>
            <Svg name={svgName} size={svgSize} colors={svgColors} />
            <span>{text}</span>
        </a>
    )
}
