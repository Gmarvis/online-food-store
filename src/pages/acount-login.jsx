import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../component/footer/footer";

export const AcountLogin = () => {
  const [checkAcount, setCheckAcount] = React.useState({
    name: "",
    password: "",
  });

  const activeUser = JSON.parse(localStorage.getItem("adminData"));
  console.log(activeUser);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCheckAcount({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      checkAcount.name === activeUser.name &&
      checkAcount.password === activeUser.password
    ) {
      navigate("/admin");
    } else {
      alert("wrong password and user Name");
    }
  };

  return (
    <>
      <div>
        <div className="login">
          <img
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
            alt=""
          />
          <div>
            <form action="" className="checkAcount" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                value={checkAcount.name}
                onChange={handleChange}
                placeholder="enter name"
              />

              <input
                type="password"
                id="password"
                name="password"
                value={checkAcount.password}
                onChange={handleChange}
                placeholder="enter password"
              />

              {/* <button>Login</button> */}
              <button
                className="signUpbtn w-20 border text-yellow-700 hover:bg-white hover:text-yellow-700 hover:border-yellow-700 transition-all"
                onSubmit={handleSubmit}
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
