import {SvgIcon} from '../SvgIcon/SvgIcon'

export function Subtitle({text, svgName, svgSize = 30}) {
    return (
        <div className="mb-8 flex items-center gap-3.5 [&>svg>path]:fill-(--text-color)">
            <SvgIcon name={svgName} size={svgSize} />
            <h2 className="text-(length:--large-font-size) font-bold">{text}</h2>
        </div>
    )
}
