import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { persistor, store } from './redux/app/store.js';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '../public/images/ErrorPage.jsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary
        FallbackComponent={ErrorPage}
        onReset={() => {
          location.href = '/';
        }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);
