import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbarcomp from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbarcomp />
      <Routes>
        <Route path="/Home" element={<div>Home Page</div>} />
        <Route path="/Events" element={<div>Events Page</div>} />
        <Route path="/CreateEvent" element={<div>Create Event Page</div>} />
        <Route path="/MyEvents" element={<div>My Events Page</div>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
