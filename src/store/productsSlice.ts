/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { database } from '../utils/firebase';

import { Product } from '../types/Product';
import { get, ref } from 'firebase/database';
import { CurrencyValues } from '../types/CurrencyValues';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  (_, { rejectWithValue }) => {
    const productsRef = ref(database, 'products');

    return get(productsRef)
      .then(snapshot => snapshot.val())
      .catch(error => rejectWithValue(error.message));
  },
);

const currency = localStorage.getItem('currency')
  ? JSON.parse(localStorage.getItem('currency') as string)
  : CurrencyValues.USD;

type ProductsState = {
  items: Product[];
  isLoading: boolean;
  currency: string;
  exchangeRate: number;
  hasError: boolean;
};

const initialState: ProductsState = {
  items: [],
  currency,
  exchangeRate: 40,
  isLoading: false,
  hasError: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<CurrencyValues>) => {
      state.currency = action.payload;
      localStorage.setItem('currency', JSON.stringify(state.currency));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { setCurrency } = productsSlice.actions;

export default productsSlice.reducer;
