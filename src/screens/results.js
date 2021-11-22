import { PageHeader, Row, Menu, Alert, List } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import HotelCard from '../components/cards/HotelCard';
import { useGetPricelineDealsQuery } from '../services/pricelineApi';

import { useHistory } from 'react-router';

import { SettingOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { menuItems } from '../utils';

const Results = () => {
	const [pageSize, setPageSize] = useState(10);
	const history = useHistory();
	const hash = history.location.search.split('=')[1];
	const [sortedDeals, setSortedDeals] = useState([]);
	const { data, isLoading, error } = useGetPricelineDealsQuery(hash);
	useEffect(() => {
		if (!hash) {
			return history.push('/');
		}
	}, [hash, history]);

	const copiedData = data;

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
		<Content style={{ marginTop: '10px', overflow: 'scroll' }}>
			<Row>
				<PageHeader
					ghost={true}
					onBack={() => window.history.back()}
					title='Back'
				/>
			</Row>
			<Menu mode='horizontal'>
				<SubMenu key='Price' icon={<SettingOutlined />} title={'Sort By'}>
					{menuItems(handleClick)}
				</SubMenu>
			</Menu>
			<Row justify='center'>
				<List
					style={{ width: '90%' }}
					grid={{
						gutter: 12,
						xs: 1,
						sm: 2,
						md: 2,
						lg: 3,
						xl: 4,
						xxl: 5,
					}}
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
						sortedDeals && sortedDeals.length > 0 ? sortedDeals : data
					}
					loading={isLoading}
					renderItem={(hotel) => (
						<List.Item style={{ marginTop: '10px' }}>
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
							/>
						</List.Item>
					)}
				>
					{error && (
						<Alert
							style={{ width: '100%' }}
							message={error.data.message}
							description={'if the error persists, please contact us'}
							type='error'
							closable
						/>
					)}
				</List>{' '}
			</Row>
		</Content>
	);
};

export default Results;
