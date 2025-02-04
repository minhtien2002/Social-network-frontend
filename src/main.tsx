import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouteConfig } from './routes/route.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter >
      <RouteConfig></RouteConfig>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
