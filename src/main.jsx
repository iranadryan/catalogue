import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const StudioPage = lazy(() => import('./studio/StudioPage.jsx'))

const isStudio = window.location.pathname.startsWith('/catalogue/studio')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={null}>
      {isStudio ? <StudioPage /> : <App />}
    </Suspense>
  </StrictMode>,
)
