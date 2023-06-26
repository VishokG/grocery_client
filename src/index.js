import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Checkout from './components/Checkout';
import store from "./store/store";
import Header from './components/Header';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <><Categories /><ProductGrid /></>,
      },
      {
        path: "checkout",
        element: <Checkout />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
