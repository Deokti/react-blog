import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

const baseURL = 'http://localhost:8000';

const $api = axios.create({ baseURL });

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';

  if (config.headers) {
    config.headers.authorization = token;
  }

  return config;
});

export { $api };
