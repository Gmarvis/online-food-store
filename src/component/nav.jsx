import React from "react";
import { Link } from "react-router-dom";

export const Nav = ()=>{

    const handleLogout=()=>{
        localStorage.clear("userData")
    }


    return (
        <nav className="navBar flex justify-between text-center  pt-3 bg-yellow-700 h-12 text-white px-4 align-middle">
                <h1>FOODY</h1>
            <ul className="links flex content-evenly gap-5">
                <li className="links hover:underline"> <Link to="/">Home</Link></li>
                {/* <li className="links hover:underline" > <Link to="/login">Login</Link></li> */}

                <li><button className="links hover:underline" onClick={handleLogout}>logout</button></li>

                <li className="links hover:underline" > <Link to="/signup"><i class="fa-solid fa-user"></i></Link></li>
                <li className="links hover:underline" > <Link to="/checkout"><i class="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
        </nav>
    )
}
