import { createSlice } from '@reduxjs/toolkit';

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


// import { createSlice } from '@reduxjs/toolkit';

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: { product: '' },
//   reducers: {
//     //Анализ  state = action.payload;
//     setCart: (state, action) => {
//       state.product = action.payload;
//     },
//   },
//   selectors: {
//     getCart: state => state.product,
//   },
// });

// export const productActions = cartSlice.actions;
// export const { getCart } = cartSlice.selectors;
