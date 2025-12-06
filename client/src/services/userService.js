import axios from "axios";

const API = "http://localhost:5000/api/users";

export const registerUser = async (form) => {
  const res = await axios.post(`${API}/register`, form);
  return res.data;
};

export const loginUser = async (email, password) => {
  const res = await axios.post(`${API}/login`, { email, password });
  return res.data;
};

export const getUsers = async () => {
  const res = await axios.get(API);
  return res.data;
};
