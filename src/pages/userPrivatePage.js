
import React from "react";


import img from "../images/stockImage.png"
import {useSession} from '../contexts/AuthProvider.jsx'




const UserPrivatePage= () => {
 
  const { user } = useSession();
  console.log(user);
  return (
    <>
      <div className='form-container'>
        <img src={img}  className='home__hero-img' alt="logo" />
        <label>{user.email}</label>
        <label>{user.name}</label>
      </div>
    </>
  );
};


export default UserPrivatePage;