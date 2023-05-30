import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../features/orders/orderSlide';

export const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});
