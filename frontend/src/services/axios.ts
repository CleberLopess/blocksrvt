import axios, { AxiosRequestConfig } from "axios";

export const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const config: AxiosRequestConfig = {
  baseURL: "http://localhost:8080/families",
  headers: headers.headers,
};

const requestAxios = axios.create(config);

console.log(requestAxios);

requestAxios.interceptors.response.use(
  (request) => request,
  (error) => Promise.reject(error)
);

requestAxios.interceptors.response.use(
  (response) => response,
  (error) => console.error(error.response)
);

export default requestAxios;
