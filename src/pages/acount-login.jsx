import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../component/footer/footer";

export const AcountLogin = () => {
  const [checkAcount, setCheckAcount] = React.useState({
    name: "",
    password: "",
  });

  const activeUser = JSON.parse(localStorage.getItem("adminData"));
  // console.log(activeUser);

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
          <h2>login as Admin</h2>
          <form action="" className="checkAcount" onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              className="loginInput"
              name="name"
              value={checkAcount.name}
              onChange={handleChange}
              placeholder="Username"
            />
            <label htmlFor="password"> Password</label>
            <input
              className="loginInput"
              type="password"
              id="password"
              name="password"
              value={checkAcount.password}
              onChange={handleChange}
              placeholder="Password"
            />

            <button className="abminBtn" onSubmit={handleSubmit}>
              login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
