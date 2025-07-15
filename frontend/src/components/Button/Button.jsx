import './Button.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Button ({ text, url, svgName, svgSize = 15, svgColor = '#ffffff' }) {
    return (
        <a href={url} className='button'>
            <Svg name={svgName} size={svgSize} color={svgColor} />
            <span>{text}</span>
        </a>
    )
}
