import axios from "axios";

const api = axios.create({
    baseURL: 'https://dashboard-api.wiut.uz',
});

// api.interceptors.request.use(async (config) => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       config.headers['Authorization'] = `${accessToken}`;
//     }
//     return config;
//   });

export default api;