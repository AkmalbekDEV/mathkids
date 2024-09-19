import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
