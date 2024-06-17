import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './user/slice';
import { cartSlice } from './basket/slice';

export const rootStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  devTools: true,
});

// function handleChange() {
//   console.log(rootStore.getState().cart);
//   console.log(rootStore.getState().user?.user);
// }
// rootStore.subscribe(handleChange);
