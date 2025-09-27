/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/layout/App/App'
/* eslint-enable no-unused-vars */

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
