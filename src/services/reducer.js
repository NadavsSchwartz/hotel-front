import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	body: {},
};

export const pricelineBodyReducer = createSlice({
	name: 'pricelineBodyReducer',
	initialState,
	reducers: {
		setRequestBody: (state, action) => {
			return { ...state, body: { ...action.payload } };
		},
		default: (state) => {
			return state;
		},
	},
});
export const { setRequestBody } = pricelineBodyReducer.actions;
export default pricelineBodyReducer.reducer;
