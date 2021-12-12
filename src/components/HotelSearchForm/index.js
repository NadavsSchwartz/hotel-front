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
import { Link, useN, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import logo from '../../assets/images/bg-image.jpeg';
import { getLatestHotelDeals } from '../../store/actions/HotelDealsAction';
import Text from 'antd/lib/typography/Text';
import { dateConverter, encrypt, timeAgo } from '../../utils';
const { RangePicker } = DatePicker;
const HotelSearchForm = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading, latestDeals } = useSelector((state) => state.HotelDeals);
	useEffect(() => {
		dispatch(getLatestHotelDeals());
	}, [dispatch]);

	const onFinish = async (values) => {
		const { cityName, dates } = values;
		const checkIn = dates[0].format('YYYYMMDD');
		const checkOut = dates[1].format('YYYYMMDD');

		const body = {
			checkIn: checkIn,
			checkOut: checkOut,
			cityName: cityName,
		};
		const encrypted = await encrypt(body);

		navigate(`/results?q=${encrypted}`);
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
			<Row justify={'center'}>
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
			</Row>
			<div justify='center'>
				<Skeleton active loading={loading}>
					<Card
						bordered={false}
						className='header-solid mb-24'
						title={
							<Row justify='center'>
								<h6 className='font-semibold'>Recent Searches</h6>
							</Row>
						}
					>
						<Row gutter={[24, 24]}>
							{latestDeals && latestDeals.length > 0
								? latestDeals.map((deal, index) => (
										<Col span={24} md={12} xl={6} key={index}>
											<Card
												bordered={false}
												className='card-project'
												cover={
													<img
														alt='example'
														src={deal.data[0].thumbnailUrl}
														style={{ objectFit: 'cover' }}
													/>
												}
											>
												<div className='card-tag'>
													<Text ellipsis={true}>{deal.data[0].hotelName}</Text>
												</div>
												<p>{deal.data[0].title && deal.data[0].title}</p>
												<Row gutter={[6, 0]} justify='middle'>
													<Col span={12}>
														<p>
															{deal.data[0].address.cityName},{' '}
															{deal.data[0].address.provinceCode}
														</p>
													</Col>
													<Col span={12}>
														<p style={{ float: 'right' }}>
															{timeAgo(deal.createdAt)}
														</p>
													</Col>
												</Row>
												<Row
													gutter={[6, 0]}
													className='card-footer'
													justify='middle'
												>
													<Col span={8}>
														<Link to={`/results?q=${deal.queryId}`}>
															<Button type='primary'>VIEW ALL RESULTS</Button>
														</Link>
													</Col>
													<Col span={16} className='text-right'>
														{' '}
														<p style={{ color: '#131D43' }}>
															From: {dateConverter(deal.queryData.checkIn)}
														</p>{' '}
														<p style={{ color: '#131D43' }}>
															{' '}
															To:{dateConverter(deal.queryData.checkOut)}
														</p>{' '}
													</Col>
												</Row>
											</Card>
										</Col>
								  ))
								: ''}
						</Row>
					</Card>
				</Skeleton>
			</div>
		</>
	);
};

export default HotelSearchForm;
