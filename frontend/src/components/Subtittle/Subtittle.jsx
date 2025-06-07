import './Subtittle.css'

export function Subtittle ({ pathImage, text }) {
    return (
        <div className='subtittle-container'>
            <img src={pathImage} alt="Subtittle Icon" />
            <h2>{text}</h2>
        </div>
    )
}
