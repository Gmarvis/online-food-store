import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
import { Admin } from "./pages/admin";
import { Checkout } from "./pages/checkout";
import { Product } from "./pages/products";
import { Nav } from "./component/nav";
import { FoodProvider, useLocalStorage } from "./component/context";
import { Login } from "./pages/login";
import { AdminLogin } from "./pages/admin-login"
import { Success } from "./pages/success-purchase";

function App() {
  const { value, setValue } = useLocalStorage("foodItems", "adminData", []);

  return (
    <div className="main-section  h-screen">
      <div>
        <Nav />
      </div>
      <FoodProvider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/:name" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products/:name" element={<Product />} />
          <Route path="/checkout/:name" element={<Checkout />} />
          <Route path="/signup" element={<AdminLogin />} />

          <Route path="/success" element={<Success />} />
        </Routes>
      </FoodProvider>
    </div>
  );
}

export default App;
