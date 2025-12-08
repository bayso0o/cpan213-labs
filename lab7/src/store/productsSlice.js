// src/store/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MOCK_PRODUCTS } from '../data/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products?limit=10',
      );
      return response.data;
    } catch (error) {
      console.warn('API fetch failed, using mock data:', error.message);
      return MOCK_PRODUCTS;
    }
  },
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectAllProducts = state => state.products.items;
export const selectProductsLoading = state => state.products.loading;
export const selectProductsError = state => state.products.error;
export const selectProductById = (state, productId) =>
  state.products.items.find(p => p.id === productId);
export const selectProductsCount = state => state.products.items.length;

export const { clearError, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
