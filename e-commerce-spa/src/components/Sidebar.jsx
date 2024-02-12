import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="sidebar-container">
        <ul className="sidebar-list">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/about" className="home">
            About
          </Link>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
