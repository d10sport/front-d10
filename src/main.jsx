import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import Router from './routes/router/root.jsx'
import AppProvider from './context/context-provider.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <HashRouter >
    <AppProvider>
      <Router />
    </AppProvider>
  </HashRouter>
)
