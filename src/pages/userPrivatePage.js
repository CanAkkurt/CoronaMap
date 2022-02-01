
import React from "react";
import img from "../images/stockImage1.png"
import {useSession} from '../contexts/AuthProvider.jsx'
import "./userPrivatePage.css";


const UserPrivatePage= () => {
 
  const { user } = useSession();
  console.log(user);
  return (
    <>
      <div className='container-form'>
        <img src={img}  className='logo' alt="logo" />
        <form>
         <label className="labelInfo">username:{user.name}</label>
         <label className="labelInfo">email:{user.email}</label>
        </form>
      
      </div>
    </>
  );
};


export default UserPrivatePage;