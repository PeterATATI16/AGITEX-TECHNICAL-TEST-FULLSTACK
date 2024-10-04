import AXIOS from "../config/axios";
import ENDPOINT from "../config/ENDPOINT";

export const fetchClients = async () => {
  const response = await AXIOS.get(ENDPOINT.clientRoutes.all);
  return response.data;
};
export const fetchClientStats = async () => {
  const response = await AXIOS.get(ENDPOINT.clientRoutes.stats);
  return response.data;
};

export const fetchClient = async (id) => {
  const response = await AXIOS.get(`${ENDPOINT.clientRoutes.show}/${id}`);
  return response.data;
};

export const updateClient = async (id, data) => {
  const response = await AXIOS.put(`${ENDPOINT.clientRoutes.update}/${id}`, data);
  return response.data;
};

export const deleteClient = async (id) => {
  const response = await AXIOS.delete(`${ENDPOINT.clientRoutes.delete}/${id}`);
  return response.data;
};
export const deleteAllClients = async (id) => {
  const response = await AXIOS.delete(`${ENDPOINT.clientRoutes.deleteAll}`);
  return response.data;
};

export const importClients = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await AXIOS.post(`${ENDPOINT.clientRoutes.import}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

