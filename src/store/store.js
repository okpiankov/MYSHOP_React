import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './basket/slice';
import { userSlice } from './user/slice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const rootStore = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   [userSlice.name]: userSlice.reducer,
  //   [cartSlice.name]: cartSlice.reducer,
  // },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(rootStore);

function handleChange() {
  // console.log('productData', rootStore.getState().productData);
  // console.log('user', rootStore.getState().user?.user);
  console.log('redux-pesist state', rootStore.getState());
}

rootStore.subscribe(handleChange);
