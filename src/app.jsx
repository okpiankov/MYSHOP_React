import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
// import { rootStore } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, rootStore } from './store/store';

export const App = () => {
  return (
    <Provider store={rootStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />;
      </PersistGate>
    </Provider>
  );
};
