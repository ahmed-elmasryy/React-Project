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
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent'
import MyEvents from './pages/MyEvents';
import {initialEvents} from './Event';
function App() {
  const [events,setEvents] = useState(initialEvents)
  return (
    <Router>
      <Navbarcomp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Events" element={<Events events={events} />} />
        <Route path="/CreateEvent" element={<CreateEvent events={events} setEvents={setEvents} />} />
        <Route path="/MyEvents" element={<MyEvents />} />
        <Route path="/Events/:id" element={<EventDetails events={events}/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
