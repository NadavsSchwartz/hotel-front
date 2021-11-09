import { Col, Skeleton } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
import HotelCard from '../components/cards/HotelCard';
import { useGetPricelineDealsQuery } from '../services/pricelineApi';
import { useSelector } from 'react-redux';
import { GetListings } from '../utils';

const Results = () => {
	const { body } = useSelector((state) => state.pricelineBodyReducer);

	const { data: pricelineQueryResponse, isLoading: loadingPricelineQuery } =
		useGetPricelineDealsQuery(body);
	// useEffect(() => {
	// 	if (!loadingPricelineQuery && pricelineQueryResponse) {
	// 		GetListings(pricelineQueryResponse);
	// 	}
	// }, [loadingPricelineQuery, pricelineQueryResponse]);

	return (
		<Content style={{ marginTop: '20px', overflow: 'auto' }}>
			<Skeleton loading={loadingPricelineQuery} active>
				{pricelineQueryResponse &&
					pricelineQueryResponse.expressDeals.map((hotel) => (
						<Col style={{ padding: '25px', overflow: 'auto' }}>
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
							/>
						</Col>
					))}
			</Skeleton>
		</Content>
	);
};

export default Results;
