import React from "react";
import { HiThumbUp } from "react-icons/hi"



export const Success = () => {
    return (
        <div className="success border mt-20  border-yellow-700 flex">
            <div className="text-center align-middle">
                <HiThumbUp className="icon-thumpUp"/>
                <h1>Purchase Successful</h1>
                <p>Your Food will be delivered as you requested</p>
                <h2>Status <span className="text-yellow-700">Out for Delivery</span> </h2>
            </div>
        
                <img className="successImg" src="https://i.pinimg.com/564x/ea/9d/9f/ea9d9fd2740448f793f18e7fe1591404.jpg" alt="" />
        
        </div>
    )
}