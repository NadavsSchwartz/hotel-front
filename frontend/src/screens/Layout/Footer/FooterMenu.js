import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

const FooterMenu = () => {
	return (
		<Menu>
			<Menu.Item key='0'>
				<NavLink to='/'>Home</NavLink>
			</Menu.Item>
			<Menu.Item key='1'>
				<NavLink to='/recent-deals'>Recent Searches</NavLink>
			</Menu.Item>
			<Menu.Item key='2'>
				<NavLink to='/privacy'>Privacy</NavLink>
			</Menu.Item>
						<Menu.Item key='2'>
				<NavLink to='/terms'>Terms</NavLink>
			</Menu.Item>
		</Menu>
	);
};

export default FooterMenu;
