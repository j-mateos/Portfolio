import './Subtittle.css'

import { Svg } from '../Svg/Svg'

export function Subtittle ({ name, text, size = 30, color = '#ffffff', viewBox = '0 -960 960 960' }) {
    return (
        <div className='subtittle-container'>
            <Svg name={name} size={size} color={color} viewBox={viewBox} />
            <h2>{text}</h2>
        </div>
    )
}
