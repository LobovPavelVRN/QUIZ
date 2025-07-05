import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Root.tsx'
import './palette.scss';
import './locales/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
