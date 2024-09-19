import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import i18next from 'i18next'
import global_uz from './translations/uz/global.json'
import global_ru from './translations/ru/global.json'

const App = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "uz",
    resources: {
      uz: {
        global: global_uz
      },
      ru: {
        global: global_ru
      }
    },
  });

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App