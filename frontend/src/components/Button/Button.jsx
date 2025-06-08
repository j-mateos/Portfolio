import './Button.css'

import { Svg } from '../Svg/Svg'

export function Button ({ name, text, size = 15, color = '#ffffff', viewBox = '0 -960 960 960' }) {
    return (
        <a className='button-a'>
            <Svg name={name} size={size} color={color} viewBox={viewBox} />
            <span>{text}</span>
        </a>
    )
}
