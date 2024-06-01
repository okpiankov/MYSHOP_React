import { createSlice, current } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      return [...action.payload];
    },
    
  },
  selectors: {
    getCart: state => state,
  },
});

export const productActions = cartSlice.actions;

export const { getCart } = cartSlice.selectors;
// console.log(getCart)
