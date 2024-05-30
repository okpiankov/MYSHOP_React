import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'productData',
  initialState: {},
  reducers: {
    setProductData: (state, action) => {
      state.product = action.payload;
    },
  },
  selectors: {
    getProduct: state => state.product,
  },
});

export const productActions = productSlice.actions;

export const { getProduct } = productSlice.selectors;
// console.log(getProduct)
