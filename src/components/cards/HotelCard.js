import React from 'react';
import { Card, Col } from 'antd';
const { Meta } = Card;

const HotelCard = ({
	totalStayPrice,
	name,
	neighborhoodName,
	description,
	guestRating,
	hotelStars,
	dailyPrice,
	reviewCount,
}) => {
	return (
		<Card hoverable>
			<Meta title={`$${dailyPrice} Per Day`} description={description} />
			<p>Total trip for all days ${totalStayPrice}</p>
			<p>The hotel will be around {neighborhoodName}</p>
			<p>
				The hotel have {hotelStars} stars and is rated {guestRating}/10
			</p>
			<p>with {reviewCount} reviews</p>
		</Card>
	);
};

export default HotelCard;
