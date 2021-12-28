import {
  GET_SPECIFIC_DEAL_REQUEST,
  GET_SPECIFIC_DEAL_FAILURE,
  GET_SPECIFIC_DEAL_SUCCESS,
  RESET_SPECIFIC_DEAL_ERROR,
  GET_RECENT_DEALS_REQUEST,
  GET_RECENT_DEALS_SUCCESS,
  GET_RECENT_DEALS_FAILURE,
} from './actions/SpecificDealActions';

const SpecificDealReducer = (
  state = {
    Deal: [],
    loading: false,
    error: null,
    recentDeals: [],
  },
  action
) => {
  switch (action.type) {
    case GET_SPECIFIC_DEAL_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_SPECIFIC_DEAL_SUCCESS:
      return { ...state, loading: false, Deal: action.payload };
    case GET_SPECIFIC_DEAL_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_RECENT_DEALS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_RECENT_DEALS_SUCCESS:
      return { ...state, loading: false, recentDeals: action.payload };
    case GET_RECENT_DEALS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESET_SPECIFIC_DEAL_ERROR:
      return { ...state, loading: false, error: null };
    default:
      return state;
  }
};
export default SpecificDealReducer;
