import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';

createRoot(document.getElementById('root') as Element).render(
  <Provider store={ store }>
    <App />
  </Provider>,
);
