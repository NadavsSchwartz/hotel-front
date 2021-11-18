import { Form, Button, Card, AutoComplete, DatePicker, Row, Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { setRequestBody } from '../../services/reducer';
import { autoCities } from '../constants/cities';
import { useHistory } from 'react-router-dom';
import { useGetClientIpQuery } from '../../services/pricelineApi';
import { AES } from 'crypto-js';
const { RangePicker } = DatePicker;

const HotelSearchForm = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const history = useHistory();
	const { data, isLoading } = useGetClientIpQuery();
	if (isLoading) return <Spin />;
	const onFinish = async (values) => {
		const { cityName, dates } = values;
		const checkIn = dates[0].format('YYYYMMDD');
		const checkOut = dates[1].format('YYYYMMDD');
		const body = {
			checkIn: checkIn,
			checkOut: checkOut,
			cityName: cityName,
			clientIp: data && data.IPv4 ? data.IPv4 : '',
		};
		const encrypted = AES.encrypt(
			JSON.stringify(body),
			process.env.REACT_APP_SECRET
		).toString();

		dispatch(setRequestBody(encrypted));
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
		<div
			style={{
				backgroundImage: `url('https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=1220&w=750)`,
			}}
		>
			<Row
				type='flex'
				justify='center'
				align='middle'
				style={{ minHeight: '100vh' }}
			>
				<Card size='large'>
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
							<Button type='primary' htmlType='submit' block>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</Row>
		</div>
	);
};

export default HotelSearchForm;
