import { Layout, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import HotelSearchForm from './components/HotelSearchForm';
import Sidebar from './components/sidebar';
const { Content } = Layout;
const App = () => {
	return (
		<section className='home-main'>
			<Layout>
				<Sidebar />
				<Layout className='home-layout'>
					<Content id='container'>
						<div>
							<HotelSearchForm />
						</div>
					</Content>
				</Layout>
			</Layout>
		</section>
	);
};

export default App;
