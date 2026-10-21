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
        <main className="mx-auto mt-30 max-w-1/2 min-w-(--min-width) [&>section]:scroll-mt-12.5 [&>section]:p-12 max-tablet:[&>section]:flex max-tablet:[&>section]:flex-col max-tablet:[&>section]:items-center wide:[&>section]:flex wide:[&>section]:flex-col wide:[&>section]:items-center">
            <section
                id="presentation"
                className="flex items-center justify-center gap-12 tablet:max-desktop:flex-wrap wide:flex-row!"
            >
                <div>
                    <img
                        src={image}
                        alt={t('presentation.photoAlt')}
                        className="max-w-60 rounded-[50%]"
                    />
                </div>
                <div className="max-tablet:text-center">
                    <h1 className="mb-6 text-(length:--xlarge-font-size) font-bold whitespace-nowrap">
                        {t('presentation.greeting')}
                    </h1>
                    <p className="mb-8 w-93.5 [&>strong]:font-medium [&>strong]:text-(--bold-color)">
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
                    <div className="flex gap-4">
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

            <section id="experience">
                <Subtitle text={t('experience.title')} svgName="experience" />
                <ol className="ml-[0.8rem] flex flex-col gap-6">
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

            <section id="technologies">
                <Subtitle text={t('technologies.title')} svgName="technologies" />
                <p className="mb-10 max-tablet:text-center wide:text-center [&>strong]:font-medium [&>strong]:text-(--bold-color)">
                    {t('technologies.p1.part1')}&nbsp;
                    <strong>{t('technologies.p1.bold1')}</strong>&nbsp;
                    {t('technologies.p1.part2')}&nbsp;
                    {t('technologies.p2.part1')}&nbsp;
                    <strong>{t('technologies.p2.bold1')}</strong>&nbsp;
                    {t('technologies.p2.part2')}
                </p>
                <div className="grid w-full grid-cols-2 gap-6 max-desktop:grid-cols-1">
                    <article className="rounded-2xl bg-(--technology-background-color) p-8 pb-16 outline-1 outline-solid outline-(--border-color)">
                        <h3 className="mb-10 text-center text-(length:--large-font-size) font-bold">
                            {t('technologies.frontend')}
                        </h3>
                        <aside className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-6">
                            <TechBadge text="React" svgName="react" />
                            <TechBadge text="JavaScript" svgName="javascript" />
                            <TechBadge text="Bootstrap" svgName="bootstrap" />
                            <TechBadge text="HTML" svgName="html" />
                            <TechBadge text="CSS" svgName="css" />
                            <TechBadge text="Figma" svgName="figma" />
                        </aside>
                    </article>
                    <article className="rounded-2xl bg-(--technology-background-color) p-8 pb-16 outline-1 outline-solid outline-(--border-color)">
                        <h3 className="mb-10 text-center text-(length:--large-font-size) font-bold">
                            {t('technologies.backend')}
                        </h3>
                        <aside className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-6">
                            <TechBadge text="Java" svgName="java" />
                            <TechBadge text="Spring" svgName="spring" />
                            <TechBadge text="NodeJS" svgName="nodejs" />
                            <TechBadge text="Python" svgName="python" />
                            <TechBadge text="C++" svgName="c++" />
                            <TechBadge text="C" svgName="c" />
                            <TechBadge text="Ruby" svgName="ruby" />
                            <TechBadge text="PostgreSQL" svgName="postgresql" />
                            <TechBadge text="MySQL" svgName="mysql" />
                        </aside>
                    </article>
                    <article className="rounded-2xl bg-(--technology-background-color) p-8 pb-16 outline-1 outline-solid outline-(--border-color)">
                        <h3 className="mb-10 text-center text-(length:--large-font-size) font-bold">
                            {t('technologies.tools')}
                        </h3>
                        <aside className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-6">
                            <TechBadge text="Git" svgName="git" />
                            <TechBadge text="Docker" svgName="docker" />
                            <TechBadge text="Bash" svgName="bash" />
                            <TechBadge text="VSCode" svgName="vscode" />
                        </aside>
                    </article>
                    <article className="rounded-2xl bg-(--technology-background-color) p-8 pb-16 outline-1 outline-solid outline-(--border-color)">
                        <h3 className="mb-10 text-center text-(length:--large-font-size) font-bold">
                            {t('technologies.learning')}
                        </h3>
                        <aside className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-6">
                            <TechBadge text="Kubernetes" svgName="kubernetes" />
                            <TechBadge text="AWS" svgName="aws" />
                        </aside>
                    </article>
                </div>
            </section>

            <section id="about-me" className="max-tablet:text-center wide:text-center">
                <Subtitle text={t('aboutMe.title')} svgName="aboutMe" />
                <div className="[&>p:first-child]:mb-6 [&>p>strong]:font-normal [&>p>strong]:text-(--bold-color)">
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
