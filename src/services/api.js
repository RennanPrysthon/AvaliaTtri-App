import { Alert } from 'react-native'
import axios from 'axios';
import { store } from '../store/index';

const api = axios.create({
  baseURL: 'http://159.203.31.148:8080/AvaliaTri-0.1/'
});

const header = () => {
  const { auth } =  store.getState();
  return {
    'Content-Type': 'application/json',
    Authorization: auth.token,
  };
}

export const Api = {
  post: async (url, obj) => {
    try {
      const { data } = await api.post(url, obj, {headers: header()});
      return data;
    } catch (e) {
      Alert
        .alert('Erro', `${e}`);
    }
  },
  get: async (url) => {
    try{
      const { data } = await api.get(url, {headers: header()});
      return data;
    } catch (e) {
      Alert
        .alert('Erro', `${e}`);
    }
  },
}

export default api;