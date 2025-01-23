
  
 
/**
 * node-modules
 */

 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * componens
 */

/**
 *  CSS links 
 */
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
