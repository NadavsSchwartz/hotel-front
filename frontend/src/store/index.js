import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import HotelDealsReducer from './HotelDealsReducer';
import SpecificDealReducer from './SpecificDealReducer';
import StaticDataReducer from './StaticDataReducer';
const middleware = [thunk];

const reducer = combineReducers({
  HotelDeals: HotelDealsReducer,
  SpecificDeal: SpecificDealReducer,
  StaticData: StaticDataReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
