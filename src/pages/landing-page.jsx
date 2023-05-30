import React, { useContext } from "react";
import { FoodContext } from "../component/context";
import { useState } from "react";

export const LandingPage = () => {
    const { foodItems } = useContext(FoodContext);
    const [purchase, setPurchase] = useState([foodItems])


    const handlePurchase = () => {

    }


    return (
        <div className="foodCards flex flex-wrap justify-between gap-10 mt-3">
            {foodItems.map((foodItem) => {

                return (
                    <div key={foodItem.id} className="foodItem border border-yellow-700 w-1/5 h-1/4 p-2 text-center rounded" >
                        <img src={foodItem.image} alt={foodItem.name} className="card h-24" />
                        <h3 className="fItern text-yellow-600">{foodItem.name}</h3>

                        {/* <p>{foodItem.description}</p> */}

                        <span>${foodItem.price}</span>

                        <br></br>
                        <button className="btn border border-yellow-700 text-white rounded p-1 bg-yellow-700 hover:text-yellow-700 hover:bg-white" onClick={handlePurchase}>Detials</button>
                    </div>
                )
            })}
        </div>
    )
}




