import { Provider } from 'react-redux';
import { rootStore } from './store/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

export const App = () => {
  return (
    <Provider store={rootStore}>
      <RouterProvider router={router} />;
    </Provider>
  );
};
