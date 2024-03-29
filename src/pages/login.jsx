import React from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";
// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Footer } from "../component/footer/footer";
// import * as Yup from 'yup';

export function Login() {
  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("userData"))
  // );
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = () => {
    navigate(`/checkout/${params.name}`);
  };
  console.log(params.name);

  return (
    <>
      <div className="formWrapper">
        <div className="textHeader">
          <p>for delivery</p>
          <h1>Enter location Details</h1>
        </div>

        <Formik
          // initial values with keys
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            location: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.firstname) {
              errors.firstname = "first name required";
            }

            if (!values.lastname) {
              errors.lastname = "last name required";
            }

            if (!values.location) {
              errors.location = "location is required";
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
          // handle submit
          onSubmit={(values) => {
            setTimeout(() => {
              localStorage.setItem("userData", JSON.stringify(values));
              handleSubmit(values);
              console.log(values);
            }, 1000);
          }}
        >
          <Form className="formik">
            <Field
              className="inputs"
              type="text"
              name="firstname"
              placeholder="Enter Firstname"
            ></Field>
            <ErrorMessage name="firstname" className=" error" component="div" />

            <Field
              className="inputs"
              type="text"
              name="lastname"
              placeholder="Enter Lastname"
            ></Field>
            <ErrorMessage name="lastname" className=" error" component="div" />

            <Field
              className="inputs"
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
            ></Field>
            <ErrorMessage name="email" className=" error" component="div" />

            <Field
              className="inputs"
              type="location"
              name="location"
              placeholder="Location"
            ></Field>
            <ErrorMessage name="location" className=" error" component="div" />

            <button type="submit" onSubmit={handleSubmit} className="btn">
              SUBMIT
            </button>
          </Form>
        </Formik>
        <Footer />
      </div>
    </>
  );
}
