import axios, { Axios } from "axios";

const api = axios.create({baseURL: process.env.REACT_APP_API_URL});
const authInterceptor = (config: any) => {
    config.headers.authorization = localStorage.getItem('token');
    return config;
}

api.interceptors.request.use(authInterceptor);

export {
    api
}

