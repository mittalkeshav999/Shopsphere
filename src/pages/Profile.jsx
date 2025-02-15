import React, { useContext } from "react";
import { AuthContext } from "../Compoents/Product/AuthContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <p>Please log in
<Link to="/register" >Login</Link>
 </p>;

  return (
    <div>
      <h2>Welcome, {user.Name}!</h2>
      <div className="border border-dark-subtle w-75 p-5 m-auto">
        <div className="fs-5 fw-bolder ">Profile Details</div>
        <hr/>
        <div className="d-flex flex-column justify-content-between my-3">
        <div className="d-flex flex-row justify-content-between my-2 mx-5"><span>Full Name</span><span>{user.Name}</span></div>
        <div className="d-flex flex-row justify-content-between my-2 mx-5"><span>Mobile Number</span><span>{user.Phone}</span></div>
        <div className="d-flex flex-row justify-content-between my-2 mx-5"><span>Email ID</span><span>{user.Email}</span></div>
        <div className="d-flex flex-row justify-content-between my-2 mx-5"><span>City</span><span>{user.Addresses[0].City}</span></div>
        </div>
        <div className="d-flex justify-content-center mt-5"><button className="bg-danger rounded-2" onClick={logout}><Link to="/" className=" text-decoration-none text-white">Logout</Link></button></div>
      </div>
     
    </div>
  );
};

export default Profile;
