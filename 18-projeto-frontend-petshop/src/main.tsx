import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { ProductsProvider } from './contexts/ProductsContext.tsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <Toaster
        position='top-center'
        reverseOrder={false}
      />
      <App />
    </ProductsProvider>
  </React.StrictMode>,
)
