import { react } from "react";
import "./header.css";
import headerPic from "./headerPic.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerSection">
        <div>
          <div className="headerText">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h1>Fast Food Market Place</h1>
            <button>
              <a href="#foodCards">visit store</a>{" "}
            </button>
          </div>
        </div>
        <div className="headerImage">
          <img src={headerPic} alt="" />
        </div>
      </div>
    </div>
  );
};
