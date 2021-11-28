import React from 'react';
import { Badge, Card, Col, Popover, Row, Typography, Button } from 'antd';

import { InfoCircleOutlined, StarFilled } from '@ant-design/icons';
import { PopoverContent } from '../../utils';

const { Meta } = Card;
const { Text } = Typography;
const HotelCard = ({
	totalStayPrice,
	name,
	neighborhoodName,
	pclnId,
	checkIn,
	checkOut,
	cityId,
	guestRating,
	hotelStars,
	dailyPrice,
	reviewCount,
	thumbnailUrl,
}) => {
	return (
		<Badge.Ribbon
			text={
				<div>
					{hotelStars}
					<StarFilled />
				</div>
			}
			color={hotelStars <= 3 ? 'red' : hotelStars <= 4 ? 'orange' : '#52c41a'}
		>
			<Card
				hoverable
				cover={<img alt='hotel thumbnail ' src={`${thumbnailUrl}`} />}
			>
				<Meta title={<Text strong>{name}</Text>} />
				<div style={{ paddingTop: '10px' }}>
					<Col span={20} style={{ display: 'inline-block' }}>
						<Text type='secondary' ellipsis={true}>
							{neighborhoodName.split(' -')[0]}
						</Text>{' '}
					</Col>
					<Col span={4} style={{ float: 'right' }}>
						<Popover title='How do we match hotels?' content={PopoverContent}>
							<InfoCircleOutlined />
						</Popover>
					</Col>
				</div>
				<div style={{ paddingTop: '10px' }}>
					<Row
						style={{
							margin: '5px',
							display: 'inline-block',
						}}
					>
						<Col span={24}>
							{' '}
							<Badge
								count={`${guestRating} / 10`}
								style={{
									backgroundColor:
										guestRating <= 6
											? 'red'
											: guestRating <= 8
											? 'orange'
											: '#52c41a',
								}}
							/>
						</Col>
						<Col span={24}>
							<Text strong>{reviewCount} Reviews</Text>
						</Col>
					</Row>

					<div style={{ float: 'right' }}>
						<h2
							style={{ color: '#0da834', height: '20px', fontWeight: 'bolder' }}
						>
							${`${dailyPrice.split('.')[0]}`}
						</h2>
						<span>
							<h5 style={{ float: 'right' }}>${totalStayPrice} total</h5>
						</span>
					</div>
				</div>

				<div style={{ paddingTop: '10px' }}>
					<Button block type='primary'>
						<a
							target='_blank'
							href={`https://www.priceline.com/relax/at/express/${cityId}/${pclnId}/from/${checkIn}/to/${checkOut}/rooms/1?cjevent=fcfda7644b3611ec811b250b0a1c0e0d&refid=CO8733109&refclickid=11554367SID&vrid=c9cef1a61be73ee0974a88e1c8437fc5}`}
							rel='noreferrer'
						>
							<h5 style={{ color: '#fff' }}>HEAD TO PRICELINE</h5>
						</a>
					</Button>
				</div>
			</Card>
		</Badge.Ribbon>
	);
};

export default HotelCard;
