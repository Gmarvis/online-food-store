import React from "react";
// import { useContext } from "react";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFooditerms } from "../component/context";
import { Footer } from "../component/footer/footer";

export const Product = () => {
  const { value } = useFooditerms();

  const navigate = useNavigate();
  const params = useParams();

  const handlePurcase = () => {
    // navigate('/login')

    navigate(`/login/${params.name}`);
  };

  const [foodDetail] = value.filter((food) => food.name === params.name);
  console.log(foodDetail);

  console.log("foodDetail ", foodDetail);

  return (
    <>
      <div className="puchaseSection">
        <div className="detailsCard">
          <div className="detailPicture">
            <img
              className="fdetails w-80 "
              src={foodDetail.image}
              alt={foodDetail.name}
            />
          </div>

          <div className="detailsSection">
            <h1>{foodDetail.name}</h1>
            <p>{foodDetail.detials}</p>
            <div className="priceAndBtn">
              <span>{`price $${foodDetail.price}`}</span>

              <button className="btn" onClick={handlePurcase}>
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
