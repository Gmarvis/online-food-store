import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
// import * as Yup from 'yup';

export function Login() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const navigate = useNavigate();
  const params = useParams()
  

  const handleSubmit = () => {
    navigate(`/checkout/${params.name}`);
  };
  console.log(params.name)

  return (
    <div className="container flex flex-col text-center md:w-96 mx-auto border-2 p-2 rounded h-80 justify-between my-32 border-yellow-700">
      <h1 className="header ">Personal Details</h1>
      <p>and location for delivery</p>
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
        <Form className="form flex-1 flex flex-col text-center  justify-between">
          <Field
            className="field border p-1 rounded  outline-none text-sm "
            type="text"
            name="firstname"
            placeholder="Enter Firstname"
          ></Field>
          <ErrorMessage
            name="firstname"
            className=" error text-left italic font-thin text-base text-red-700"
            component="div"
          />

          <Field
            className="field border p-1 rounded  outline-none text-sm font-light"
            type="text"
            name="lastname"
            placeholder="Enter Lastname"
          ></Field>
          <ErrorMessage
            name="lastname"
            className=" error text-xs text-left italic font-thin text-red-700"
            component="div"
          />

          <Field
            className="field border p-1 rounded   outline-none text-sm font-light"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
          ></Field>
          <ErrorMessage
            name="email"
            className=" error text-left italic font-thin text-base text-red-700"
            component="div"
          />

          <Field
            className="field border p-1 rounded  outline-none text-sm font-light"
            type="location"
            name="location"
            placeholder="Location"
          ></Field>
          <ErrorMessage
            name="location"
            className=" error text-xs text-left italic font-thin text-red-700"
            component="div"
          />

          <button
            type="submit"
            onSubmit={handleSubmit}
            className="btn  bg-yellow-700 w-2/5 mx-auto text-red-50 rounded-2xl p-2 "
          >
            SUBMIT
          </button>
        </Form>
      </Formik>
    </div>
  );
}
