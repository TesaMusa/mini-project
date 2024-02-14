import { useState } from "react";
import "./App.css";
import "./components/Navbar.css";
import "./components/Sidebar.css";
import "./components/Footer.css";
import "./pages/About.css";
import "./components/Products.css";

import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Details from "./components/Details";


function App() {
  return (
    <>
      <div className="App">
        {/* <h1>Angry Cats Emporium</h1> */}
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:productId" element={<Details />} />
          <Route path="*" element="page not found" />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
