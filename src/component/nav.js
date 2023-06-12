import React from "react";
// import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

export const Nav = ()=>{
    return (
        <nav className="navBar flex justify-between text-center  pt-3 bg-yellow-900 h-12 text-white px-4 align-middle ">
                {/* <img src={logo} alt="pic" /> */}
                {/* <i class="fa-regular fa-knife-kitchen"></i> */}
                <h1>FOODY</h1>
            <ul className="links flex content-evenly gap-5">
                <li className="links hover:underline"> <Link to="/">home</Link></li>
                <li className="links hover:underline" > <Link to="/products">Products</Link></li>
                <li className="links hover:underline" > <Link to="/admin"><i class="fa-solid fa-user"></i></Link></li>
                <li className="links hover:underline" > <Link to="/checkout"><i class="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
        </nav>
    )
}
