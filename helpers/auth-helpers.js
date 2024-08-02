import Cookies from "js-cookie";
export const saveAccessToken = (access_token) => {
  Cookies.set("access_token", access_token);
};
export const getAccessToken = () => {
  return Cookies.get("access_token");
};
