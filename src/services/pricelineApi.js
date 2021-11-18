import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONFIG from '../config';

require('dotenv').config();

export const pricelineApi = createApi({
	reducerPath: 'pricelineApi',
	baseQuery: fetchBaseQuery(),
	endpoints: (builder) => ({
		getPricelineDeals: builder.query({
			query: (body) => ({
				url: CONFIG.baseURL,
				method: 'POST',
				body: { hash: body },
			}),
		}),
		getClientIp: builder.query({
			query: () => ({
				url: 'https://geolocation-db.com/json/',
			}),
		}),
	}),
});

export const { useGetPricelineDealsQuery, useGetClientIpQuery } = pricelineApi;
