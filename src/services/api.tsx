import axios from "axios";
import CSRF from '@/utils/CSRF'
export const api = axios.create({
    baseURL: 'http://10.205.0.49:8000',
    timeout: 1000
});

// api.interceptors.request.use(async (config) => {
//     const csrfToken = await obterTokenCSRF(); // Implemente sua lógica para obter o token CSRF
//     config.headers['X-CSRF-TOKEN'] = csrfToken;
//     return config;
// });