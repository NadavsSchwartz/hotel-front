import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

import { dashboard } from '../../utils/icons';

const Sidebar = ({ color }) => {
	const { pathname } = useLocation();
	const page = pathname.replace('/', '');

	return (
		<>
			<div className='brand'>
				<span>HR |</span>
				<span>HOTEL REVEALER</span>
			</div>
			<hr />
			<Menu theme='light' mode='inline'>
				<Menu.Item key='1'>
					<NavLink to='/dashboard'>
						<span
							className='icon'
							style={{
								background: page === 'dashboard' ? color : '',
							}}
						>
							{dashboard(color)}
						</span>
						<span className='label'>Home</span>
					</NavLink>
				</Menu.Item>
				{/* <Menu.Item key='7'>
					<NavLink to='/sign-in'>
						<span className='icon'>{signin(color)}</span>
						<span className='label'>Sign In</span>
					</NavLink>
				</Menu.Item>
				<Menu.Item key='8'>
					<NavLink to='/sign-up'>
						<span className='icon'>{signup(color)}</span>
						<span className='label'>Sign Up</span>
					</NavLink>
				</Menu.Item> */}
			</Menu>
			{/* {page === 'results' && (
				<div className='aside-footer'>
					<hr />

					<Menu mode='inline'>
						{/* <SubMenu key='Price' icon={<SettingOutlined />} title={'Sort By'}> 
						{menuItems()}
						{/* </SubMenu>  
					</Menu>
				</div>
			)} */}
		</>
	);
};
export default Sidebar;
