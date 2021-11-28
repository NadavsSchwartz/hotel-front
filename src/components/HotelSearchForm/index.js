import {
	Form,
	Button,
	Card,
	AutoComplete,
	DatePicker,
	Row,
	Col,
	Skeleton,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { autoCities } from '../constants/cities';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { AES } from 'crypto-js';
import logo from '../../assets/images/bg-image.jpeg';
import {
	getClientIp,
	getHotelDeals,
	getLatestHotelDeals,
} from '../../store/actions/HotelDealsAction';
const { RangePicker } = DatePicker;
const HotelSearchForm = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const history = useHistory();
	const { loading, latestDeals, clientIp } = useSelector(
		(state) => state.HotelDeals
	);

	useEffect(() => {
		if (!clientIp) dispatch(getClientIp());
		if (!latestDeals) dispatch(getLatestHotelDeals());
	}, [clientIp, dispatch]);

	const onFinish = async (values) => {
		const { cityName, dates } = values;
		const checkIn = dates[0].format('YYYYMMDD');
		const checkOut = dates[1].format('YYYYMMDD');

		const body = {
			checkIn: checkIn,
			checkOut: checkOut,
			cityName: cityName,
			clientIp: clientIp && clientIp.IPv4 ? clientIp.IPv4 : '',
		};
		const encrypted = AES.encrypt(
			JSON.stringify(body),
			process.env.REACT_APP_SECRET
		).toString();

		dispatch(getHotelDeals(encrypted));
		history.push(`/results?q=${encrypted}`);
	};
	// Can not select days before today
	const disabledDate = (current) => {
		return (
			current &&
			current < ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date())
		);
	};

	return (
		<>
			<div
				className='profile-nav-bg'
				style={{ backgroundImage: 'url(' + logo + ')' }}
			></div>
			<Card
				className='card-profile-head'
				title={
					<Row justify='center'>
						<h2>Find a room</h2>
					</Row>
				}
			>
				<Row justify={'center'}>
					<Form
						form={form}
						onFinish={onFinish}
						layout='vertical'
						requiredMark={false}
						style={{ justifyContent: 'center' }}
					>
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
							label='Dates'
							rules={[{ required: true }]}
						>
							<RangePicker
								disabledDate={disabledDate}
								style={{ width: '100%' }}
							/>
						</Form.Item>

						<Form.Item>
							<Col sm={24}>
								<Button type='primary' htmlType='submit' block>
									Submit
								</Button>
							</Col>
						</Form.Item>
					</Form>
				</Row>
			</Card>
			<div justify='center'>
				<Skeleton active loading={loading}>
					<Card
						bordered={false}
						className='header-solid mb-24'
						title={
							<Row justify="center">

								<h6 className='font-semibold'>Recent Searches</h6>
								
							</Row>
						}
					>
						<Row gutter={[24, 24]}>
							{latestDeals &&
								latestDeals.map((deal, index) => (
									<Col span={24} md={12} xl={6} key={index}>
										<Card
											bordered={false}
											className='card-project'
											cover={<img alt='example' src={deal.data.[0].thumbnailUrl} />}
										>
											<div className='card-tag'>{deal.data.[0].hotelName}</div>
											<h5>{deal.data.[0].title}</h5>
											<p>{deal.data.[0].address.cityName}, {deal.data.[0].address.provinceCode }</p>
											{/* <Row gutter={[6, 0]} className='card-footer'>
												<Col span={12}>
													 <Button type='button'>VIEW PROJECT</Button> 
												</Col>
												<Col span={12} className='text-right'>{deal.data.[0].address.cityName}, {deal.data.[0].address.provinceCode }</Col>
											</Row> */}
										</Card>
									</Col>
								))}
						</Row>
					</Card>
				</Skeleton>
			</div>
		</>
	);
};

export default HotelSearchForm;
