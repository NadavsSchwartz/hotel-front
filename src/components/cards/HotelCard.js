import React from 'react';
import { Card, Rate, Typography } from 'antd';
const { Meta } = Card;
const { Paragraph, Text } = Typography;

const HotelCard = ({
	totalStayPrice,
	name,
	neighborhoodName,
	description,
	guestRating,
	hotelStars,
	dailyPrice,
	reviewCount,
	thumbnailUrl,
}) => {
	console.log(thumbnailUrl);
	return (
		<Card
			hoverable
			cover={<img alt='hotel thumbnail ' src={`${thumbnailUrl}`} />}
		>
			<Meta
				title={
					<Text underline strong>
						{name}
					</Text>
				}
				description={
					<div>
						<Rate value={hotelStars} disabled />
						<Paragraph type='secondary' ellipsis={{ rows: 2 }}>
							{description}
						</Paragraph>
					</div>
				}
			/>
			<p>trip price each day ${dailyPrice}</p>
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
