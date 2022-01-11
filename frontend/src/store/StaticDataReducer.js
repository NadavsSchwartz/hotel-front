export const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
export const SET_SHOW_HOTEL_MODAL = 'SET_SHOW_HOTEL_MODAL';
const getShowModalFromStorage = localStorage.getItem('showModal')
  ? localStorage.getItem('showModal')
  : true;
const getShowHotemodalFromStorage = localStorage.getItem('showHotelModal')
  ? localStorage.getItem('showHotelModal')
  : true;
const StaticDataReducer = (
  state = {
    showModal: getShowModalFromStorage,
    showHotelModal: getShowHotemodalFromStorage,
  },
  action
) => {
  switch (action.type) {
    case SET_SHOW_MODAL:
      return { ...state, showModal: action.payload };
    case SET_SHOW_HOTEL_MODAL:
      return { ...state, showHotelModal: action.payload };
    default:
      return state;
  }
};

export default StaticDataReducer;
