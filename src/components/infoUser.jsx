import React from 'react';

import { useSession } from '../contexts/AuthProvider';
import { useMemo } from 'react';


const InfoUser = () => {
  const { isAuthed, hasRole,user } = useSession();
   
  
  
 
  
   console.log(user);


  
  




  return (
    <div>
      hello
    </div>
  );
};

export default InfoUser;