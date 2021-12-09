import axios from 'axios';
import CONFIG from '../../config';

export const GET_SPECIFIC_DEAL_REQUEST = 'GET_SPECIFIC_DEAL_REQUEST';
export const GET_SPECIFIC_DEAL_SUCCESS = 'GET_SPECIFIC_DEAL_SUCCESS';
export const GET_SPECIFIC_DEAL_FAILURE = 'GET_SPECIFIC_DEAL_FAILURE';
export const RESET_SPECIFIC_DEAL_ERROR = 'RESET_SPECIFIC_DEAL_ERROR';

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};
export const getSpecificDeal = (body) => async (dispatch) => {
	try {
		dispatch({
			type: GET_SPECIFIC_DEAL_REQUEST,
		});

		const { data } = await axios.post(
			`${CONFIG.baseURL}deal`,
			{ hash: body },
			config
		);

		dispatch({
			type: GET_SPECIFIC_DEAL_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;

		dispatch({
			type: GET_SPECIFIC_DEAL_FAILURE,
			payload: message,
		});
	}
};
