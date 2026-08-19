import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Services from "./Services";
import Contact from "./Contact";
import Home from "./Home";
import "./App.css"

const App = () => {
  return (
   <BrowserRouter> 
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Services" element={<Services/>} />
    <Route path="/Contact" element={<Contact/>} />
   </Routes>
   </BrowserRouter>
  );
};

export default App;
