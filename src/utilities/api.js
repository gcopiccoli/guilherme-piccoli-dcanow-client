import axios from "axios";

const api_url_stocks =
  "https://financialmodelingprep.com/api/v3/stock/list?apikey=dc212cd1a11bf9d790104313c9c75bc3";

export const getPositions = async (id) => {
  return axios.get(`http://localhost:8084/${id}/positions/all`);
};

export default api_url_stocks;
