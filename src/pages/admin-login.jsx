import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
    const navigate = useNavigate()
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
            return errors;
          }}
          onSubmit={(values) => {
            localStorage.setItem("adminData", JSON.stringify(values));
            console.log("admin user", values);
            navigate('/admin')
          }}
        >
          <Form className="adminForm">
            <div>
            <h1 className="text-left">Sign Up as Admin</h1>
                
            </div>
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

       </div>
            <button type="submit" className="signUpbtn">
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
