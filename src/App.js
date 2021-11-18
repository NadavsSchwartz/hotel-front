import { Layout } from 'antd';
import { Route } from 'react-router';
import HotelSearchForm from './components/HotelSearchForm';
import Sidebar from './components/sidebar';
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
					</Content>
				</Layout>
			</Layout>
		</section>
	);
};

export default App;
