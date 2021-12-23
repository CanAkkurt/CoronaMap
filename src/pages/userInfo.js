

import React, { useState, Fragment } from "react";


import { useEffect } from "react";

import './userInfo.css';


import { getAllUsers,deleteUserById } from "../api/users";


const UserInfo= () => {

  const [displayHello, setDisplayHello] = useState(false);
  
  const [dataTest,setDataTest] = useState([]);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    
    
     getAllUsers().then(data => setContacts(data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // 
    
  // },[contacts]);
  console.log("displaychanged");
  setDisplayHello(false)
  },[displayHello])
  
  
 
  console.log(contacts);
  
  const handleClick = (data) =>{
     
    deleteUserById(data);
    setDisplayHello(true)

  }
  const handleClickPermission = (data) => {
   
    console.log(data)
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
           Give admin permission
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