import logo from './logo.svg'
import './App.css'
import Nav from './Nav.jsx'
import Hero from './Hero'
import Sponsor_slider from './Sponsor_slider'
import Footer from './Footer'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import Schedule from './Screens/Schedule'
import Error from './Screens/ErrorPages/404'
import About from './Screens/About'
import TeamsPage from './Screens/TeamsPage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Apppromo from './Screens/app'

function App() {
  AOS.init()

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({})
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="team" element={<TeamsPage />} />
          <Route path="about" element={<About />} />
          <Route path="app" element={<Apppromo />} />
          <Route path="" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
