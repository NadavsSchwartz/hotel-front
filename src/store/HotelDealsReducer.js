import {
	GET_LATEST_HOTEL_DEALS_REQUEST,
	GET_LATEST_HOTEL_DEALS_SUCCESS,
	GET_LATEST_HOTEL_DEALS_FAILUTE,
	GET_HOTEL_DEALS_REQUEST,
	GET_HOTEL_DEALS_SUCCESS,
	GET_HOTEL_DEALS_FAILURE,
	RESET_DEALS_ERRORS,
	GET_CLIENT_IP_REQUEST,
	GET_CLIENT_IP_SUCCESS,
	GET_CLIENT_IP_FAILURE,
} from './actions/HotelDealsAction';

const HotelDealsReducer = (
	state = {
		foundDeals: [],
		loading: false,
		error: null,
		latestDeals: null,
		clientIp: '',
	},
	action
) => {
	switch (action.type) {
		case GET_LATEST_HOTEL_DEALS_REQUEST:
			return { ...state, loading: true };
		case GET_LATEST_HOTEL_DEALS_SUCCESS:
			return { ...state, loading: false, latestDeals: action.payload };
		case GET_LATEST_HOTEL_DEALS_FAILUTE:
			return { ...state, loading: false, error: action.payload };
		case GET_HOTEL_DEALS_REQUEST:
			return { ...state, loading: true };
		case GET_HOTEL_DEALS_SUCCESS:
			return { ...state, loading: false, foundDeals: action.payload };
		case GET_HOTEL_DEALS_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case GET_CLIENT_IP_REQUEST:
			return { ...state, loading: true };
		case GET_CLIENT_IP_SUCCESS:
			return { ...state, loading: false, clientIp: action.payload };
		case GET_CLIENT_IP_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case RESET_DEALS_ERRORS:
			return { ...state, loading: false, error: null };
		default:
			return state;
	}
};
export default HotelDealsReducer;
