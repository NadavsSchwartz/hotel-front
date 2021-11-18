import { Col, Row, Skeleton } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
import HotelCard from '../components/cards/HotelCard';
import { useGetPricelineDealsQuery } from '../services/pricelineApi';
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router';

const Results = () => {
	const history = useHistory();
	const hash = history.location.search.split('=')[1];
	const { data: pricelineQueryResponse, isLoading } =
		useGetPricelineDealsQuery(hash);
	useEffect(() => {
		if (hash.lengnth === 0) {
			return history.push('/');
		}
	}, [hash, history]);

	return (
		<Content style={{ marginTop: '20px', overflow: 'auto' }}>
			<Row>
				<Skeleton loading={isLoading} active>
					<Col style={{ padding: '25px', overflow: 'auto' }} lg={12}>
						<h3 style={{ paddingLeft: '115px', overflow: 'auto' }}>
							Express Deals
						</h3>
						{pricelineQueryResponse &&
							pricelineQueryResponse?.expressDeals?.map((hotel) => (
								<div style={{ padding: '5px' }}>
									<HotelCard
										totalStayPrice={hotel.ratesSummary.displayPricePerStay}
										neighborhoodName={hotel.location.neighborhoodName}
										description={
											hotel.description
												? hotel.description
												: 'That hotel does not have description'
										}
										guestRating={hotel.overallGuestRating}
										hotelStars={hotel.starRating}
										dailyPrice={hotel.ratesSummary.minPrice}
										reviewCount={hotel.totalReviewCount}
										key={hotel.ratesSummary.rateIdentifier}
										name={hotel.name ? hotel.name : 'No name'}
										style={{ height: '100%' }}
									/>
								</div>
							))}
					</Col>
				</Skeleton>
			</Row>
		</Content>
	);
};

export default Results;
