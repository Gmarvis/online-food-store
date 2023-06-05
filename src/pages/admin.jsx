import React from "react";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
// import { Nav } from "../component/nav"

export const Admin = () => {
  const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("foodItems")));
  const [showForm, setShowForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    detials: "",
  });

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

  // const conver2base64 = (e)=>{
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = ()=>{
  //     console.log(reader.result.toString());
  //   };
  //   reader.readAsDataURL(file)
  // }


  // handle delete

  const handDelete = (name)=>{
    const removeIterm = localData.filter((iterm)=>{
      return iterm.name !== name
    })
    setProductData(removeIterm)
    console.log(localData)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const localData = JSON.parse(localStorage.getItem("foodItems")) || [];

    localStorage.setItem(
      "foodItems",
      JSON.stringify([...localData, productData])
    );

    // console.log(productData);
    // conver2base64()
  };


  /*Display products*/
// useEffect(()=>{
//   const local = JSON.parse(localStorage.getItem("foodItems"));
//   setLocalData(local);
// },[])


  // const localData = JSON.parse(localStorage.getItem("foodItems"))
  // console.log("local data",localData)

  return (
    <div className="admin-dashboard">
      <div className="profile-section">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/106551910?v=4"
            alt=""
            className="avatar"
          />
          <h2>Sam Gmarvis</h2>
          <p>sgmarvis@gmail.com</p>
        </div>
        <button
          className="profileBtn"
          onClick={() => setShowForm((prev) => !prev)}
        >
          Edit Profile
        </button>

        {showForm && (
          <form className="updateForm" action="submit">
            <input type="text" name="name" placeholder="User Name" />

            <input type="email" name="email" placeholder="change email" />

            <input type="file" name="picture" />
            <div>
              <button className="profileBtn">Update</button>
              <button
                className="mt-3 text-red-800 text-2xl font-light"
                onClick={(e) => {
                  e.preventDefault();
                  setShowForm((prev) => !prev);
                }}
              >
                {" "}
                <GiCancel />{" "}
              </button>
            </div>
          </form>
        )}
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
      {localData?.map((foodItem) => {

        // handle click navigation to product detail page.
        const handDitails = () => {
          // navigate(`./products/${foodItem.name}`)

        }
        return (
          <div key={foodItem.name} className="foodItem border border-yellow-700  h-1/4 p-2 text-center rounded justify-center items-center object-scale-down"  >
            <img src={foodItem.image} alt={foodItem.name} className="card h-24 items-center mx-auto" />
            <h3 className="fItern text-yellow-600">{foodItem.name}</h3>
            <span>${foodItem.price}</span>
            <div className="flex  justify-between">
              <button className="cardBtn" onClick={handDitails}>Edit</button>
              <button className="cardBtn" onClick={handDelete}>Delete</button>

            </div>
          </div>
        )
      })}
    </div>
    </>
      </div>
    </div>
  );
};
// onChange={e => conver2base64(e)}
