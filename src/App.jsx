import React from 'react'
import './App.css'
import Header from './components/layouts/Header'
import HomeScreen from './components/screens/HomeScreen'

function App() {

  return (
    <>
    <Header />
    <div className="container">
      <HomeScreen />
    </div>
    </>
  )
}

export default App
