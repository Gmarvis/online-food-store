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
      <p>create your acount</p>
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

// export const Login = () => {
// 	const formik = useFormik({
// 		initialValues: {
// 			name: "sadfajsdf",
// 			email: "",
// 			number: "",
// 			location: "",
// 		},

// 		onSubmit: function (handleSubmit) {
// 			console.log(handleSubmit)
// 			alert(
// 				"thank for purchasing your food will be delivered at your requested time"
// 			)
// 		},
// 	});
// 	return (
// 				<div className="paymentFoformik.handleSubmitrm mt-20 m-auto">
// 					<form
// 						onSubmit={formik.handleSubmit}
// 						className="form flex-1 gap-30 border border-yellow-700 w-fit p-2"
// 					>
// 						<h1>Personal Details</h1>
// 						<div className="fied flex-1">
// 							<label for="name">Full Name</label>
// 							<br></br>
// 							<input
// 								type="text"
// 								name="name"
// 								id="name"
// 								className={`fl ${formik.touched.name && formik.errors.name
// 									? "border-red-400"
// 									: "border-gray-300"
// 									}`}
// 							/>
// 						</div>

// 						<div>
// 							<label for="name">Email</label>
// 							<br></br>
// 							<input
// 								type="email"
// 								name="email"
// 								id="email"
// 								className={`${formik.touched.email && formik.errors.email
// 									? "border-red-400"
// 									: "border-gray-300"
// 									}`}

// 							/>
// 							{formik.touched.email && formik.errors.email && (
// 								<span className="text-red-400">{formik.errors.email}</span>
// 							)}
// 						</div>

// 						<div>
// 							<label for="name">Number</label>
// 							<br></br>
// 							<input
// 								type="number"
// 								name="number"
// 								id="number"
// 								className={`${formik.touched.number && formik.errors.number
// 									? "border-red-400"
// 									: "border-gray-300"
// 									}`}

// 							/>
// 							{formik.touched.number && formik.errors.number && (
// 								<span className="text-red-400">{formik.errors.number}</span>
// 							)}
// 						</div>

// 						<div>
// 							<label for="name">Location</label>
// 							<br></br>
// 							<input
// 								type="location"
// 								name="location"
// 								id="location"
// 								className={`${formik.touched.location && formik.errors.location
// 									? "border-red-400"
// 									: "border-gray-300"
// 									}`}
// 							/>

// 							{/* {formik.touched.location && formik.errors.location && (
// 								<span className="text-red-400">
// 									{formik.errors.location}
// 								</span>
// 							)} */}
// 						</div>
// 						<div className="text-center">
// 							<button className="rounded p-3 " type="submit">
// 								Submit
// 							</button>
// 						</div>
// 					</form>
// 					<img src="" alt="" />
// 				</div>
// 	)
// }
