import api from "./axiosInstance";

export const getAllPosts = async () => {
  const res = await api.get("/post/all-posts");
  return res.data;
};

export const getSinglePost = async (slug) => {
  const res = await api.get(`/post/${slug}`);
  return res.data;
};
