/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types/CartItem';

export interface CartState {
  cart: CartItem[];
}

const initialCartState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart') as string)
  : [];

const initialState: CartState = {
  cart: initialCartState,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const newItem: CartItem = { id: action.payload, count: 1 };

      state.cart.push(newItem);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addOneToCount: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map(item =>
        item.id === action.payload
          ? { id: item.id, count: item.count + 1 }
          : item,
      );
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeOneFromCount: (state, action: PayloadAction<number>) => {
      state.cart = state.cart
        .map(item =>
          item.id === action.payload
            ? { id: item.id, count: item.count - 1 }
            : item,
        )
        .filter(item => item.count !== 0);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart: state => {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addOneToCount,
  removeOneFromCount,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
