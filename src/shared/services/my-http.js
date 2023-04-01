import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

const axiosHehe = axios.create({
  baseURL: 'https://edison-shipping-api.savvycom.xyz/api/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    Accept: 'applications/json',
    'Content-Type': 'application/json',
  },
});

axiosHehe.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosHehe;
