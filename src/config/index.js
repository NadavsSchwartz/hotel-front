const isProduction = process.env.REACT_APP_PRODUCTION;
const isDevelopment = !isProduction;

const CONFIG = {
  isProduction,
  isDevelopment,
  baseURL: 'https://hotelrevealer-back.herokuapp.com/api/v1/',
  title: 'Hotel Revealer',
};

export default CONFIG;
