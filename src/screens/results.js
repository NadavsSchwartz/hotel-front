import { Row, Menu, Alert, List, Card, Skeleton } from 'antd';

import React, { useEffect, useState } from 'react';
import HotelCard from '../components/cards/HotelCard';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import logo from '../assets/images/resultsbg.jpg';
import { SettingOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { dateConverter, isValidated, menuItems } from '../utils';
import { getHotelDeals } from '../store/actions/HotelDealsAction';

const Results = () => {
	const [pageSize, setPageSize] = useState(12);

	const history = useHistory();
	const dispatch = useDispatch();
	const hash = history.location.search.split('=')[1];
	const [sortedDeals, setSortedDeals] = useState([]);
	const { foundDeals, loading, error } = useSelector(
		(state) => state.HotelDeals
	);

	useEffect(() => {
		if (hash && isValidated(hash)) dispatch(getHotelDeals(hash));
	}, [dispatch]);

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
			<div>
				{!error && (
					<Skeleton active='true' loading={loading}>
						<div
							className='profile-nav-bg'
							style={{ backgroundImage: 'url(' + logo + ')' }}
						></div>
						<Row justify='center'>
							<Card
								className='card-profile-head'
								title={
									<>
										<Row justify='center'>
											<h2>Your search results for</h2>
										</Row>
										<br />
										<Row justify='center'>
											<h2>
												{foundDeals[0]?.address?.cityName},{' '}
												{foundDeals[0]?.address?.provinceCode} on{' '}
												{foundDeals[0]?.checkIn
													? dateConverter(foundDeals[0]?.checkIn)
													: ''}
											</h2>
										</Row>
									</>
								}
							></Card>
						</Row>
					</Skeleton>
				)}
			</div>
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
						xl: 4,
						xxl: 5,
					}}
					style={{ width: '95%' }}
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
						<List.Item style={{ marginTop: '10px' }} bordered='false'>
							<HotelCard
								totalStayPrice={hotel.expressDealPricePerStay}
								neighborhoodName={hotel.location?.neighborhoodName}
								guestRating={hotel.overallGuestRating}
								hotelStars={hotel.starRating}
								dailyPrice={hotel.expressDealDailyPrice}
								reviewCount={hotel.totalReviewCount}
								key={hotel.retailPclnId}
								name={hotel.hotelName}
								thumbnailUrl={hotel.thumbnailUrl}
								cityId={hotel.location?.cityId}
								pclnId={hotel.pclnId}
								checkIn={hotel.checkIn}
								checkOut={hotel.checkOut}
								hotelId={hotel.hotelId}
							/>
						</List.Item>
					)}
				>
					{error && (
						<Alert
							style={{ width: '100%' }}
							message={error.data?.message || error}
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
