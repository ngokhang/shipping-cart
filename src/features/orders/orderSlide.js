import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  checkoutOrders,
  deleteOrder,
  getOrderList,
  postCreateOrder,
  putUpdateOrder,
} from '../../shared/services/http-client';

const initialState = {
  orderList: [],
  quantityOrders: 0,
  quantityProduct: 1,
  isLoading: false,
  totalPrice: 0,
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
  async ({ orderId, quantity, userId }, thunkAPI) => {
    const res = await putUpdateOrder(orderId, quantity);
    thunkAPI.dispatch(fetchOrdereList(userId));
  }
);

export const deleteOrderAPI = createAsyncThunk(
  'orders/deleteOrder',
  async ({ orderId, userId }, thunkAPI) => {
    const res = await deleteOrder(orderId);
    thunkAPI.dispatch(fetchOrdereList(userId));
  }
);

export const createOrderAPI = createAsyncThunk(
  'orders/createOrder',
  async ({ quantity, product, user, total }, thunkAPI) => {
    const res = await postCreateOrder(quantity, product, user, total);
    thunkAPI.dispatch(fetchOrdereList(user));
  }
);

export const checkoutOrderAPI = createAsyncThunk(
  'orders/checkoutOrders',
  async ({ total, orders, user }, thunkAPI) => {
    const res = await checkoutOrders(total, orders);
    await Promise.all(
      orders.map((order, index) => {
        thunkAPI.dispatch(deleteOrderAPI({ orderId: order, userId: user }));
      })
    );
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
      // payload : id cua san pham
      state.quantityProduct =
        state.orderList[
          state.orderList.findIndex(
            item => item.attributes.product.data.id === action.payload
          )
        ].attributes.quantity;
    },
    decreaseQuantityProduct: state => {
      state.quantityProduct = state.quantityProduct - 1;
    },
    increaseQuantityProduct: state => {
      state.quantityProduct = state.quantityProduct + 1;
    },
    // calcTotalPrice: state => {
    //   state.totalPrice = state.orderList.reduce((curr, next) => {
    //     return (
    //       next.attributes.quantity *
    //         next.attributes.product.data.attributes.price +
    //       curr
    //     );
    //   }, 0);
    // },
  },
  extraReducers: {
    [fetchOrdereList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchOrdereList.fulfilled]: (state, action) => {
      state.orderList = action.payload;
      state.quantityOrders = state.orderList.reduce((curr, next) => {
        return next.attributes.quantity + curr;
      }, 0);
      state.isLoading = false;
    },
    [deleteOrderAPI.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteOrderAPI.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [createOrderAPI.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createOrderAPI.fulfilled]: (state, action) => {
      state.isLoading = false;
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
  decreaseQuantityProduct,
  increaseQuantityProduct,
} = orderSlice.actions;

export default orderSlice.reducer;
