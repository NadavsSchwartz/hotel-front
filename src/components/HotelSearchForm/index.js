import { Form, Button, Card, AutoComplete, DatePicker, Row, Col } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import HotelCard from '../cards/HotelCard';
import { autoCities } from '../constants/cities';
const { RangePicker } = DatePicker;

const HotelSearchForm = () => {
	const [loading, setLoading] = useState(false);
	const [form] = Form.useForm();
	const [clientIp, setClientIp] = useState('');
	const [hotelList, setHotelList] = useState([]);
	useEffect(() => {
		const getClientIp = async () => {
			const { data } = await axios.get('https://geolocation-db.com/json/');
			setClientIp(data.IPv4);
		};
		getClientIp();
	}, []);
	const onFinish = async (values) => {
		const { cityName, dates } = values;
		const checkIn = dates[0].format('YYYYMMDD');
		const checkOut = dates[1].format('YYYYMMDD');
		setLoading(true);
		const { data } = await axios.post('http://localhost:4000/api/hotelDeals', {
			clientIp,
			cityName,
			checkIn,
			checkOut,
		});
		const deepPick = (paths, obj) => {
			return _.fromPairs(
				paths.map((p) => [_.last(p.split('.')), _.get(obj, p)])
			);
		};

		const expressDeals = data.expressDeals.map((hotel) =>
			deepPick(
				[
					'starRating',
					'totalReviewCount',
					'overallGuestRating',
					'displayStrikePrice',
					'location.neighborhoodName',
					'location.neighborhoodID',
					'location.cityId',
				],
				hotel
			)
		);

		debugger;
		setHotelList(data.expressDeals.listings.hotels);
		setLoading(false);
	};
	const disabledDate = (current) => {
		// Can not select days before today and today
		return (
			current &&
			current < ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date())
		);
	};
	return (
		<div
			style={{
				overflow: 'auto',
				backgroundImage: `url('https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=450&w=30)`,
			}}
		>
			<Row justify='center'>
				<Card
					loading={loading}
					size='small'
					style={{ marginTop: '10px', width: '500px' }}
				>
					<div
						style={{
							textAlign: 'center',
							paddingBottom: '10px',
						}}
					>
						<h2>Find a room </h2>
					</div>
					<Form form={form} name='control-hooks' onFinish={onFinish}>
						<Form.Item
							name='cityName'
							label='City Name'
							rules={[{ required: true }]}
						>
							<AutoComplete
								options={autoCities}
								placeholder='Las Vegas, NV'
								filterOption={(inputValue, option) =>
									option.value
										.toUpperCase()
										.indexOf(inputValue.toUpperCase()) !== -1
								}
							/>
						</Form.Item>
						<Form.Item
							name={['dates']}
							label='Check in - Check out'
							rules={[{ required: true }]}
						>
							<RangePicker disabledDate={disabledDate} />
						</Form.Item>

						<Form.Item>
							<Button type='primary' htmlType='submit'>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</Row>

			<Content style={{ marginTop: '20px' }}>
				{hotelList &&
					hotelList.map((hotel) => (
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
			</Content>
		</div>
	);
};

export default HotelSearchForm;
