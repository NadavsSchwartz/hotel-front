import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

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
