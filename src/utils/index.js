import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Menu, List, Avatar } from 'antd';

import { clockicon, credit } from './icons';

export const PopoverContent = (
	<div>
		<p>...</p>
		<p>....</p>
	</div>
);
export const menuItems = (handleClick) => {
	return (
		<>
			<Menu.Item key='priceHighToLow' onClick={handleClick}>
				<ArrowDownOutlined style={{ color: 'green' }} />
				Price
			</Menu.Item>
			<Menu.Item key='priceLowToHigh' onClick={handleClick}>
				<ArrowUpOutlined style={{ color: 'red' }} /> Price
			</Menu.Item>

			<Menu.Item key='GuestRatingHighToLow' onClick={handleClick}>
				<ArrowDownOutlined style={{ color: 'green' }} />
				Guest Rating
			</Menu.Item>
			<Menu.Item key='GuestRatingLowToHigh' onClick={handleClick}>
				<ArrowUpOutlined style={{ color: 'red' }} />
				Guest Rating
			</Menu.Item>

			<Menu.Item key='StarRatingHighToLow' onClick={handleClick}>
				<ArrowDownOutlined style={{ color: 'green' }} />
				Star Rating
			</Menu.Item>
			<Menu.Item key='StarRatingLowToHigh' onClick={handleClick}>
				<ArrowUpOutlined style={{ color: 'red' }} />
				Star Rating
			</Menu.Item>
		</>
	);
};

export const notificationData = [
	{
		title: 'Payment completed',
		description: <>{clockicon} 2 days ago</>,
		avatar: <Avatar shape='square'>{credit}</Avatar>,
	},
];

export const notificationMenu = (
	<List
		min-width='100%'
		className='header-notifications-dropdown '
		itemLayout='horizontal'
		dataSource={notificationData}
		renderItem={(item) => (
			<List.Item>
				<List.Item.Meta
					avatar={<Avatar shape='square' src={item.avatar} />}
					title={item.title}
					description={item.description}
				/>
			</List.Item>
		)}
	/>
);
