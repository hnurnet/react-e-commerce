import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/checkout" element={<Checkout />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
