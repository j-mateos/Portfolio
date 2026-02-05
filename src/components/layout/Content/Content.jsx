import styles from './Content.module.css'
import {useTranslation} from 'react-i18next'
import image from '@/assets/images/personal.webp'
import {Subtitle} from '@/components/ui/Subtitle/Subtitle'
import {TechBadge} from '@/components/ui/TechBadge/TechBadge'
import {JobRole} from '@/components/ui/JobRole/JobRole'
import {LinkButton} from '@/components/ui/LinkButton/LinkButton'
import {AnimatedButton} from '@/components/ui/AnimatedButton/AnimatedButton'

export function Content() {
    const {t} = useTranslation()

    return (
        <main className={styles.content}>
            <section id="presentation" className={styles.presentation}>
                <div>
                    <img src={image} alt={t('presentation.photoAlt')} className={styles.image} />
                </div>
                <div>
                    <h1>{t('presentation.greeting')}</h1>
                    <p>
                        {t('presentation.p1.part1')}&nbsp;
                        <strong>{t('presentation.p1.bold1')}</strong>&nbsp;
                        {t('presentation.p1.part2')}
                        <br />
                        {t('presentation.p2.part1')}&nbsp;
                        <strong>{t('presentation.p2.bold1')}</strong>&nbsp;
                        {t('presentation.p2.part2')}&nbsp;
                        <strong>{t('presentation.p2.bold2')}</strong>
                        {t('presentation.p2.part3')}
                    </p>
                    <div className={styles.contentButtons}>
                        <AnimatedButton
                            text={t('presentation.emailBtn')}
                            backgroundText={t('presentation.emailBackgroundText')}
                            copyToClipboard="jm.matperez@gmail.com"
                            svgName="email"
                            svgSize={17}
                        />
                        <LinkButton
                            text="LinkedIn"
                            url="https://www.linkedin.com/in/jmateosperez/"
                            svgName="linkedIn"
                        />
                        <LinkButton
                            text="GitHub"
                            url="https://github.com/j-mateos"
                            svgName="gitHub"
                        />
                    </div>
                </div>
            </section>

            <section id="experience" className={styles.experience}>
                <Subtitle text={t('experience.title')} svgName="experience" />
                <ol>
                    <JobRole
                        title={t('experience.job1.title')}
                        company={t('experience.job1.company')}
                        startDate={t('experience.job1.startDate')}
                        endDate={t('experience.job1.endDate')}
                        description={[t('experience.job1.desc1')]}
                    />
                    <JobRole
                        title={t('experience.job2.title')}
                        company={t('experience.job2.company')}
                        startDate={t('experience.job2.startDate')}
                        endDate={t('experience.job2.endDate')}
                        description={[t('experience.job2.desc1'), t('experience.job2.desc2')]}
                    />
                    <JobRole
                        title={t('experience.job3.title')}
                        company={t('experience.job3.company')}
                        startDate={t('experience.job3.startDate')}
                        endDate={t('experience.job3.endDate')}
                        description={[t('experience.job3.desc1'), t('experience.job3.desc2')]}
                    />
                </ol>
            </section>

            <section id="technologies" className={styles.technologies}>
                <Subtitle text={t('technologies.title')} svgName="technologies" />
                <p>
                    {t('technologies.p1.part1')}&nbsp;
                    <strong>{t('technologies.p1.bold1')}</strong>&nbsp;
                    {t('technologies.p1.part2')}&nbsp;
                    {t('technologies.p2.part1')}&nbsp;
                    <strong>{t('technologies.p2.bold1')}</strong>&nbsp;
                    {t('technologies.p2.part2')}
                </p>
                <div>
                    <article>
                        <h3>{t('technologies.frontend')}</h3>
                        <aside>
                            <TechBadge text="HTML" svgName="html" />
                            <TechBadge text="CSS" svgName="css" />
                            <TechBadge text="Bootstrap" svgName="bootstrap" />
                            <TechBadge text="JavaScript" svgName="javascript" />
                            <TechBadge text="Figma" svgName="figma" />
                        </aside>
                    </article>
                    <article>
                        <h3>{t('technologies.backend')}</h3>
                        <aside>
                            <TechBadge text="Java" svgName="java" />
                            <TechBadge text="NodeJS" svgName="nodejs" />
                            <TechBadge text="Python" svgName="python" />
                            <TechBadge text="C++" svgName="c++" />
                            <TechBadge text="C" svgName="c" />
                            <TechBadge text="Ruby" svgName="ruby" />
                            <TechBadge text="PostgreSQL" svgName="postgresql" />
                            <TechBadge text="MySQL" svgName="mysql" />
                        </aside>
                    </article>
                    <article>
                        <h3>{t('technologies.tools')}</h3>
                        <aside>
                            <TechBadge text="Git" svgName="git" />
                            <TechBadge text="Bash" svgName="bash" />
                            <TechBadge text="VSCode" svgName="vscode" />
                        </aside>
                    </article>
                    <article>
                        <h3>{t('technologies.learning')}</h3>
                        <aside>
                            <TechBadge text="React" svgName="react" />
                            <TechBadge text="Spring" svgName="spring" />
                            <TechBadge text="Docker" svgName="docker" />
                            <TechBadge text="Kubernetes" svgName="kubernetes" />
                            <TechBadge text="AWS" svgName="aws" />
                        </aside>
                    </article>
                </div>
            </section>

            <section id="about-me" className={styles.aboutMe}>
                <Subtitle text={t('aboutMe.title')} svgName="aboutMe" />
                <div>
                    <p>
                        {t('aboutMe.p1.part1')}&nbsp;
                        <strong>{t('aboutMe.p1.bold1')}</strong>
                        {t('aboutMe.p1.part2')}&nbsp;
                        <strong>{t('aboutMe.p1.bold2')}</strong>
                        {t('aboutMe.p1.part3')}&nbsp;
                        <strong>{t('aboutMe.p1.bold3')}</strong>
                        {t('aboutMe.p1.part4')}&nbsp;
                        <strong>{t('aboutMe.p1.bold4')}</strong>&nbsp;
                        {t('aboutMe.p1.part5')}
                    </p>
                    <p>
                        {t('aboutMe.p2.part1')}&nbsp;
                        <strong>{t('aboutMe.p2.bold1')}</strong>
                        {t('aboutMe.p2.part2')}&nbsp;
                        <strong>{t('aboutMe.p2.bold2')}</strong>
                        {t('aboutMe.p2.part3')}
                    </p>
                </div>
            </section>
        </main>
    )
}
