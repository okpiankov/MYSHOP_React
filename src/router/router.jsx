import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from '../components/Auth/AuthPage';
import { AuthPageFormik } from '../components/Auth/AuthPageFormik';
import { RegisterPage } from '../components/Auth/RegisterPage';
import { BasketPage } from '../components/BasketPage/BasketPage';
import { RootComponent } from '../components/Core/Root';
import { MainPage } from '../components/MainPage/MainPage';
import { PayPage } from '../components/PayPage/PayPage';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { ProductCardID } from '../components/ProductCard/ProductCardID';
import { ProductCardType } from '../components/ProductCard/ProductCardType';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <RootComponent />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ROUTES.pay,
        element: <PayPage />,
      },
      {
        path: ROUTES.productsAll,
        element: <ProductCard />,
      },
      {
        path: ROUTES.productsType,
        element: <ProductCardType />,
      },
      {
        path: `${ROUTES.productID}/:id`,
        element: <ProductCardID />,
      },
      {
        path: ROUTES.auth,
        element: <AuthPage />,
      },
      // {
      //   path: ROUTES.authFormik,
      //   element: <AuthPageFormik />,
      // },
      {
        path: ROUTES.register,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.basket,
        element: <BasketPage />,
      },
    ],
  },
]);
