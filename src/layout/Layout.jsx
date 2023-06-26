import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

//Outlet is used to render all routes in RouterProvider as its children
//Layout maintains a standard layout for the entire website
//In this case, Header is present in all webpages with each route rendering a page below it
const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;