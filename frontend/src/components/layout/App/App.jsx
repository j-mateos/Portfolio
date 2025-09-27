import './App.css'
import './variables.css'

/* eslint-disable no-unused-vars */
import { Header } from '../Header/Header'
import { Content } from '../Content/Content'
import { Footer } from '../Footer/Footer'
/* eslint-enable no-unused-vars */

export function App () {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    )
}
