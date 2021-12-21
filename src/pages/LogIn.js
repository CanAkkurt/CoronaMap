import React, { useState } from 'react';
import './SignUp.css';
import FormLogIn from '../components/FormLogIn.js';

import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';

const LogIn= () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  function submitForm() {
    setIsSubmitted(true);

  }


  
  return (
    <>
      <div className='form-container'>
         
         <Link to='/' className='link'>
         <span className='close-btn'>×</span>     
          </Link>
        
        <div className='form-content-left'>
          <img className='form-img' src='/src/images/corona.jpg' alt='coronaImage' />
        </div>
        {!isSubmitted ? (
          <FormLogIn submitForm={submitForm} />
        ) : (
          <Navigate to="/"/>
         
        )}
      </div>
    </>
  );
};


export default LogIn;