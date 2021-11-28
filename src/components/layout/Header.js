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
				<Col span={12} md={6}>
					<Breadcrumb>
						<Breadcrumb.Item>
							<NavLink to='/dashboard'>Home</NavLink>
						</Breadcrumb.Item>
						<Breadcrumb.Item style={{ textTransform: 'capitalize' }}>
							{name.replace('/', '')}
						</Breadcrumb.Item>
					</Breadcrumb>
					<div className='ant-page-header-heading'>
						<span
							className='ant-page-header-heading-title'
							style={{ textTransform: 'capitalize' }}
						>
							{subName.replace('/', '')}
						</span>
					</div>
				</Col>
				<Col span={12} md={18} className='header-control'>
					<Badge size='small' count={1}>
						<Dropdown overlay={notificationMenu} trigger={['click']}>
							<a
								href='#notification'
								className='ant-dropdown-link'
								onClick={(e) => {
									e.preventDefault();
								}}
							>
								{bell}
							</a>
						</Dropdown>
					</Badge>

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
