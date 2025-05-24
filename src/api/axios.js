import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // sesuaikan dengan base URL backend temanmu
});

export default api;
