export const BASE_URL = "http://beta.ptuniv.edu.in/";

export const API_BASE_URL = BASE_URL + "cms/API/";

export const IMG_BASE_URL = BASE_URL + "images/";

export const PROFILE_IMG_BASE_URL = BASE_URL + "cms/profilepic/";

export const getImageUrl = (relativeUrl) => {
	return IMG_BASE_URL + relativeUrl;
};

export const getProfileImageUrl = (relativeUrl) => {
	return PROFILE_IMG_BASE_URL + relativeUrl;
};
