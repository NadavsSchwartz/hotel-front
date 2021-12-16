import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
// import { AuthContext } from 'context/AuthProvider';
// import {
//   HOME_PAGE,
//   LISTING_POSTS_PAGE,
//   PRICING_PLAN_PAGE,
//   AGENT_ACCOUNT_SETTINGS_PAGE,
// } from 'settings/constant';

const MobileMenu = ({ className }) => {
  // auth context
  // const { loggedIn, logOut } = useContext(AuthContext);

  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to="/latest">Recent Searches</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/privacy">Privacy</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default MobileMenu;
