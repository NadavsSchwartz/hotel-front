import axios from 'axios';
import CONFIG from '../../config';

export const GET_SPECIFIC_DEAL_REQUEST = 'GET_SPECIFIC_DEAL_REQUEST';
export const GET_SPECIFIC_DEAL_SUCCESS = 'GET_SPECIFIC_DEAL_SUCCESS';
export const GET_SPECIFIC_DEAL_FAILURE = 'GET_SPECIFIC_DEAL_FAILURE';
export const RESET_SPECIFIC_DEAL_ERROR = 'RESET_SPECIFIC_DEAL_ERROR';
export const GET_RECENT_DEALS_REQUEST = 'GET_RECENT_DEALS_REQUEST';
export const GET_RECENT_DEALS_SUCCESS = 'GET_RECENT_DEALS_SUCCESS';
export const GET_RECENT_DEALS_FAILURE = 'GET_RECENT_DEALS_FAILURE';

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
export const getRecentDeals = (body) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RECENT_DEALS_REQUEST,
    });

    const { data } = await axios.get(`${CONFIG.baseURL}recent-deals`, config);

    dispatch({
      type: GET_RECENT_DEALS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: GET_RECENT_DEALS_FAILURE,
      payload: message,
    });
  }
};
