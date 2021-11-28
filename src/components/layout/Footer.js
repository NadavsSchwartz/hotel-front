import { Layout, Row, Col } from 'antd';

const Footer = () => {
	const { Footer: AntFooter } = Layout;

	return (
		<AntFooter style={{ background: '#fafafa' }}>
			<Row className='just'>
				<Col xs={24} md={12} lg={12}>
					<div className='copyright'>© 2021 | HOTEL REVEALER</div>
				</Col>
				<Col xs={24} md={12} lg={12}>
					<div className='footer-menu'>
						<ul>
							<li className='nav-item'>
								<a
									href='#pablo'
									className='nav-link text-muted'
									target='_blank'
								>
									About Us
								</a>
							</li>

							<li className='nav-item'>
								<a
									href='#pablo'
									className='nav-link pe-0 text-muted'
									target='_blank'
								>
									Disclamer
								</a>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
		</AntFooter>
	);
};

export default Footer;
