import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  deleteOrder,
  getOrderList,
  postCreateOrder,
  putUpdateOrder,
} from '../../shared/services/http-client';

const initialState = {
  orderList: [],
  quantityOrders: 0,
  quantityProduct: 1,
};

export const fetchOrdereList = createAsyncThunk(
  'orders/getOrderList',
  async userId => {
    const response = await getOrderList(userId);
    return response.data;
  }
);

export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async ({ orderId, quantity, userId }) => {
    const res = await putUpdateOrder(orderId, quantity);
    await getOrderList(userId);
  }
);

export const deleteOrderAPI = createAsyncThunk(
  'orders/deleteOrder',
  async ({ orderId, userId }) => {
    const res = await deleteOrder(orderId);
    // await getOrderList(userId);
  }
);

export const createOrderAPI = createAsyncThunk(
  'orders/createOrder',
  async ({ quantity, product, user, total }) => {
    const res = await postCreateOrder(quantity, product, user, total);
    await getOrderList(user);
  }
);

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.orderList.splice(action.payload, 1);
    },
    increaseQuantity: state => {
      state.quantityOrders = state.quantityOrders + 1;
    },
    decreaseQuantity: state => {
      state.quantityOrders = state.quantityOrders - 1;
    },
    updateWhenRemoveQuantityOrder: (state, action) => {
      state.quantityOrders =
        state.quantityOrders -
        state.orderList[action.payload].attributes.quantity;
    },
    getQuantityProduct: (state, action) => {
      state.quantityProduct =
        state.orderList[
          state.orderList.findIndex(
            item => item.attributes.product.data.id === action.payload
          )
        ].attributes.quantity;
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
    [createOrderAPI.fulfilled]: (state, action) => {
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

export const {
  removeQuantityZero,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  updateWhenRemoveQuantityOrder,
  getQuantityProduct,
} = orderSlice.actions;

export default orderSlice.reducer;
