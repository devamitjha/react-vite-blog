import axios from "axios";

export const getImageKitAuth = async () => {
    const res = await axios.get("http://localhost:5000/api/imagekit/auth");
    return res.data; // { token, expire, signature }
};

export const uploadToImageKit = async (file) => {
  // 1. Fetch signature from backend
  const auth = await getImageKitAuth();

  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", file.name);

  // MUST match backend config
  formData.append("publicKey", "public_cZw1IzvFs7S8gE4LMpVUI0mJRik=");
  formData.append("signature", auth.signature);
  formData.append("expire", auth.expire);
  formData.append("token", auth.token);

  // 2. Upload
  const res = await axios.post(
    "https://upload.imagekit.io/api/v1/files/upload",
    formData
  );

  return res.data.url;
};
