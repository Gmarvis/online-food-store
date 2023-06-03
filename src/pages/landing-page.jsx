import React, { useContext } from "react";
import { FoodContext } from "../component/context";
import { useNavigate } from "react-router-dom";

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
          <div key={foodItem.id} className="foodItem border border-yellow-700  h-1/4 p-2 text-center rounded justify-center items-center object-scale-down"  >
            <img src={foodItem.image} alt={foodItem.name} className="card h-24 items-center mx-auto" />
            <h3 className="fItern text-yellow-600">{foodItem.name}</h3>
            <span>${foodItem.price}</span>
            <div>
              <button className="btn border border-yellow-700 text-yellow-700 p-1  hover:text-yellow-700 hover:bg-white" onClick={handDitails}>Detials</button>
            </div>
          </div>
        )
      })}
    </div>
  )
};




