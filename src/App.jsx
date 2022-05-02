import React from 'react'
import './App.css'
import ellipseGr from "./ellipseGr.svg"
import Header from './components/layouts/Header'
import { Routes, Route } from "react-router-dom";
import HomeScreen from './components/screens/HomeScreen'
import AboutScreen from './components/screens/AboutScreen'
import ProjectScreen from './components/screens/ProjectScreen'

function App() {

  return (
    <>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="projects" element={<ProjectScreen />} />
      </Routes>
    </div>
    {/* <img className='ellipse' src={ellipseGr}/> */}
    <div className="elllipse"></div>
    </>
  )
}

export default App
