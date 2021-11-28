import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Drawer, Affix } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const { Header: AntHeader, Content, Sider } = Layout;

const Main = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const [fixed, setFixed] = useState(false);

	const openDrawer = () => setVisible(!visible);
	const handleFixedNavbar = (type) => setFixed(type);

	let { pathname } = useLocation();
	pathname = pathname.replace('/', '');

	return (
		<Layout
			className={`layout-dashboard ${
				pathname === 'dashboard' ? 'layout-profile' : ''
			}`}
		>
			<Drawer
				title={false}
				placement='left'
				closable={false}
				onClose={() => setVisible(false)}
				visible={visible}
				key='left'
				width={200}
			>
				<Layout className='layout-dashboard'>
					<Sider
						trigger={null}
						width={200}
						theme='light'
						className={`sider-primary ant-layout-sider-primary ${
							'transparent' === '#fff' ? 'active-route' : ''
						}`}
						style={{ background: 'transparent' }}
					>
						<Sidebar color={'#1890ff'} />
					</Sider>
				</Layout>
			</Drawer>
			<Sider
				breakpoint='lg'
				collapsedWidth='0'
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
				trigger={null}
				width={200}
				theme='light'
				className={`sider-primary ant-layout-sider-primary ${
					'transparent' === '#fff' ? 'active-route' : ''
				}`}
				style={{ background: 'transparent' }}
			>
				<Sidebar color={'#1890ff'} />
			</Sider>
			<Layout>
				<AntHeader className={`${fixed ? 'ant-header-fixed' : ''}`}>
					<Header
						onPress={openDrawer}
						name={pathname}
						subName={pathname}
						handleFixedNavbar={handleFixedNavbar}
					/>
				</AntHeader>
				<Content className='content-ant'>{children}</Content>
				<Footer />
			</Layout>
		</Layout>
	);
};

export default Main;
