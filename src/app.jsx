import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { MainPage } from './components/MainPage/MainPage';

export const App = () => {
  return <RouterProvider router={router} />;
  // return <HeaderMenu/>
  // return <MainPage />
};
