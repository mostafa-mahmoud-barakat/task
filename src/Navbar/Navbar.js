import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="ms-5 me-5">
        <nav class=" bg-dark p-3 ">
          <button className="ms-3 bg-dark text-light border-none">Home</button>
          <button className="ms-3 bg-dark text-light border-none">
            contact US
          </button>
          <NavLink to="/AboutUS">
            <button className="ms-3 bg-dark text-light border-none">
              About Us
            </button>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
