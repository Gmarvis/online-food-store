import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
import { Admin } from "./pages/admin";
import { Checkout } from "./pages/checkout";
import { Product } from "./pages/products";
import { Nav } from "./component/nav";
import { useState } from "react";
import { FoodContext } from "./component/context";
import { Login } from "./pages/login";
import { Success } from "./pages/success-purchase";


const getimage = (name) => {
  return `/assets/${name}.png`;
};

function App() {
  const [foodItems, setFoodItems] = useState([
    {
      id: 0,
      name: "chicken",
      price: 20,
      image: getimage("iterm7"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 1,
      name: "fruits",
      price: 600,
      image: getimage("iterm1"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 2,
      name: "Hamburger",
      price: 600,
      image: getimage("iterm6"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 3,
      name: "burger sliced",
      price: 600,
      image: getimage("iterm12"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 4,
      name: "salat",
      price: 70,
      image: getimage("iterm13"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 5,
      name: "rice and chicken",
      price: 80,
      image: getimage("iterm14"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 6,
      name: "Pizza Clipart",
      price: 15,
      image: getimage("iterm10"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 7,
      name: "fruit juice",
      price: 60,
      image: getimage("iterm4"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 8,
      name: "watermolon",
      price: 40,
      image: getimage("iterm3"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 9,
      name: "fried rice",
      price: 30,
      image: getimage("iterm6"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 10,
      name: "chicken",
      price: 20,
      image: getimage("iterm7"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
    {
      id: 11,
      name: "fried rice",
      price: 30,
      image: getimage("iterm6"),
      description:
        "makes more food products more accessible to more people than ever before.",
    },
  ]);

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
