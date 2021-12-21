import { useState, useEffect } from 'react';

import { useRegister } from '../contexts/AuthProvider';


const useForm = (callback, validate) => {
   
  const register = useRegister();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
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
        setErrors({email:'email is already in use'})
       
    } else {
       callback()
       
    }
}
  
  
  
  
  
  
  
  
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        const data ={
          name:values.username,
          email:values.email,
          password:values.password
      }
        
        try {
          register(data).then(errorPromise);
        }
        catch(err){
          console.log("error");  
        }
      




      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;