import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

const baseURL = 'http://localhost:8000';

export const $api = axios.create({
  baseURL,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
});
