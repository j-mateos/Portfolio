import './main.css'
import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import './i18n/i18n.js'
import {App} from './App'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
