import './Job.css'

export function Job ({ title, company, startDate, endDate, description }) {
    return (
        <li className='job'>
            <div className='job-circle'></div>
            <div className='job-title'>
                <h3>{title}</h3>
                <span>-</span>
                <span>{company}</span>
            </div>
            <span>{startDate} - {endDate}</span>
            <ul>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </li>
    )
}
