import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
import { Admin } from "./pages/admin";
import { Checkout } from "./pages/checkout";
import { Product } from "./pages/products";
import { Nav } from "./component/nav";
import { useEffect, useState } from "react";
import { FoodContext } from "./component/context";
import { Login } from "./pages/login";
import { Success } from "./pages/success-purchase";

// const getimage = (name) => {
//   return `/assets/${name}.png`;
// };

function App() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("foodItems")) 
    setFoodItems(localData)
  }, []);

  return (
    <div className="main-section  h-screen">
      <div>
        <Nav />
      </div>
      <FoodContext.Provider value={{ foodItems, setFoodItems }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/:name" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products/:name" element={<Product />} />
          <Route path="/checkout/:name" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </FoodContext.Provider>
    </div>
  );
}

export default App;
