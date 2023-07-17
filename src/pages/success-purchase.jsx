import React from "react";
import { HiThumbUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer/footer";

export const Success = () => {
  return (
    <div className="successPage">
      <div className="successtext">
        <HiThumbUp className="icon-thumpUp" />
        <h1>Purchase Successful</h1>
        <p>Your Food will be delivered as you requested</p>
        <h2>
          Status <span className="text-yellow-700">Out for Delivery</span>
        </h2>

        <button className="bts_btn">
          <Link to="/">Back to Store</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};
