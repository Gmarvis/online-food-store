import React from "react";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
// import { Nav } from "../component/nav"

export const Admin = () => {
  const [showForm, setShowForm] = useState(false);
	const [showAddForm, setShowAddForm] = useState(false)

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
				<div className="dashHeader bg-yellow-700">
        <h1 className="textHeader ">Dashboard</h1>
        <button className="addBtn" 
				onClick={()=>setShowAddForm((prev)=>!prev)}>Add Product</button>
				</div>

        {showAddForm && (
          <form action="" className="addProductForm">
            
            <input type="text" placeholder="Product Name" />
            <input type="number" placeholder="Price" />

						<input type="file" value="" placeholder="Product Image" />

            <textarea name="detials" id="decription" cols="60" rows="5">
              asdfhasdf
            </textarea>
          </form>
        )}
      </div>
    </div>
  );
};
