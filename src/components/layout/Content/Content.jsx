import './Content.css'
import { useTranslation } from 'react-i18next'

/* eslint-disable no-unused-vars */
import { Subtitle } from '../../ui/Subtitle/Subtitle'
import { Tool } from '../../ui/Tool/Tool'
import { Job } from '../../ui/Job/Job'
import { LinkButton } from '../../ui/LinkButton/LinkButton'
import { AnimatedButton } from '../../ui/AnimatedButton/AnimatedButton'
/* eslint-enable no-unused-vars */

import image from '../../../assets/photo.webp'

export function Content () {
    const { t } = useTranslation()

    return (
        <main className='content'>
            <section id='presentation' className='content-presentation'>
                <div>
                    <img
                        src={image}
                        alt={t('presentation.photoAlt')}
                        className='content-image' />
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
                    <div className='content-buttons'>
                        <AnimatedButton
                            text={t('presentation.emailBtn')}
                            copyToClipboard='correojumape@gmail.com'
                            svgName='email'
                            svgSize={17} />
                        <LinkButton
                            text='LinkedIn'
                            url='https://www.linkedin.com/in/juan-manuel-m-971493268/'
                            svgName='linkedIn' />
                        <LinkButton
                            text='GitHub'
                            url='https://github.com/Trajano1999'
                            svgName='gitHub' />
                    </div>
                </div>
            </section>

            <section id='experience'>
                <Subtitle text={t('experience.title')} svgName='experience' />
                <ol className='content-experience'>
                    <Job
                        title={t('experience.job1.title')}
                        company={t('experience.job1.company')}
                        startDate={t('experience.job1.startDate')}
                        endDate={t('experience.job1.endDate')}
                        description={[
                            t('experience.job1.desc1')
                        ]} />
                    <Job
                        title={t('experience.job2.title')}
                        company={t('experience.job2.company')}
                        startDate={t('experience.job2.startDate')}
                        endDate={t('experience.job2.endDate')}
                        description={[
                            t('experience.job2.desc1'),
                            t('experience.job2.desc2')
                        ]} />
                    <Job
                        title={t('experience.job3.title')}
                        company={t('experience.job3.company')}
                        startDate={t('experience.job3.startDate')}
                        endDate={t('experience.job3.endDate')}
                        description={[
                            t('experience.job3.desc1'),
                            t('experience.job3.desc2')
                        ]} />
                </ol>
            </section>

            <section id='technologies'>
                <Subtitle text={t('technologies.title')} svgName='technologies' />
                <p>
                    {t('technologies.p1.part1')}&nbsp;
                    <strong>{t('technologies.p1.bold1')}</strong>&nbsp;
                    {t('technologies.p1.part2')}&nbsp;
                    {t('technologies.p2.part1')}&nbsp;
                    <strong>{t('technologies.p2.bold1')}</strong>&nbsp;
                    {t('technologies.p2.part2')}
                </p>
                <div className='content-technologies'>
                    <article>
                        <h3>{t('technologies.frontend')}</h3>
                        <aside>
                            <Tool text='HTML' svgName='html' />
                            <Tool text='CSS' svgName='css' />
                            <Tool text='Bootstrap' svgName='bootstrap' />
                            <Tool text='JavaScript' svgName='javascript' />
                            <Tool text='Figma' svgName='figma' />
                        </aside>
                    </article>
                    <article>
                        <h3>{t('technologies.backend')}</h3>
                        <aside>
                            <Tool text='Java' svgName='java' />
                            <Tool text='NodeJS' svgName='nodejs' />
                            <Tool text='Python' svgName='python' />
                            <Tool text='C++' svgName='c++' />
                            <Tool text='C' svgName='c' />
                            <Tool text='Ruby' svgName='ruby' />
                            <Tool text='PostgreSQL' svgName='postgresql' />
                            <Tool text='MySQL' svgName='mysql' />
                        </aside>
                    </article>
                    <article>
                        <h3>{t('technologies.tools')}</h3>
                        <aside>
                            <Tool text='Git' svgName='git' />
                            <Tool text='Bash' svgName='bash' />
                            <Tool text='VSCode' svgName='vscode' />
                        </aside>
                    </article>
                    <article>
                        <h3>{t('technologies.learning')}</h3>
                        <aside>
                            <Tool text='React' svgName='react' />
                            <Tool text='Spring' svgName='spring' />
                            <Tool text='Docker' svgName='docker' />
                            <Tool text='Kubernetes' svgName='kubernetes' />
                            <Tool text='AWS' svgName='aws' />
                        </aside>
                    </article>
                </div>
            </section>

            <section id='about-me'>
                <Subtitle text={t('aboutMe.title')} svgName='aboutMe' />
                <div className='content-about-me'>
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
