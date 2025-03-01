import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import {Payhere, AccountCategory} from "@payhere-js-sdk/client"

// Payhere Sandbox 
Payhere.init("1229530",AccountCategory.SANDBOX)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
     <App />
  </StoreContextProvider>
   
  </BrowserRouter>
  
)
