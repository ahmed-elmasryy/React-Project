import { useState } from 'react'
import './App.css'
import EventCard from './components/EventCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './pages/Events';
import CreateEvent from './pages/CreateEvent';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <EventCard />
    </>
  )
}

export default App
