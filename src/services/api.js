import axios from 'axios';
import {store} from '../store/index';
import {showMessage} from 'react-native-flash-message';

export const api = axios.create({
  baseURL: 'http://159.203.31.148:8080/avaliatri-0.0.1/',
  timeout: 10000,
});

api.interceptors.request.use(
  config => {
    const {auth} = store.getState();
    config.headers.Authorization = auth.token;
    return config;
  },
  error => {
    showMessage({
      message: 'Erro',
      description: `${error}`,
      type: 'danger',
      backgroundColor: '#ff7171', // background color
    });
  },
);

export default api;