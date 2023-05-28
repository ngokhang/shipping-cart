import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrderList } from '../../shared/services/http-client';

const initialState = {
  orderList: [],
  quantityOrders: 0,
  tempValue: 1,
};

export const fetchOrdereList = createAsyncThunk(
  'orders/getOrderList',
  async userId => {
    const response = await getOrderList(userId);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.orderList.splice(action.payload, 1);
    },
    setTemp: (state, action) => {
      state.tempValue = action.payload;
    },
  },
  extraReducers: {
    [fetchOrdereList.fulfilled]: (state, action) => {
      state.orderList = action.payload;
      state.quantityOrders = state.orderList
        .filter(item => {
          if (item.attributes.product.data !== null) return true;
          return false;
        })
        .reduce((curr, next) => {
          return next.attributes.quantity + curr;
        }, 0);
    },
  },
});

export const { removeItem, setTemp } = orderSlice.actions;

export default orderSlice.reducer;
