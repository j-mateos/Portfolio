import {useState, useRef, useEffect} from 'react'
import {SvgIcon} from '../SvgIcon/SvgIcon'

const layer =
    'col-start-1 row-start-1 flex items-center gap-2 transition duration-300 motion-reduce:transition-none'

export function AnimatedButton({text, backgroundText, copyToClipboard, svgName, svgSize = 15}) {
    const [copied, setCopied] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => () => clearTimeout(timeoutRef.current), [])

    const handleClick = () => {
        if (!copyToClipboard) return

        navigator.clipboard
            .writeText(copyToClipboard)
            .then(() => {
                setCopied(true)
                clearTimeout(timeoutRef.current)
                timeoutRef.current = setTimeout(() => setCopied(false), 2000)
            })
            .catch((err) => console.error('Error copiando al portapapeles', err))
    }

    return (
        <button
            type="button"
            data-copied={copied}
            className="group grid place-items-center overflow-hidden rounded-[50px] border-none bg-(--background-color) px-4 py-1.5 font-medium text-(--text-color) outline-[1px] outline-(--border-color) transition-colors hover:cursor-pointer hover:bg-(--text-color) hover:text-(--background-color) focus-visible:outline-2 focus-visible:outline-(--bold-color) [&_svg_path]:fill-(--text-color) hover:[&_svg_path]:fill-(--background-color)"
            onClick={handleClick}
        >
            <span
                className={`${layer} group-data-[copied=true]:-translate-y-full group-data-[copied=true]:opacity-0`}
            >
                <SvgIcon name={svgName} size={svgSize} />
                <span>{text}</span>
            </span>
            <span
                aria-hidden="true"
                className={`${layer} translate-y-full opacity-0 group-data-[copied=true]:translate-y-0 group-data-[copied=true]:opacity-100`}
            >
                <SvgIcon name="check" size={svgSize} />
                <span>{backgroundText}</span>
            </span>
            <span role="status" className="sr-only">
                {copied ? backgroundText : ''}
            </span>
        </button>
    )
}
