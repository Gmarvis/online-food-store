import React, { useContext } from "react";
import { useState } from "react";
// import { GiCancel } from "react-icons/gi";
import { FoodContext } from "../component/context";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Admin = () => {
  const { value, setValue } = useContext(FoodContext);
  // const [product, setProduct] = useState()

  const [showForm, setShowForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    detials: "",
  });

  // iterms id
  // const generateId = Math.floor(Math.random()*10)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
  };

  const conver2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await conver2base64(file);
    console.log(base64);

    setProductData((prev) => ({ ...prev, image: base64 }));
  };

  const clearForm = (event) => {
    const { image } = event.target;
    // console.clear();
    console.log(event);
    image.value = "";
    setProductData({
      name: "",
      price: "",
      image: "",
      detials: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !productData.name ||
      !productData.price ||
      !productData.image ||
      !productData.detials
    ) {
      alert("inconplete form");
      return;
    }

    // handle delete
    console.clear();
    console.log(productData);

    setValue(productData);
    setProductData({
      name: "",
      price: "",
      image: "",
      detials: "",
    });
    setShowAddForm((prev) => !prev);
    // clearForm(event);
  };

  // handle delete iterms
  const handleDelete = (name) => {
    const localData = JSON.parse(localStorage.getItem("foodItems"));

    const update = localData?.filter((iterm) => {
      return iterm.name !== name;
    });

    localStorage.setItem("foodItems", JSON.stringify(update));
    setValue("");
  };

  const adminData = JSON.parse(localStorage.getItem("adminData"));
  console.clear();
  console.log(adminData);

  return (
    <div className="admin-dashboard">
      <div className="profile-section">
        <div>
          <h2>{adminData.username}</h2>
          <p>{adminData.email}</p>
        </div>
        <button
          className="profileBtn"
          onClick={() => setShowForm((prev) => !prev)}
        >
          Edit Profile
        </button>

        {showForm && (
          <div className="pageContainer">
            <div className="subContainer">
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
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  localStorage.setItem("adminData", JSON.stringify(values));
                  setShowForm((prev) => !prev);
                  console.log("admin user", values);
                  // navigate('/admin')
                }}
              >
                <Form className="adminForm">
                  <div>
                    <h1 className="text-center text-yellow-700">
                      Make Profile changes
                    </h1>
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
                  </div>
                  <button
                    type="submit"
                    className="signUpbtn border bg-yellow-700 text-white hover:bg-white hover:text-yellow-700 hover:border-yellow-700 transition-all"
                  >
                    Update
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        )}
        <button className="logoutBtn">Logout</button>
      </div>

      <div className="dashboard">
        <div className="dashHeader">
          <div className="flex justify-between pt-7">
            <h1 className="textHeader text-yellow-700">Dashboard</h1>

            <button
              className="addBtn"
              onClick={() => setShowAddForm((prev) => !prev)}
            >
              Add Product
            </button>
          </div>
        </div>

        {showAddForm && (
          <form action="" className="addProductForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              placeholder="Product Name"
            />

            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              placeholder="Price"
            />

            <input
              type="file"
              id="image"
              name="image"
              className="fileupload"
              onChange={(e) => uploadImage(e)}
              placeholder="Product Image"
            />

            <textarea
              name="detials"
              id="details"
              value={productData.detials}
              onChange={handleChange}
              cols="60"
              rows="5"
            >
              Product details...
            </textarea>
            <div className="fBtn flex justify-between">
              <button className="addBt" type="submit">
                Add
              </button>

              <button
                className="addBt"
                onClick={() => setShowAddForm((prev) => !prev)}
              >
                cancel
              </button>
            </div>
          </form>
        )}
        <>
          <div className="foodCards ">
            {value?.map((foodItem) => {
              // handle click navigation to product detail page.

              return (
                <div
                  key={foodItem.name}
                  className="foodItem border border-yellow-700  h-1/4 p-2 text-center rounded justify-center items-center object-scale-down"
                >
                  <img
                    src={foodItem.image}
                    alt={foodItem.name}
                    className="card h-24 items-center mx-auto"
                  />
                  <h3 className="fItern text-yellow-600">{foodItem.name}</h3>
                  <span>${foodItem.price}</span>
                  <div className="flex  justify-start">
                    <button
                      className="cardBtn  bg-yellow-800 text-white"
                      onClick={() => handleDelete(foodItem.name)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </div>
    </div>
  );
};
// onChange={e => conver2base64(e)}
