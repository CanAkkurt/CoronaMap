
import React, { useState } from 'react';
import './SignUp.css';
import FormSignup from '../components/FormSignup.js';
import FormSuccess from '../components/FormSucces.js';
import { Link } from 'react-router-dom';
import Corona from '../images/Corona.png'

const SignUp= () => {
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
          <img className='form-img' src={Corona} alt='coronaImage' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};


export default SignUp;