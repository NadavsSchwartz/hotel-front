import { Switch, Route, Redirect } from 'react-router-dom';
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
			<Switch>
				<Main>
					<Route exact path='/dashboard'>
						<HotelSearchForm />
					</Route>

					<Route path='/results'>
						<Results />
					</Route>
					{/* <Route path='/testing'>
						<HotelDetails />
					</Route> */}
					<Route exact path='/deal/:dealData'>
						<hotelDetails />
					</Route>
					{/* <Redirect exact from='/' to='/dashboard' /> */}
				</Main>
			</Switch>
			{/* <Footer style={{ textAlign: 'center' }}>hotel revealer ©2020-2021</Footer> */}
		</div>
	);
};

export default App;
