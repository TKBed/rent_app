import React from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RentPage from './RentPage'

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="header">BMT Rental</div>
        </header>
        <div className="spacing-header" />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rent" element={<RentPage />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  )
}

export default App
