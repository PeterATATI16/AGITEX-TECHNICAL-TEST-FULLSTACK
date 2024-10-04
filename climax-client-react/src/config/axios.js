import axios from "axios";
import { BASE_URL } from "./constants";
import { getLocalItem } from "../utils/localStorage";

const AXIOS = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

AXIOS.interceptors.request.use(
  (config) => {
    const token = getLocalItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AXIOS.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default AXIOS;
