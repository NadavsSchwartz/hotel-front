const isProduction = process.env.REACT_APP_PRODUCTION;
const isDevelopment = !isProduction;

const CONFIG = {
	isProduction,
	isDevelopment,
	baseURL: 'http://localhost:4000/api/v1/',
	title: 'Hotel Revealer',
};
export default CONFIG;
