import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

import { useRef, useState, useEffect } from "react";

import "../styles/Profile.css";


export default function Profile() {


  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage")
  );

  const fileInputRef = useRef();



  const user = {

    name: "Kalyan Reddy",
    email: "kalyan@gmail.com",
    phone: "9876543210",
    address: "Hyderabad, India"

  };


  const handleImageChange = (e) => {

    const file = e.target.files[0];


    if (file) {

      const imageUrl = URL.createObjectURL(file);


      setProfileImage(imageUrl);


      localStorage.setItem(
        "profileImage",
        imageUrl
      );

    }

  };

  return (

    <div className="profile-page">


      <div className="profile-card">


        <div className="profile-header">


          <div
            className="profile-image"
          >

            {

              profileImage ?

                (

                  <img
                    src={profileImage}
                    
                  />

                )

                :

                (

                  <FaUser />

                )

            }


          </div>



          <h2>
            {user.name}
          </h2>



          <input

            type="file"

            accept="image/*"

            ref={fileInputRef}

            onChange={handleImageChange}

            style={{
              display: "none"
            }}

          />



          <button
            onClick={() =>
              fileInputRef.current.click()
            }
          >

            Edit Profile

          </button>


        </div>




        <div className="profile-details">


          <div className="detail-item">

            <FaEnvelope />

            <div>

              <h4>Email</h4>

              <p>{user.email}</p>

            </div>

          </div>



          <div className="detail-item">

            <FaPhone />

            <div>

              <h4>Phone</h4>

              <p>{user.phone}</p>

            </div>

          </div>




          <div className="detail-item">

            <FaMapMarkerAlt />

            <div>

              <h4>Address</h4>

              <p>{user.address}</p>

            </div>

          </div>



        </div>


      </div>



      <div className="account-summary">


        <h2>
          Account Summary
        </h2>


        <div className="summary-box">


          <div>

            <h3>12</h3>

            <p>Orders</p>

          </div>


          <div>

            <h3>5</h3>

            <p>Wishlist</p>

          </div>


          <div>

            <h3>₹4999</h3>

            <p>Total Spent</p>

          </div>


        </div>


      </div>


    </div>

  );

}