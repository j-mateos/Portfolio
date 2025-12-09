import './App.css'

/* eslint-disable no-unused-vars */
import { Header } from '../Header/Header'
import { Content } from '../Content/Content'
import { Footer } from '../Footer/Footer'
import { ThemeProvider } from './ThemeContext.jsx'
/* eslint-enable no-unused-vars */

export function App () {
    return (
        <ThemeProvider>
            <Header />
            <Content />
            <Footer />
        </ThemeProvider>
    )
}
