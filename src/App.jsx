import {Header} from '@/components/layout/Header/Header'
import {Content} from '@/components/layout/Content/Content'
import {Footer} from '@/components/layout/Footer/Footer'
import {ThemeProvider} from '@/context/ThemeContext'

export function App() {
    return (
        <ThemeProvider>
            <Header />
            <Content />
            <Footer />
        </ThemeProvider>
    )
}
