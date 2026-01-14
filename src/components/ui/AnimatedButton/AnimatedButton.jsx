import '../LinkButton/LinkButton.css'
import { useState } from 'react'

/* eslint-disable no-unused-vars */
import { Svg } from '../Svg/Svg'
/* eslint-enable no-unused-vars */

export function AnimatedButton ({ text, backgroundText, copyToClipboard, svgName, svgSize = 15 }) {
    const [copied, setCopied] = useState(false)

    const handleClick = (e) => {
        if (copyToClipboard) {
            e.preventDefault()
            navigator.clipboard.writeText(copyToClipboard)
                .then(() => {
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                })
                .catch(err => console.error('Error copiando al portapapeles', err))
        }
    }

    return (
        <a className='link-button' onClick={handleClick}>
            {copied
                ? (
                    <>
                        <Svg name='check' size={20} />
                        <span>{backgroundText}</span>
                    </>
                )
                : (
                    <>
                        <Svg name={svgName} size={svgSize} />
                        <span>{text}</span>
                    </>
                )}

        </a>
    )
}
