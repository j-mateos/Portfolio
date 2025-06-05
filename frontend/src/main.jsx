/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

// Components
import { Menu } from './components/Menu/Menu'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Menu />
        <div className='prueba'>Hola</div>
    </StrictMode>
)
