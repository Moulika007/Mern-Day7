import React from 'react'
import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';

export default function App() {

 return (
    <>
    <BrowserRouter>
    <nav> 
      <Link to="/">Home</Link> | {" "}
      <Link to="/about">About </Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/product/10">Go to product 10</Link> |{" "}
      <Link to="/product/50">Go to Product 50 </Link>

     </nav>
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product/:id" element={<Product />}/>


     </Routes>
    </BrowserRouter>
    </>
  );
}
