import axios from "axios";

const api = axios.create({
  baseURL: "http://34.229.169.166:8000/",
});

export { api };
