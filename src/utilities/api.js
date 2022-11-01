import axios from "axios";

const api_url_stocks =
  "https://financialmodelingprep.com/api/v3/stock/list?apikey=66bc78be23812cb5e12f3f5247c84f55";

export const getPositions = async (id) => {
  return axios.get(`http://localhost:8084/${id}/positions/all`);
};

export default api_url_stocks;
