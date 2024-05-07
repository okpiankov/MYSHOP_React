import { createBrowserRouter } from 'react-router-dom';
import { RootComponent } from '../components/Core/Root';
import { ROUTES } from './routes';
import { MainPage } from '../components/MainPage/MainPage';
import { PayPage } from '../components/PayPage/PayPage';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { ProductCardType } from '../components/ProductCard/ProductCardType';
import { ProductCardID } from '../components/ProductCard/ProductCardID';
import { AuthPage } from '../components/Auth/AuthPage';
import { RegisterPage } from '../components/Auth/RegisterPage';

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
        path: ROUTES.productAll,
        element: <ProductCard />,
      },
      {
        path: ROUTES.product,
        element: <ProductCardType />,
      },
      {
        path: ROUTES.auth,
        element: <AuthPage />,
      },
      {
        path: ROUTES.register,
        element: <RegisterPage />,
      },
      {
        path: `${ROUTES.productID}/:id`,
        element: <ProductCardID />,
      },
    ],
  },
]);

