import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFooditerms } from "../component/context";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";

export const LandingPage = () => {
  const [product, setProduct] = useState(null);
  const { value } = useFooditerms();
  const navigate = useNavigate();
  const [sellerBtn, setSellerBtn] = useState("");

  const sellerText = () => {
    const sell = localStorage.getItem("foodItems");
    if (!sell || sell === []) {
      setSellerBtn("looks like the shop is empty click here to setup shop...");
    } else {
      setSellerBtn("");
    }
  };

  const handlesetupShop = () => {
    if (localStorage.getItem("adminData")) {
      navigate("/admin-login");
    } else {
      navigate("/signup");
    }
  };

  useEffect(() => {
    setProduct(value);
    sellerText();
  }, []);

  return (
    <>
      <Header />
      <button className="sellingBtn" onClick={handlesetupShop}>
        {sellerBtn}
      </button>

      <div className="foodCards" id="foodCards">
        {product?.map((foodItem) => {
          const handDitails = () => {
            navigate(`./products/${foodItem.name}`);
          };
          return (
            <div key={foodItem.name} className="foodItem" onClick={handDitails}>
              <img
                src={foodItem.image}
                alt={foodItem.name}
                className="card h-24 items-center mx-auto"
              />

              <div className="baseInfor">
                <h3 className="fItern">{foodItem.name}</h3>
                <span>${foodItem.price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
