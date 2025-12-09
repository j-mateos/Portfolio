import { createRoot } from 'react-dom/client'
import '../config/i18n'

/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { App } from './components/layout/App/App'
/* eslint-enable no-unused-vars */

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
