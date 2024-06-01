import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: {
    data: {
      avatar: '', // здесь можно дефолную картинку вставить
      email: '',
      fullName: '', // здесь можно дефолное имя написать
      id: null,
      role: '',
    },
    token: '',
  },
};

// лучше стейт вот к такому виду привести, без вложенностей, что не искать глубоко внутри нужные данные.
// То есть будет вместо state => state.user.data.fullName - state => state.fullName

// const initialState = {
//   isLoading: false,
//   token: '',
//   avatar: '',
//   email: '',
//   fullName: '',
//   id: null,
//   role: '',
// };

export const userSlice = createSlice({
  name: 'user',
  // initialState: {},
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearUserStore: () => initialState,
  },
  selectors: {
    getUserIsLoading: state => state.isLoading,
    getUserToken: state => state.user.token,
    getUserAvatar: state => state.user.data.avatar,
    getUserFullName: state => state.user.data.fullName,
    getUserRole: state => state.user.data.role,
    // {
    // if (state) {
    //   if (state.user) {
    //     if (state.user.data) {
    //       return state.user.data.role;
    //     }
    //   }
    // }
    // },
  },
});

// Почему обращение идет к actions,  а не к action?
export const userActions = userSlice.actions;

export const { getUserAvatar, getUserToken, getUserFullName, getUserRole } = userSlice.selectors;
// console.log(getUserFullName)

// console.log(userActions.clearUserStore());

console.log(userSlice);
