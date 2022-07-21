import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let centerNav;

  centerNav = (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="navbar-middle-selections">Home</h1>
      </Link>
      <Link to="/tops" style={{ textDecoration: "none" }}>
        <h1 className="navbar-middle-selections">Tops</h1>
      </Link>
      <Link to="/bottoms" style={{ textDecoration: "none" }}>
        <h1 className="navbar-middle-selections">Bottoms</h1>
      </Link>
      <Link to="/accessories" style={{ textDecoration: "none" }}>
        <h1 className="navbar-middle-selections">Accessories</h1>
      </Link>
      <Link to="/sale" style={{ textDecoration: "none" }}>
        <h1 className="navbar-middle-selections sale">Sale</h1>
      </Link>
    </>
  );

  return (
    <div className="navbar-body">
      <div className="navbar-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p id="nav-logo">TEMPUS™</p>
        </Link>
      </div>
      <div className="navbar-middle">{centerNav}</div>
      <div className="navbar-right">
        <Link
          to="/basket"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            height="28"
            width="28"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" />
            <path d="M0 0h48v48H0z" fill="none" />
          </svg>
        </Link>
        {/* SVG source: Iconfinder.com */}
      </div>
    </div>
  );
};

export default Navbar;
