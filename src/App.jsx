import './App.css'
import React, { useState } from 'react'
import Header from './Components/Header/Header'
import TopScroll from './Components/TopScroll/TopScroll'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className="app">
      <TopScroll />
      <Header />
      <div className="main-pages">
        <Home />
        <About />
      </div>
    </div>
  )
}

export default App
