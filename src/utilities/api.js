import axios from "axios";

const api_url_stocks =
  "https://financialmodelingprep.com/api/v3/stock/list?apikey=a23dc9ca3d20da5d8695b321072b26c6";

export const getPositions = async (id) => {
  return axios.get(`http://localhost:8084/${id}/positions/all`);
};

export const getUser = async (id) => {
  return axios.get(`http://localhost:8084/${id}`);
};

export const getUserByEmail = async (email) => {
  return axios.get(`http://localhost:8084/getuserbyemail?email=${email}`);
};

export const registerNewUser = async (user) => {
  return axios.post(`http://localhost:8084/register`, user);
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default api_url_stocks;
