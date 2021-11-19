import { Layout } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { Route } from 'react-router';
import HotelSearchForm from './components/HotelSearchForm';
import Sidebar from './components/sidebar';
import hotelDetails from './screens/hotelDetails';
import Results from './screens/results';

const { Content } = Layout;
const App = () => {
	return (
		<section className='home-main'>
			<Layout>
				<Sidebar />
				<Layout className='home-layout'>
					<Content id='container'>
						<Route exact path='/'>
							<HotelSearchForm />
						</Route>

						<Route exact path='/results'>
							<Results />
						</Route>
						<Route exact path='/deal/:dealData'>
							<hotelDetails />
						</Route>
					</Content>
				</Layout>
			</Layout>
			<Footer style={{ textAlign: 'center' }}>hotel revealer ©2020-2021</Footer>
		</section>
	);
};

export default App;
