import { axios } from '.';



export const casesBetween = async(date1,date2) => {
  const {
    data
  } = await axios.get(`cases/dataBetween/${date1}&${date2}`)
   
  
  return data;
}






export const login = async (email, password) => {
  const {
    data
  } = await axios.post(`users/login`, {
    email,
    password
  });
  return data;
};
