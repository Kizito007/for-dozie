import React, { useState } from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
// import ellipseGr from "./ellipseGr.svg"
import Header from './components/layouts/Header'
import { Routes, Route } from "react-router-dom";
import HomeScreen from './components/screens/HomeScreen'
import ScrollToTop from './components/screens/ScrollToTop'
import AboutScreen from './components/screens/AboutScreen'
import ProjectScreen from './components/screens/ProjectScreen'
import FaqScreen from './components/screens/FaqScreen'
import WebhubScreen from './components/screens/WebhubScreen'
import VendarScreen from './components/screens/VendarScreen'
import ResumeScreen from './components/screens/ResumeScreen'

function App() {

  const [theme, setTheme] = useState('light');
  const [light, setLight] = useState(true)

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark #121212bf #f9f9f9
    if (theme === 'light') {
      setLight(false)
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setLight(true)
      setTheme('light');
    }
  }

  let styles = {
    color: "#f9f9f9",
    background: "#121212bf",
    backdrop: "#121212"
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <Header light={light} toggleTheme={toggleTheme} styles={styles} />
    <div className="container">
    <ScrollToTop>

      <Routes>
        <Route path="/" element={<HomeScreen light={light} />} />
        <Route path="about" element={<AboutScreen styles={styles} light={light} />} />
        <Route path="projects" element={<ProjectScreen styles={styles} light={light} />} />
        <Route path="faq" element={<FaqScreen />} />
        <Route path="case-study/1" element={<WebhubScreen styles={styles} light={light}/>} />
        <Route path="case-study/2" element={<VendarScreen styles={styles} light={light}/>} />
      </Routes>
    </ScrollToTop>
    </div>
    <Routes>
      <Route path="resume" element={<ResumeScreen styles={styles} light={light}/>} />
    </Routes>

    {/* <img className='ellipse' src={ellipseGr}/> */}
    {/* <div className="elllipse"></div> */}
    </ThemeProvider>
  )
}

export default App
