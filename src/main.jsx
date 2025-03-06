import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/app'
import './style/index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
