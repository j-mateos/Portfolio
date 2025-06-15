import './Button.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Button ({ name, text, url, size = 15, color = '#ffffff', viewBox = '0 -960 960 960' }) {
    return (
        <a href={url} className='button-a'>
            <Svg name={name} size={size} color={color} viewBox={viewBox} />
            <span>{text}</span>
        </a>
    )
}
