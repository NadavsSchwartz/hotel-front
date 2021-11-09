import { configureStore } from '@reduxjs/toolkit';
import { pricelineApi } from '../services/pricelineApi';

import pricelineBodyReducer from '../services/reducer';
export default configureStore({
	reducer: {
		[pricelineApi.reducerPath]: pricelineApi.reducer,
		pricelineBodyReducer: pricelineBodyReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([pricelineApi.middleware]),
	devTools: true,
});
