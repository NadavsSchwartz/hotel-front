import { Col, PageHeader, Row, Skeleton, Alert, List } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import HotelCard from '../components/cards/HotelCard';
import { useGetPricelineDealsQuery } from '../services/pricelineApi';

import { useHistory } from 'react-router';
const Results = () => {
	const [pageSize, setPageSize] = useState(12);
	const history = useHistory();
	const hash = history.location.search.split('=')[1];
	const {
		data: pricelineQueryResponse,
		isLoading,
		error,
	} = useGetPricelineDealsQuery(hash);
	useEffect(() => {
		if (!hash) {
			return history.push('/');
		}
	}, [hash, history]);
	return (
		<Content style={{ marginTop: '10px', overflow: 'scroll' }}>
			<div>
				<PageHeader
					ghost={true}
					onBack={() => window.history.back()}
					title='Go Back'
				/>
			</div>

			<Row align='middle' justify='center'>
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
						position: 'top',
						responsive: true,
						pageSizeOptions: ['12', '24', '36'],
						pageSize: pageSize,
						onShowSizeChange: (current, size) => {
							setPageSize(size);
						},
						showTotal: (total, range) =>
							`${range[0]}-${range[1]} of ${total} items`,
					}}
					dataSource={pricelineQueryResponse}
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
					{/* <Skeleton loading={isLoading} active>
						{pricelineQueryResponse &&
							pricelineQueryResponse.length > 0 &&
							pricelineQueryResponse.map((hotel) => (
								<Col
									style={{ padding: '5px', minHeight: '100%' }}
							 
								>
									<HotelCard
										totalStayPrice={hotel.expressDealPricePerStay}
										neighborhoodName={hotel.location.neighborhoodName}
										description={hotel.description}
										guestRating={hotel.overallGuestRating}
										hotelStars={hotel.starRating}
										dailyPrice={hotel.expressDealDailyPrice}
										reviewCount={hotel.totalReviewCount}
										key={hotel.retailPclnId}
										name={hotel.hotelName}
										thumbnailUrl={hotel.thumbnailUrl}
										style={{ height: '100%' }}
									/>
								</Col>
							))} */}
					{error && (
						<Alert
							style={{ width: '100%' }}
							message={error.data.message}
							description={'if the error persists, please contact us'}
							type='error'
							closable
						/>
					)}
					{/* </Col> */}
					{/* </Skeleton> */}
				</List>
			</Row>
		</Content>
	);
};

export default Results;
