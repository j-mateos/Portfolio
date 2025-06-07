/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

// Components
import { Menu } from './components/Menu/Menu'
import { Content } from './components/Content/Content'
import { End } from './components/End/End'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Menu />
        <Content />
        <End />
    </StrictMode>
)
