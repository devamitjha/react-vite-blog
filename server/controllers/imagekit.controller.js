import imagekit from "../config/imagekit.js";

// Returns signature and other params for secure upload
export const getAuthParams = (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.json(result);
};
