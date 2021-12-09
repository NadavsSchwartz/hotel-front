import axios from 'axios';
import CONFIG from '../../config';

export const GET_LATEST_HOTEL_DEALS_REQUEST = 'GET_LATEST_HOTEL_DEALS_REQUEST';
export const GET_LATEST_HOTEL_DEALS_SUCCESS = 'GET_LATEST_HOTEL_DEALS_SUCCESS';
export const GET_LATEST_HOTEL_DEALS_FAILUTE = 'GET_LATEST_HOTEL_DEALS_FAILURE';

export const GET_HOTEL_DEALS_REQUEST = 'GET_HOTEL_DEALS_REQUEST';
export const GET_HOTEL_DEALS_SUCCESS = 'GET_HOTEL_DEALS_SUCCESS';
export const GET_HOTEL_DEALS_FAILURE = 'GET_HOTEL_DEALS_FAILURE';

export const RESET_DEALS_ERRORS = 'RESET_DEALS_ERRORS';

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};
export const getLatestHotelDeals = () => async (dispatch) => {
	try {
		dispatch({
			type: GET_LATEST_HOTEL_DEALS_REQUEST,
		});

		const { data } = await axios.get(`${CONFIG.baseURL}latest`, config);

		dispatch({
			type: GET_LATEST_HOTEL_DEALS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;

		dispatch({
			type: GET_LATEST_HOTEL_DEALS_FAILUTE,
			payload: message,
		});
	}
};

export const getHotelDeals = (body) => async (dispatch) => {
	try {
		dispatch({
			type: GET_HOTEL_DEALS_REQUEST,
		});

		const { data } = await axios.post(
			`${CONFIG.baseURL}hotelDeals`,
			{ hash: body },
			config
		);

		dispatch({
			type: GET_HOTEL_DEALS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;

		dispatch({
			type: GET_HOTEL_DEALS_FAILURE,
			payload: message,
		});
	}
};
