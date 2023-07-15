import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navBar">
      <h1 className="logo">FOODY</h1>
      <ul className="links flex content-evenly gap-5">
        <li className="links hover:underline">
          {" "}
          <Link to="/">Home</Link>
        </li>

        <li className="links hover:underline">
          {" "}
          <Link to="/signup">
            <i class="fa-solid fa-user"></i>
          </Link>
        </li>
        <li className="links hover:underline">
          {" "}
          <Link to="/checkout">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
