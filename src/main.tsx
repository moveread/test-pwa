import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const workerURL = new URL('/service-worker.js', import.meta.env.BASE_URL)
    console.log('Worker URL', workerURL)
    navigator.serviceWorker.register(workerURL)
      .then(registration => {
        console.log('[SW] Registered: ', registration);
      }).catch(registrationError => {
        console.log('[SW] Registration failed: ', registrationError);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
