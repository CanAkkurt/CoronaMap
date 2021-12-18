import React, { useState } from 'react';
import './SignUp.css';
import FormLogIn from '../components/FormLogIn.js';
import FormSuccess from '../components/FormSucces.js';
import { Link } from 'react-router-dom';


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
          <FormSuccess />
        )}
      </div>
    </>
  );
};


export default LogIn;