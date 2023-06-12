import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFooditerms } from "../component/context";

export const Product = () => {
  // const [foodDetail, setFoodDetail] = useState({});
  const { value } = useFooditerms();
  // console.log("foodItems", foodItems);

  const navigate = useNavigate();
  const params = useParams();
  // console.log("THis is our", params.name);

  const handlePurcase = () => {
    // navigate('/login')
 
      navigate(`/login/${params.name}`);
  
  };

const [foodDetail] = value.filter((food) => food.name === params.name);
console.log(foodDetail)


  console.log("foodDetail ", foodDetail);

  return (
    <div className="pDetail border mt-5 border-yellow-700 p-2 w-fit m-auto">
      <h1 className="hd text-xl text-yellow-700">Food Details</h1>
      <div>
        <img
          className="fdetails w-80 "
          src={foodDetail.image}
          alt={foodDetail.name}
        />
        <h1>{foodDetail.name}</h1>
        <p>{foodDetail.detials}</p>
        <span>${foodDetail.price}</span>
        <br></br>
        <button
          className="btn border border-yellow-700 rounded p-1 text-yellow-700 bg-white"
          onClick={handlePurcase}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};
