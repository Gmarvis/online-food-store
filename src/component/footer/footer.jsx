import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footerContent">
          <div>
            <h1>Foody</h1>
            <p>The taste of your favorite fast food, without the wait.</p>
          </div>
          <div>
            <h2>follow us</h2>
            <div className="socialIcons">
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillTwitterSquare />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <p>Copyright ©2023. All rights reserved. Privacy & Terms.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
