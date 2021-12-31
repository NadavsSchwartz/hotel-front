import {
  GET_RECENT_QUERIES_REQUEST,
  GET_RECENT_QUERIES_SUCCESS,
  GET_RECENT_QUERIES_FAILUTE,
  GET_HOTEL_DEALS_REQUEST,
  GET_HOTEL_DEALS_SUCCESS,
  GET_HOTEL_DEALS_FAILURE,
  GET_USER_LOCATION_REQUEST,
  GET_USER_LOCATION_SUCCESS,
  GET_USER_LOCATION_FAILURE,
  RESET_DEALS_ERRORS,
  START_LOADING,
  STOP_LOADING,
  RESET_HOTEL_DEALS,
} from './actions/HotelDealsAction';

const HotelDealsReducer = (
  state = {
    foundDeals: [],
    loading: false,
    error: null,
    recentQueries: [],
    userLocation: [],
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case GET_RECENT_QUERIES_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_RECENT_QUERIES_SUCCESS:
      return { ...state, loading: false, recentQueries: action.payload };
    case GET_RECENT_QUERIES_FAILUTE:
      return { ...state, loading: false, error: action.payload };
    case GET_HOTEL_DEALS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_HOTEL_DEALS_SUCCESS:
      return { ...state, loading: false, foundDeals: action.payload };
    case GET_HOTEL_DEALS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_USER_LOCATION_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_USER_LOCATION_SUCCESS:
      return { ...state, loading: false, userLocation: action.payload };
    case GET_USER_LOCATION_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESET_DEALS_ERRORS:
      return { ...state, loading: false, error: null };
    case RESET_HOTEL_DEALS:
      return { ...state, foundDeals: [] };
    default:
      return state;
  }
};
export default HotelDealsReducer;
