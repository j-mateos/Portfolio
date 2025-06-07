import './Button.css'

export function Button ({ pathImage, text }) {
    return (
        <a className='button-a'>
            <img src={pathImage} alt="Button Icon" />
            <span>{text}</span>
        </a>
    )
}
