import React from 'react'
import './App.css'
import ellipseGr from "./ellipseGr.svg"
import Header from './components/layouts/Header'
import { Routes, Route } from "react-router-dom";
import HomeScreen from './components/screens/HomeScreen'
import AboutScreen from './components/screens/AboutScreen'
import FaqScreen from './components/screens/FaqScreen'
import WebhubScreen from './components/screens/WebhubScreen'

function App() {

  return (
    <>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="faq" element={<FaqScreen />} />
        <Route path="case-study/1" element={<WebhubScreen />} />
      </Routes>
    </div>
    {/* <img className='ellipse' src={ellipseGr}/> */}
    <div className="elllipse"></div>
    </>
  )
}

export default App
