import { createSlice } from '@reduxjs/toolkit';
import { Phone } from '../../lib/data';
import { phones } from '../../lib/data';

let totalAmount = 0;
let totalQuantity = 0;
phones.forEach((item) => {
  totalAmount += item.price;
  totalQuantity += item.quantity;
});

type CartState = {
  cartItems: Phone[];
  totalAmount: number;
  totalQuantity: number;
  isLoading: boolean;
};

const initialState: CartState = {
  cartItems: phones,
  totalAmount,
  totalQuantity,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item === undefined) {
        throw new Error('no such item');
      }

      item.quantity++;
      state.totalAmount += item.price;
      state.totalQuantity++;
    },
    decrement: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item === undefined) {
        throw new Error('no such item');
      }

      item.quantity--;
      state.totalAmount -= item.price;
      state.totalQuantity--;
      if (item.quantity === 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    remoteItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item === undefined) {
        throw new Error('no such item');
      }

      state.totalAmount -= item.quantity * item.price;
      state.totalQuantity -= item.quantity;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.isLoading = false;
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, clearCart, remoteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
