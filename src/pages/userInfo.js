

import React, { useState } from "react";

import {sendMailNoEvent} from "../components/emailSender";
import { useEffect } from "react";

import './userInfo.css';


import { getAllUsers,deleteUserById ,updateByIdPermissions} from "../api/users";


const UserInfo= () => {

  const [displayRender, setDisplayRender] = useState(false);
  
  
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    
    
     getAllUsers().then(data => setContacts(data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // 
    
  // },[contacts]);
  console.log("displaychanged");
  setDisplayRender(false)
  },[displayRender])
  
  
 
  console.log(contacts);
  
  const handleClick = (data) =>{
     
    deleteUserById(data);
    setDisplayRender(true)

  }
  const handleClickPermission = (data) => {
    const permission = {"permission":"admin"}
    updateByIdPermissions(data,permission)
    setDisplayRender(true)
  }

  const sendMailOnClick= (data) => {
    console.log(data)
    sendMailNoEvent(data) 
    
  }



 
  return (
   
   <div className="container-table">
     <table class="order-table">
       <thead>
        <tr>  
         <th>id</th>
         <th>Name</th>
         <th>email</th>
         <th>privileges</th>
         <th></th>
         <th></th>
         <th></th>
        
        </tr>
       </thead>
     
     {contacts.map((data) => (
       <tbody key={data.id}>
         <tr>
         <td>{data.id}</td>
         <td className="userName">{data.name} </td>
         
         <td className="email">{data.email} </td>
         <td className="roles">{data.roles} </td>
         
         <td>
         <button className="button" type="button" onClick={() => handleClick(data.id)}>
           remove user
         </button>
         
         
         </td>
         <td>
         <button className="button" type="button" onClick={() => handleClickPermission(data.id)}>
           give admin permission
         </button>
         
         
         </td>
         <td>
          <button className="button" type="button" onClick={() => sendMailOnClick(data.email)}>
           send mail
         </button>
         </td>
         </tr>
       </tbody>
     ))} 
     </table>
   </div>


  );
};


export default UserInfo;