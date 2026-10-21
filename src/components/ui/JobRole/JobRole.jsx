export function JobRole({title, company, startDate, endDate, description}) {
    return (
        <li className="relative flex flex-col border-l border-(--text-color) pl-8 [&>span]:mb-2 [&>span]:font-[350] [&>span]:text-(--job-date-color) [&>ul]:mb-2 [&>ul]:list-none">
            <div className="absolute top-1.5 left-0 -translate-x-1/2 w-3.75 h-3.75 rounded-full shadow-[0_0_0_6px_var(--border-color,white)] bg-white"></div>
            <div className="flex items-baseline flex-nowrap gap-[0.8rem] mb-2 max-tablet:block **:shrink-0 [&>h3]:text-(--bold-color) [&>h3]:font-medium max-tablet:[&>h3]:mb-[0.8rem] [&>span:nth-child(3)]:text-(--job-company-color) [&>span:nth-child(3)]:font-medium">
                <h3>{title}</h3>
                <span className="max-tablet:hidden">-</span>
                <span>{company}</span>
            </div>
            <span>
                {startDate} - {endDate}
            </span>
            <ul>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </li>
    )
}
