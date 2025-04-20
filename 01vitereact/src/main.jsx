import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(                      //React creates it's own virtual DOM and root of that is div with id root of index.html file
  <StrictMode>
    <App />
  </StrictMode>,
)
