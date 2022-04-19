import React from 'react'
import './App.css'
import Header from './components/layouts/Header'
import { Routes, Route } from "react-router-dom";
import HomeScreen from './components/screens/HomeScreen'
import AboutScreen from './components/screens/AboutScreen'

function App() {

  return (
    <>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
      </Routes>
    </div>
    </>
  )
}

export default App
