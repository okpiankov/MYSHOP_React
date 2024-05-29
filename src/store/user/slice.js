import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userData',
  initialState: {},
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearUserStore: () => initialState,
  },
  selectors: {
    getUserIsLoading: state => state.isLoading,
    getUserToken: state => state.userData.token,
    getUserAvatar: state => state.userData.avatar,
    getUserFullName: state =>state.user.data.fullName,
    getUserRole: state => state.userData.role,
  },
});

// Почему обращение идет к actions,  а не к action?
export const userActions = userSlice.actions;

export const { getUserAvatar, getUserToken, getUserFullName, getUserRole } = userSlice.selectors;
// console.log(getUserFullName)

console.log(userActions.clearUserStore());
