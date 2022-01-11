import React, { Fragment, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Card, Layout as LayoutWrapper } from 'antd';
import useWindowSize from '../../library/hooks/useWindowSize';
import LayoutProvider from '../../context/LayoutProvider';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Modal from 'antd/lib/modal/Modal';
import { CloseCircleTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SHOW_MODAL } from '../../store/StaticDataReducer';
const { Content } = LayoutWrapper;
export default function Layout() {
  let location = useLocation();
  const dispatch = useDispatch();
  const [isShowModal, SetIsShowModal] = useState(false);
  const { showModal } = useSelector((state) => state.StaticData);
  useEffect(() => {
    if (showModal !== 'false' && location.pathname === '/') {
      setTimeout(() => {
        SetIsShowModal(true);
      }, 5000);
    }
  }, []);
  return (
    <LayoutProvider>
      <Fragment>
        <Header />
        <Content>
          <Outlet />

          <Modal
            centered={true}
            forceRender={true}
            style={{
              borderRadius: '10px',
              backgroundColor: '#ffff',
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
              width: '100% !important',
            }}
            visible={isShowModal}
            footer={null}
            onCancel={() => {
              return (
                localStorage.setItem('showModal', false),
                dispatch({ type: SET_SHOW_MODAL, payload: false }),
                SetIsShowModal(false)
              );
            }}
            closeIcon={
              <CloseCircleTwoTone
                style={{ fontSize: '22px' }}
                twoToneColor="#ec1b1b"
              />
            }
            destroyOnClose={true}
          >
            <h2>What is Hotel Revealer?</h2>

            <h3>
              We help you find a cheaper rate for your future hotel reservation
              by finding the hidden hotels from priceline.com.
            </h3>
          </Modal>
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
