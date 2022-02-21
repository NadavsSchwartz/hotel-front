import axios from 'axios';
import asyncHandler from 'express-async-handler';
import { ObjectId } from 'mongodb';
import {
	url,
	queryData,
	generateConfig,
	persistCityInfoIfDoesntExist,
	generateCookies,
} from '../util/helpers.js';
import CryptoJS from 'crypto-js';
import { compareExpressDealsWithOriginDealsAndFindHotel } from '../util/helpers.js';
import Queries from '../models/queries.js';
import SpecificDeal from '../models/specificDeal.js';
import {
	persistSpecificDealIfDoesntExist,
	queueForSpecificDeals,
	specificDealQueryData,
} from '../util/getSpecificDealHelper.js';

// @desc    Fetch all deals from Priceline EXPRESS DEALS AND MATCH WITH ORIGIN DEALS
// @route   POST /api/v1/hotelDeals
const getDealFromPriceline = asyncHandler(async (req, res) => {
	const hash = req.body.hash.toString();

	//Decrypt hash
	const decrypted = CryptoJS.AES.decrypt(req.body.hash, process.env.SECRET);
	const output = await JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

	// desctructre hash to get needed info for request body
	const { cityName, checkIn, checkOut } = output;

	// Check if hash or similar query already exists recently
	const isQueryHashExist = await Queries.exists({ queryId: hash });
	const isQueryDataExist = await Queries.exists({
		queryData: { cityName, checkIn, checkOut },
	});

	if (isQueryHashExist === true) {
		let QueryFromPreviousHash = await Queries.find({ queryId: hash });
		const { data } = QueryFromPreviousHash[0];

		return res.status(200).json(data);
	} else if (isQueryDataExist === true) {
		let QueryFromPreviousQueryData = await Queries.find({
			queryData: { cityName, checkIn, checkOut },
		});
		const { data } = QueryFromPreviousQueryData[0];

		return res.status(200).json(data);
	} else {
		try {
			// generate Config header for requests
			let config = generateConfig();
			// declar object to hold all deals
			const allDeals = { originDeals: [], expressDeals: [] };

			// make a request to priceline's server to get express deals with user's input
			console.log('MAKING REQUESTT!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
			const expressDealsResponse = await axios.post(
				url,
				queryData(cityName, checkIn, checkOut, 'EXPRESS_DEAL'),
				config
			);

			const {
				data: {
					data: { listings: expressDealListings },
				},
			} = expressDealsResponse;

			// if there's any errors or no results, break and return error message
			if (expressDealListings.errorMessage !== null)
				return res
					.status(400)
					.json({ message: expressDealListings.errorMessage });

			//persist CityInfo to mongoDB if doesn't exist
			persistCityInfoIfDoesntExist(expressDealListings.cityInfo);

			//locate cookies from response, and set them for future request
			const pxhdCookie = JSON.stringify(
				expressDealsResponse.headers['set-cookie'][0].split(';')[0]
			);
			await generateCookies(pxhdCookie).then((result) => (config = result));

			//set all express deals listings in the object decalred above
			allDeals.expressDeals = expressDealListings.hotels;

			const {
				data: {
					data: { listings: originalDealListings },
				},
			} = await axios.post(
				url,
				JSON.stringify(queryData(cityName, checkIn, checkOut)),
				config
			);

			// if there's any errors or no results, break and return error message
			if (originalDealListings.errorMessage !== null)
				return res
					.status(400)
					.json({ message: originalDealListings.errorMessage });

			//set all original deal listings in the object decalred above
			allDeals.originDeals = originalDealListings.hotels;

			//compare Express Deals listings with Original Deals and find matches
			const foundHotels = await compareExpressDealsWithOriginDealsAndFindHotel(
				expressDealListings.hotels,
				originalDealListings.hotels,
				checkIn,
				checkOut,
				req.body.hash,
				cityName
			);

			//return results
			return res.status(200).json(foundHotels);
		} catch (error) {
			console.log(error);
			if (
				(error.response.status >= 500 && error.response.status < 600) ||
				error.response.status === 0
			) {
				return res.status(500).json({
					message:
						'Internal server error or Priceline server is down. please try again in 30 seconds',
				});
			}

			return res
				.status(400)
				.json({ message: 'Invalid Request. please try again.' });
		}
	}
});

// @desc    Fetch latest queries
// @route   GET /api/v1/recent-queries
const getRecentSearchQueries = asyncHandler(async (req, res) => {
	try {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		today = yyyy + '/' + mm + '/' + dd;
		//find all queries made since today
		const recentSearchQueries = await Queries.find({
			_id: {
				$gt: ObjectId(
					Math.floor(new Date(today) / 1000).toString(16) + '0000000000000000'
				),
			},
		})
			.sort({ createdAt: -1 })
			.limit(12);
		res.status(200).json(recentSearchQueries);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Invalid Request. please try again.' });
	}
});

// @desc    Fetch Specific deal data
// @route   POST /api/v1/deal
const getSpecificDeal = asyncHandler(async (req, res) => {
	const hash = req.body.hash.toString();

	//Decrypt hash
	const decrypted = CryptoJS.AES.decrypt(req.body.hash, process.env.SECRET);
	const output = await JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

	// desctructre hash to get needed info for request body
	const { checkIn, checkOut, pclnId, hotelId } = output;

	// // Check if hash or similar query already exists recently
	// const isSpecificDealExist = await SpecificDeal.find({
	// 	queryData: output,
	// });

	// //if document exists, return hotel and query data
	// if (isSpecificDealExist.length !== 0) {
	// 	const { queryData, hotel } = isSpecificDealExist[0];

	// 	return res.status(200).json({
	// 		hotel: hotel,
	// 		queryData: queryData,
	// 	});
	// }

	// //if document doesn't exists..
	// else {
	try {
		// generate Config header for request
		const config = generateConfig();

		// make a request to priceline's server to get hotel price data and images
		console.log('MAKING REQUESTT!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
		const specificDealDataResponse = await axios.post(
			url,
			JSON.stringify(specificDealQueryData(checkIn, checkOut, pclnId, hotelId)),
			config
		);
		const {
			data: {
				data: { details },
			},
		} = specificDealDataResponse;

		// if there's any errors or no results, return 400 && error message
		if (details.errorMessage !== null)
			return res.status(400).json({ message: details.errorMessage });

		//double check if specific deal exists, if not, persist the hotel data, query data, and the query id (hash)
		persistSpecificDealIfDoesntExist(details, hash, output);

		//locate cookies from response, and set them for future requests
		const pxhdCookie = JSON.stringify(
			specificDealDataResponse.headers['set-cookie'][0].split(';')[0]
		);
		generateConfig(pxhdCookie);

		//return hotel and query data
		res.status(200).json({ hotel: details.hotel, queryData: output });
	} catch (error) {
		console.log(error);
		if (
			(error.response.status >= 500 && error.response.status < 600) ||
			error.response.status === 0
		) {
			return res.status(500).json({
				message:
					'Internal server error or Priceline server is down. please try again in 30 seconds',
			});
		}
		res.status(400).json({ message: 'Invalid Request. please try again.' });
	}
	// }
});

// @desc    Fetch latest deals
// @route   GET /api/v1/recent-deals
const getRecentDeals = asyncHandler(async (req, res) => {
	try {
		const recentDeals = await SpecificDeal.find({
			'hotel.ratesSummary.status': 'AVAILABLE',
			'queryData.checkIn': { $gt: '20220101' },
		})
			.sort({ createdAt: -1 })
			.limit(12);
		res.status(200).json(recentDeals);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Invalid Request. please try again.' });
	}
});

export {
	getDealFromPriceline,
	getRecentDeals,
	getSpecificDeal,
	getRecentSearchQueries,
};
