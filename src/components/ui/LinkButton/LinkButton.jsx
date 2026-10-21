import {SvgIcon} from '../SvgIcon/SvgIcon'

export function LinkButton({text, url, svgName, svgSize = 15}) {
    return (
        <a
            href={url}
            className="flex justify-center items-center gap-2 py-1.5 px-4 border-none no-underline outline-[1px] outline-(--border-color) rounded-[50px] bg-(--background-color) text-(--text-color) font-medium [&>svg>path]:fill-(--text-color) hover:cursor-pointer hover:bg-(--text-color) hover:text-(--background-color) hover:[&>svg>path]:fill-(--background-color) transition-colors focus-visible:outline-2 focus-visible:outline-(--bold-color)"
            target="_blank"
            rel="noopener noreferrer"
        >
            <SvgIcon name={svgName} size={svgSize} />
            <span>{text}</span>
        </a>
    )
}
