import React, { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout as LayoutWrapper } from 'antd';
import useWindowSize from '../../library/hooks/useWindowSize';
import LayoutProvider from '../../context/LayoutProvider';

import Header from './Header/Header';
import Footer from './Footer/Footer';
const { Content } = LayoutWrapper;

export default function Layout() {
  let location = useLocation();
  const { width } = useWindowSize();

  return (
    <LayoutProvider>
      <Fragment>
        <Header />
        <Content>
          <Outlet />
        </Content>

        {location.pathname !== '/' && (
          <Fragment>
            <Footer />
          </Fragment>
        )}
      </Fragment>
    </LayoutProvider>
  );
}

 
