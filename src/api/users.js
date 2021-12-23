import { axios } from '.';

export const login = async (email, password) => {
  const {
    data
  } = await axios.post(`users/login`, {
    email,
    password
  });
  return data;
};

export const register = async ({
  name,
  email,
  password,
}) => {
  const {
    data
  } = await axios.post(`users/register`, {
    name,
    email,
    password
  });
  return data;
};

export const getUserById = async (id) => {
  const {
    data
  } = await axios.get(`users/${id}`);
  return data;
};


export const getAllUsers = async() => {
  const {
    data
  } = await axios.get('users/');
  return data;
};


export const  deleteUserById= async(id) => {
  const {
    data
  } = await axios.delete(`users/${id}`);
  return data;
};


export const  updateByIdPermissions= async(id,permission) => {
  const {
    data
  } = await axios.put(`users/permissions/${id}`,permission);
  return data;
};



export const  updateUserById= async(id) => {
  const {
    data
  } = await axios.put(`users/${id}`);
  return data;
};





