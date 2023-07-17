import React, { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFooditerms } from "../component/context";
import { useEffect } from "react";

import { PaymentInputsContainer, usePaymentInputs } from "react-payment-inputs";

import { useNavigate } from "react-router-dom";
import { Footer } from "../component/footer/footer";

export const Checkout = () => {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();

  const navigate = useNavigate();
  const [purchaseFood, setPurchaseFood] = useState({});
  const { value } = useFooditerms();
  console.log("value", value);
  const params = useParams();

  useEffect(() => {
    const [selectedFood] = value.filter((food) => food.name === params.name);
    setPurchaseFood(selectedFood);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(meta);
    navigate("/success");
  };

  return (
    <>
      <div className="paymentSection">
        <div className="formMagin">
          <h1 className="mp">Make Payment</h1>
          <PaymentInputsContainer>
            {({
              meta,
              getCardNumberProps,
              getExpiryDateProps,
              getCVCProps,
            }) => (
              <div className="ppc">
                <input {...getCardNumberProps({})} />

                <input {...getExpiryDateProps({})} />

                <input {...getCVCProps({})} />
                {meta.isTouch && meta.error && <span>Error: {meta.error}</span>}
                <p>
                  Package Name:{" "}
                  <span className="text-yellow-700">{purchaseFood.name}</span>
                </p>
                <h2>
                  payment amount:{" "}
                  <span className="text-yellow-700">${purchaseFood.price}</span>
                </h2>
                <button onClick={handleSubmit} className="paymentBtn">
                  PAY
                </button>
              </div>
            )}
          </PaymentInputsContainer>
        </div>

        <img
          src="https://i.pinimg.com/564x/e9/e9/ee/e9e9ee23736effe7a6164ef974ab28ea.jpg"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
};
