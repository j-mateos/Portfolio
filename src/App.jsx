import {Header} from '@/components/layout/Header/Header'
import {Content} from '@/components/layout/Content/Content'
import {Footer} from '@/components/layout/Footer/Footer'
import {ThemeProvider} from '@/context/ThemeContext'
import {SpeedInsights} from '@vercel/speed-insights/react'

export function App() {
    return (
        <ThemeProvider>
            <Header />
            <Content />
            <Footer />
            <SpeedInsights />
        </ThemeProvider>
    )
}
