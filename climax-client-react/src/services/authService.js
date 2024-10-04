import AXIOS from "../config/axios";
import ENDPOINT from "../config/ENDPOINT";
import {
  getLocalItem,
  removeLocalItem,
  setLocalItem,
} from "../utils/localStorage";

export const login = async (credentials) => {
  const response = await AXIOS.post(ENDPOINT.AuthRoutes.login, credentials);
  if (response.data) {
    setLocalItem("token", response.data.token);
    getAuth();
  }
  return response.data;
};

export const getAuth = async () => {
  const response = await AXIOS.get(ENDPOINT.AuthRoutes.auth);
  if (response.data) {
    setLocalItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const register = async (data) => {
  const response = await AXIOS.post(ENDPOINT.AuthRoutes.register, data);
  if (response.data.token) {
    setLocalItem("token", response.data.token);
    setLocalItem("user", JSON.stringify(response.data.user));
  }
  return response.data;
};

export const logout = async () => {
  const response = await AXIOS.post(ENDPOINT.logout);
  removeLocalItem("token");
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
