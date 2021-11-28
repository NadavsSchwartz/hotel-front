import { Row, Menu, Alert, List } from 'antd';

import React, { useEffect, useState } from 'react';
import HotelCard from '../components/cards/HotelCard';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { SettingOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { menuItems } from '../utils';

const Results = () => {
	const [pageSize, setPageSize] = useState(12);
	const history = useHistory();
	const hash = history.location.search.split('=')[1];
	const [sortedDeals, setSortedDeals] = useState([]);
	const { foundDeals, loading, error } = useSelector(
		(state) => state.HotelDeals
	);

	// useEffect(() => {
	// 	if (!hash) {
	// 		return history.push('/');
	// 	}
	// }, [hash, history]);

	const copiedData = foundDeals;

	const handleClick = async (e) => {
		//avoiding the error of manipulating the original data
		const res = copiedData.slice();
		switch (e.key) {
			case 'priceLowToHigh':
				res.sort((a, b) => a.expressDealDailyPrice - b.expressDealDailyPrice);
				break;
			case 'priceHighToLow':
				res.sort((a, b) => b.expressDealDailyPrice - a.expressDealDailyPrice);
				break;
			case 'GuestRatingLowToHigh':
				res.sort((a, b) => a.overallGuestRating - b.overallGuestRating);
				break;
			case 'GuestRatingHighToLow':
				res.sort((a, b) => b.overallGuestRating - a.overallGuestRating);
				break;
			case 'StarRatingLowToHigh':
				res.sort((a, b) => a.starRating - b.starRating);
				break;
			case 'StarRatingHighToLow':
				res.sort((a, b) => b.starRating - a.starRating);
				break;

			default:
				break;
		}
		setSortedDeals(res);
	};
	return (
		<>
			<Menu mode='horizontal'>
				<SubMenu key='Price' icon={<SettingOutlined />} title={'Sort By'}>
					{menuItems(handleClick)}
				</SubMenu>
			</Menu>
			<Row justify='center'>
				<List
					grid={{
						gutter: 16,
						xs: 1,
						sm: 2,
						md: 2,
						lg: 3,
						xl: 3,
						xxl: 4,
					}}
					style={{ width: '90%' }}
					pagination={{
						responsive: true,
						pageSizeOptions: ['12', '24', '36'],
						pageSize: pageSize,
						onShowSizeChange: (current, size) => {
							setPageSize(size);
						},
						showTotal: (total, range) =>
							`${range[0]}-${range[1]} of ${total} items`,
					}}
					dataSource={
						sortedDeals && sortedDeals.length > 0 ? sortedDeals : foundDeals
					}
					loading={loading}
					renderItem={(hotel) => (
						<List.Item style={{ marginTop: '10px' }} bordered={false}>
							<HotelCard
								totalStayPrice={hotel.expressDealPricePerStay}
								neighborhoodName={hotel.location.neighborhoodName}
								guestRating={hotel.overallGuestRating}
								hotelStars={hotel.starRating}
								dailyPrice={hotel.expressDealDailyPrice}
								reviewCount={hotel.totalReviewCount}
								key={hotel.retailPclnId}
								name={hotel.hotelName}
								thumbnailUrl={hotel.thumbnailUrl}
								cityId={hotel.location.cityId}
								pclnId={hotel.pclnId}
								checkIn={hotel.checkIn}
								checkOut={hotel.checkOut}
							/>
						</List.Item>
					)}
				>
					{error && (
						<Alert
							style={{ width: '100%' }}
							message={error?.data?.message}
							description={'if the error persists, please contact us'}
							type='error'
							closable
						/>
					)}
				</List>{' '}
			</Row>
		</>
	);
};

export default Results;
