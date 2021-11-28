import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import HotelDealsReducer from './HotelDealsReducer';

const middleware = [thunk];

const reducer = combineReducers({
	HotelDeals: HotelDealsReducer,
});

const initialState = {};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
