import './Subtittle.css'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function Subtittle ({ name, text, size = 30, color = '#ffffff', viewBox = '0 -960 960 960' }) {
    return (
        <div className='subtittle-container'>
            <Svg name={name} size={size} color={color} viewBox={viewBox} />
            <h2>{text}</h2>
        </div>
    )
}
