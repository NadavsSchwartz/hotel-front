import axios from 'axios';
import CONFIG from '../../config';

export const GET_RECENT_QUERIES_REQUEST = 'GET_RECENT_QUERIES_REQUEST';
export const GET_RECENT_QUERIES_SUCCESS = 'GET_RECENT_QUERIES_SUCCESS';
export const GET_RECENT_QUERIES_FAILUTE = 'GET_RECENT_QUERIES_FAILURE';

export const GET_HOTEL_DEALS_REQUEST = 'GET_HOTEL_DEALS_REQUEST';
export const GET_HOTEL_DEALS_SUCCESS = 'GET_HOTEL_DEALS_SUCCESS';
export const GET_HOTEL_DEALS_FAILURE = 'GET_HOTEL_DEALS_FAILURE';

export const GET_USER_LOCATION_REQUEST = 'GET_USER_LOCATION_REQUEST';
export const GET_USER_LOCATION_SUCCESS = 'GET_USER_LOCATION_SUCCESS';
export const GET_USER_LOCATION_FAILURE = 'GET_USER_LOCATION_FAILURE';

export const RESET_DEALS_ERRORS = 'RESET_DEALS_ERRORS';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const RESET_HOTEL_DEALS = 'RESET_HOTEL_DEALS';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const getRecentQueries = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_RECENT_QUERIES_REQUEST,
    });

    const { data } = await axios.get(`${CONFIG.baseURL}recent-queries`, config);

    dispatch({
      type: GET_RECENT_QUERIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: GET_RECENT_QUERIES_FAILUTE,
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

export const getUserLocation = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_HOTEL_DEALS_REQUEST,
    });

    const { data } = await axios.get('https://geolocation-db.com/json/', {
      method: 'HEAD',
      mode: 'no-cors',
    });

    dispatch({
      type: GET_USER_LOCATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: GET_USER_LOCATION_FAILURE,
      payload: message
        ? message
        : 'Something went wrong, check your internet connection',
    });
  }
};
