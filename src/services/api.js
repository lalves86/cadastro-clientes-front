import axios from 'axios';

/*
  Configuração da URL base para as requisições à api
*/

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
