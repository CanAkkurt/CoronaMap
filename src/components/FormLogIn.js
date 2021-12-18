import React from 'react';
import validateLogin from './validateLogin';
import useFormLogIn from './useFormLogIn.js';
import '../pages/SignUp.css';


const FormLogIn = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useFormLogIn(
    submitForm,
    validateLogin
  );
  // console.log(values);
  




  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Log In
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Log In
        </button>
        <span className='form-input-login'>
          Don't have an account yet?Register <a href='/sign-up'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogIn;