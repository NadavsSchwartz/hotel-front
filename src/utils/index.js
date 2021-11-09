import _ from 'lodash';

export const deepPick = (paths, obj) => {
	return _.fromPairs(paths.map((p) => [_.last(p.split('.')), _.get(obj, p)]));
};

export const GetListings = (pricelineQueryResponse) => {
	const originalDealsToCompare = pricelineQueryResponse.originDeals.map(
		(hotel) =>
			deepPick(
				[
					'starRating',
					'totalReviewCount',
					'overallGuestRating',
					'displayStrikePrice',
					'location.neighborhoodName',
					'location.neighborhoodID',
					'location.cityId',
					'name',
				],
				hotel
			)
	);
	debugger;
};
