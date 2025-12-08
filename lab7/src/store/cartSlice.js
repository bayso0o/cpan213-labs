import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const calculateTotals = items => {
  return items.reduce(
    (totals, cartItem) => {
      totals.totalQuantity += cartItem.quantity;
      totals.totalAmount += cartItem.price * cartItem.quantity;
      return totals;
    },
    { totalQuantity: 0, totalAmount: 0 },
  );
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        cartItem => cartItem.id === newItem.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }

      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalAmount = totals.totalAmount;
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        cartItem => cartItem.id !== action.payload,
      );

      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalAmount = totals.totalAmount;
    },

    increaseQuantity: (state, action) => {
      const cartItem = state.items.find(item => item.id === action.payload);

      if (cartItem) {
        cartItem.quantity += 1;
      }

      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalAmount = totals.totalAmount;
    },

    decreaseQuantity: (state, action) => {
      const cartItem = state.items.find(item => item.id === action.payload);

      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }

      const totals = calculateTotals(state.items);
      state.totalQuantity = totals.totalQuantity;
      state.totalAmount = totals.totalAmount;
    },

    clearCart: state => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
