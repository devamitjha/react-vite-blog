import api from "./axiosInstance";

export const getAllCategories = async () => {
  const res = await api.get("/category/all-categories");
  return res.data;
};

export const getPostsByCategorySlug = async (slug) => {
  const res = await api.get(`/category/${slug}`);
  return res.data;
};
