import { Route, Redirect, Routes } from 'react-router-dom';
import HotelSearchForm from './components/HotelSearchForm';
import Results from './screens/results';
import 'antd/dist/antd.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';
import Main from './components/layout';
import HotelDetails from './screens/hotelDetails';

const App = () => {
	return (
		<div>
			<Main>
				<Routes>
					<Route exact path='/dashboard' element={<HotelSearchForm />} />
					<Route path='/results' element={<Results />} />
					<Route exact path='/deal' element={<HotelDetails />} />
					{/* <Redirect exact from='/' to='/dashboard' /> */}
				</Routes>
			</Main>
			{/* <Footer style={{ textAlign: 'center' }}>hotel revealer ©2020-2021</Footer> */}
		</div>
	);
};

export default App;
