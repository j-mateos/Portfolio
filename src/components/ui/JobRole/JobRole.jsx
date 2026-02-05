import styles from './JobRole.module.css'

export function JobRole({title, company, startDate, endDate, description}) {
    return (
        <li className={styles.jobRole}>
            <div className={styles.circle}></div>
            <div className={styles.title}>
                <h3>{title}</h3>
                <span>-</span>
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
