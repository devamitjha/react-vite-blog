import axios from "axios";

const API = "http://localhost:5000/api/category/all-categories";

export const getAllCategories = async () => {
  const res = await axios.get(API);
  return res.data;
};
