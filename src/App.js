import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero";
import Sponsor_slider from "./Sponsor_slider";
import Footer from "./Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Schedule from "./Screens/Schedule";
import Error from "./Screens/ErrorPages/404";
import About from "./Screens/About";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="schedule" element={<Schedule />} />
        <Route path="about" element={<About />} />
        <Route path="" element={<Error />} />
        
      </Routes>
    </BrowserRouter>
    
     
    </>
  );
}

export default App;
