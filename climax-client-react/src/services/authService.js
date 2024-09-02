import AXIOS from "../config/axios";
import ENDPOINT from "../config/ENDPOINT";
import {
  getLocalItem,
  removeLocalItem,
  setLocalItem,
} from "../utils/localStorage";

export const login = async (credentials) => {
  const response = await AXIOS.post(ENDPOINT.login, credentials);
  if (response.data.access_token) {
    setLocalItem("access_token", response.data.access_token);
    setLocalItem("user", JSON.stringify(response.data.auth));
  }
  return response.data;
};

export const register = async (data) => {
  const response = await AXIOS.post(ENDPOINT.register, data);
  if (response.data.access_token) {
    setLocalItem("access_token", response.data.access_token);
    setLocalItem("user", JSON.stringify(response.data.user));
  }
  return response.data;
};

export const logout = async () => {
  const response = await AXIOS.post(ENDPOINT.logout);
  removeLocalItem("access_token");
  removeLocalItem("user");
  return response.data;
};

export const forgotPassword = async (data) => {
  const response = await AXIOS.post(ENDPOINT.forgot_password, data);
  if (response.data) {
    return response.data;
  }
};

export const resetPassword = async (data) => {
  const response = await AXIOS.post(ENDPOINT.reset_password, data);
  if (response.data) {
    return response.data;
  }
};

export const getUserFromLocalStorage = () => {
  const AUTH = getLocalItem("user");
  if (AUTH) {
    try {
      return JSON.parse(AUTH);
    } catch (error) {
      console.error("Error parsing user data from localStorage", error);
      return null;
    }
  }
  return null;
};
