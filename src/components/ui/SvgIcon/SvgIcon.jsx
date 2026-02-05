import {svgMap} from './svgMap'

export function SvgIcon({name, size = 22}) {
    return (
        <svg width={size} height={size} viewBox={svgMap[name][1]}>
            {svgMap[name][0].map((d, i) => (
                <path key={i} d={d} fill="#f3f4f6" />
            ))}
        </svg>
    )
}
