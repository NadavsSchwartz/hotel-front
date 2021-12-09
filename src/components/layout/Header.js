import { useEffect } from 'react';

import { Row, Col, Breadcrumb, Badge, Dropdown, Button } from 'antd';

import { NavLink } from 'react-router-dom';
import { bell, toggler } from '../../utils/icons';
import { notificationMenu } from '../../utils';

const Header = ({ name, subName, onPress }) => {
	useEffect(() => window.scrollTo(0, 0));

	return (
		<>
			<Row gutter={[24, 0]}>
				<Col span={12} md={6} justify='center'>
					<Breadcrumb style={{ marginLeft: '5px', marginRight: '5px' }}>
						<Breadcrumb.Item>
							<NavLink to='/dashboard' style={{ color: 'white' }}>
								Dashboard
							</NavLink>
						</Breadcrumb.Item>
						<Breadcrumb.Item style={{ textTransform: 'capitalize' }}>
							{name.replace('/', '')}
						</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
				<Col span={12} md={18} className='header-control'>
					<Button
						type='link'
						className='sidebar-toggler'
						onClick={() => onPress()}
					>
						{toggler}
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default Header;
