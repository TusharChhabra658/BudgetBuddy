import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from "@clerk/clerk-react"

const PUBLISHABLE_KEY = "pk_test_bWludC1zaWxrd29ybS03NC5jbGVyay5hY2NvdW50cy5kZXYk";

if(!PUBLISHABLE_KEY){
  throw new Error("Missing publishable key !");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey= "pk_test_bWludC1zaWxrd29ybS03NC5jbGVyay5hY2NvdW50cy5kZXYk">
      <App />
    </ClerkProvider>
  </StrictMode>
)
