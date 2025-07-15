/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './variables.css'
import './main.css'

import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import { Footer } from './components/Footer/Footer'
/* eslint-enable no-unused-vars */

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <Content />
        <Footer />
    </StrictMode>
)
