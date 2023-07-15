import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Footer } from "../component/footer/footer";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin-login");
  };

  return (
    <div className="pageContainer">
      <div className="subContainer">
        <div>
          <img
            src="https://i.pinimg.com/236x/71/bc/aa/71bcaade7211b258a4db2cdf4fc3348b.jpg"
            alt=""
          />
        </div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "username required";
            }

            if (!values.email) {
              errors.email = "email required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "enter password";
            }
            return errors;
          }}
          onSubmit={(values) => {
            localStorage.setItem("adminData", JSON.stringify(values));
            console.log("admin user", values);
            navigate("/admin");
          }}
        >
          <Form className="adminForm">
            <div>
              <h1 className="text-center text-yellow-700">Sign Up as Admin </h1>
            </div>
            <br />
            <div className="flex-1">
              <div>
                <Field
                  className="field"
                  type="text"
                  name="username"
                  placeholder="user name"
                ></Field>
                <ErrorMessage
                  name="username"
                  className=" error text-xs text-left italic font-thin text-red-700"
                  component="div"
                />
              </div>
              <br />
              <div>
                <Field
                  className="field"
                  type="email"
                  name="email"
                  placeholder="janedoe@email.com"
                ></Field>
                <ErrorMessage
                  name="email"
                  className=" error text-xs text-left italic font-thin text-red-700"
                  component="div"
                />
              </div>

              <br />
              <div>
                <Field
                  className="field"
                  type="password"
                  name="password"
                  placeholder="password"
                ></Field>
                <ErrorMessage
                  name="password"
                  className=" error text-xs text-left italic font-thin text-red-700"
                  component="div"
                />
              </div>
            </div>
            <div className="assesBtn">
              <button
                type="submit"
                className="signUpbtn w-20 border bg-yellow-700 text-white hover:bg-white hover:text-yellow-700 hover:border-yellow-700 transition-all"
              >
                Sign Up
              </button>
              <button
                className="signUpbtn w-20 border text-yellow-700 hover:bg-white hover:text-yellow-700 hover:border-yellow-700 transition-all"
                onClick={handleLogin}
              >
                login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
};
