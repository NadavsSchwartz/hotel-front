import {
	GET_SPECIFIC_DEAL_REQUEST,
	GET_SPECIFIC_DEAL_FAILURE,
	GET_SPECIFIC_DEAL_SUCCESS,
	RESET_SPECIFIC_DEAL_ERROR,
} from './actions/SpecificDealActions';

const SpecificDealReducer = (
	state = {
		Deal: [],
		loading: false,
		error: null,
	},
	action
) => {
	switch (action.type) {
		case GET_SPECIFIC_DEAL_REQUEST:
			return { ...state, loading: true };
		case GET_SPECIFIC_DEAL_SUCCESS:
			return { ...state, loading: false, Deal: action.payload };
		case GET_SPECIFIC_DEAL_FAILURE:
			return { ...state, loading: false, error: action.payload };

		case RESET_SPECIFIC_DEAL_ERROR:
			return { ...state, loading: false, error: null };
		default:
			return state;
	}
};
export default SpecificDealReducer;
