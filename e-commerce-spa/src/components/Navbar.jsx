import React from "react";

function NavBar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <img
            src="./src/assets/elogo-bg.png"
            alt="logo"
            className="imageLogo"
          />
          <div className="navbarText">
            <h1>Angry Cats Emporium</h1>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
