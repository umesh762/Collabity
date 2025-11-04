import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Test Firebase connection in development
if (import.meta.env.DEV) {
  import('./testFirebase').then(() => {
    console.log('🔥 Firebase connection test complete');
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
