import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    Accept: 'applications/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    // Do something before request is sent
    const token = localStorage.getItem(ACCESS_TOKEN) || '';

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export const postRegisterUser = async (
  username,
  email,
  password,
  confirmed,
  role,
  fullname,
  address,
  phoneNumber
) => {
  return await axiosInstance.post('auth/local/register', {
    username,
    email,
    password,
    confirmed,
    role,
    fullname,
    address,
    phoneNumber,
  });
};

export const postCreateOrder = async (quantity, product, user, total) => {
  const payload = {
    data: {
      quantity,
      product,
      user: Number.parseInt(user),
      total,
    },
  };
  return axiosInstance.post('orders', payload);
};

export const getOrderList = async userId => {
  return axiosInstance.get(
    `orders?populate=product&filters[user][id]=${userId}`
  );
};

export const putUpdateOrder = async (orderId, quantity) => {
  const payload = {
    data: {
      quantity,
    },
  };
  return axiosInstance.put(`orders/${orderId}`, payload);
};

export const deleteOrder = async id => {
  return axiosInstance.delete(`orders/${id}`);
};

export default axiosInstance;
