import { useState, useEffect } from 'react';

import { useLogin } from '../contexts/AuthProvider';


const useFormLogIn = (callback, validate) => {
   
  const LogIn = useLogin();
  const [values, setValues] = useState({
    email: '',
    password: ''
    
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    setErrors(validate(values));
    
    setIsSubmitting(true);
    
    
  };
  
  
  
  function errorPromise(value) {
    if (value === false) {
        setErrors({email:'email or password does not match'})
    } else {
       callback()
       
    }
}
  
  
  
  
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        try {
          LogIn(values.email,values.password).then(errorPromise);
        }
        catch(err){
          console.log("error");  
        }
      }
      ;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useFormLogIn;