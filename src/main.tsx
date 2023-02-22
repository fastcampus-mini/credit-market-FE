import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from './store/store';
import CookiesProvider from 'react-cookie/cjs/CookiesProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CookiesProvider>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </CookiesProvider>,
);
