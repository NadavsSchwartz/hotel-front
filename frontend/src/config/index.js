const isProduction = process.env.REACT_APP_PRODUCTION;
const isDevelopment = !isProduction;

const CONFIG = {
  isProduction,
  isDevelopment,
  baseURL: '',
  title: 'Hotel Revealer',
};

export default CONFIG;
