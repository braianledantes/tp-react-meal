import "./i18n.config"
import { SearchProvider } from './context/SearchContext';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <SearchProvider>
      <App />
    </SearchProvider>
  </StrictMode>,
)
