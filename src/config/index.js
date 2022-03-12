export const BASE_URL =
	process.env.REACT_APP_BASE_URL ?? "https://beta.ptuniv.edu.in/";

console.log(BASE_URL);

export const CMS_BASE_URL = BASE_URL + "cms/";

export const FILE_BASE_URL = CMS_BASE_URL + "file_contents/";

export const API_BASE_URL = BASE_URL + "cms/API/";

export const IMG_BASE_URL = BASE_URL + "images/";

export const PROFILE_IMG_BASE_URL = BASE_URL + "cms/profilepic/";

export const getImageUrl = (relativeUrl) => {
	return IMG_BASE_URL + relativeUrl;
};

export const getProfileImageUrl = (relativeUrl) => {
	return PROFILE_IMG_BASE_URL + relativeUrl;
};
