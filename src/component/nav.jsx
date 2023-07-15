import React from "react";
import { Link } from "react-router-dom";
// import { useLocalStorage } from "./context";

export const Nav = () => {
  let adminUser = JSON.parse(localStorage.getItem("adminData"));
  let routTo = "";
  // !adminUser ? (routTo = "/signup") : (routTo = "/admin-login");

  if (adminUser === null) {
    routTo = "/signup";
  } else {
    routTo = "/admin-login";
  }
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
          <Link to={routTo}>
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
