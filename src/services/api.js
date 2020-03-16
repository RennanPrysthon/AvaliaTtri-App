import axios from 'axios';

const api = axios.create({
  baseURL: 'https://avaliatri-api.herokuapp.com/'
});
export default api;