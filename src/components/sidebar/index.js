import { Layout, Menu } from 'antd';
import React from 'react';
import { InfoCircleOutlined, QuestionOutlined } from '@ant-design/icons';
import './style.scss';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
const Sidebar = ({ collapsed }) => {
	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			width={150}
			className='sidebar'
		>
			<div className='sider-menu-logo'>
				<Link to='/'> hotel revealer </Link>{' '}
			</div>{' '}
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
				<Menu.Item key='1' icon={<QuestionOutlined />}>
					<Link to='about'> About </Link>{' '}
				</Menu.Item>{' '}
				<Menu.Item key='2' icon={<InfoCircleOutlined />}>
					<Link to='disclamer'> disclamer </Link>{' '}
				</Menu.Item>{' '}
			</Menu>{' '}
		</Sider>
	);
};

export default Sidebar;
