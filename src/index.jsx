import { createRoot } from 'react-dom/client';

import 'normalize.css';
import { App } from './app';




// eslint-disable-next-line no-undef
const app = document.getElementById('app');

if (app) {
  const root = createRoot(app);

  root.render(<App />);
}
