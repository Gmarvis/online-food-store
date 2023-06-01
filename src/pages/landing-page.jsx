import React, { useContext } from "react";
import { FoodContext } from "../component/context";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

export const LandingPage = () => {
  const { foodItems } = useContext(FoodContext);
  const navigate = useNavigate()

  return (
    <div className="foodCards ">
      {foodItems.map((foodItem) => {

        // handle click navigation to product detail page.
        const handDitails = () => {
          navigate(`./products/${foodItem.name}`)

        }
        return (
          <div key={foodItem.id} className="foodItem border border-yellow-700 w-1/5 h-1/4 p-2 text-center rounded" >
            <img src={foodItem.image} alt={foodItem.name} className="card h-24" />
            <h3 className="fItern text-yellow-600">{foodItem.name}</h3>
            <span>${foodItem.price}</span>

            <br></br>
            <button className="btn border border-yellow-700 text-white rounded p-1 bg-yellow-700 hover:text-yellow-700 hover:bg-white" onClick={handDitails}>Detials</button>
          </div>
        )
      })}
    </div>
  )
};




