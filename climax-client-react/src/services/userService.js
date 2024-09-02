import AXIOS from "../config/axios";
import ENDPOINT from "../config/ENDPOINT";

export const fetchUsers = async () => {
  const response = await AXIOS.get(ENDPOINT.users);
  return response.data;
};
export const fetchClientStats = async () => {
  const response = await AXIOS.get(ENDPOINT.clients_stats);
  return response.data;
};

export const fetchUser = async (id) => {
  const response = await AXIOS.get(`${ENDPOINT.users}/${id}`);
  return response.data;
};

export const updateUser = async (id, data) => {
  const response = await AXIOS.put(`${ENDPOINT.users}/${id}`, data);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await AXIOS.delete(`${ENDPOINT.users}/${id}`);
  return response.data;
};

export const importClients = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await AXIOS.post(`${ENDPOINT.import}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

