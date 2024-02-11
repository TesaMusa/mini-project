import { useState } from "react";
import "./App.css";
import "./components/Navbar.css";
import "./components/Sidebar.css";
import "./components/Footer.css";

import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="App">
        {/* <h1>Angry Cats Emporium</h1> */}
        <NavBar />
        <SideBar />
        <Products />
      </div>
    </>
  );
}

export default App;
