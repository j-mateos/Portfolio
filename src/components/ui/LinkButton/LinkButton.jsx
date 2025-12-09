import './LinkButton.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function LinkButton ({ text, url, svgName, svgSize = 15 }) {
    return (
        <a href={url} className='link-button' target='_blank' rel='noopener noreferrer'>
            <Svg name={svgName} size={svgSize} />
            <span>{text}</span>
        </a>
    )
}
