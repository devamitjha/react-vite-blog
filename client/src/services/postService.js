import axios from "axios";

const API = "http://localhost:5000/api/post/all-posts";

export const getAllPosts = async () => {
  const res = await axios.get(API);
  return res.data;
};
