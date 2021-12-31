
import Queries from '../models/queries.js';
import asyncHandler from 'express-async-handler';
import CityInfo from '../models/cityInfo.js';
export const generateClientIpAddress = () => {
	return (
		Math.floor(Math.random() * 255) +
		1 +
		'.' +
		Math.floor(Math.random() * 255) +
		'.' +
		Math.floor(Math.random() * 255) +
		'.' +
		Math.floor(Math.random() * 255)
	);
};

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
export const url = `https://www.priceline.com/pws/v0/pcln-graph/`;

export const queryData = (cityName, checkIn, checkOut, dealTypes) => {
	return {
		query:
			'query getAllListings($addErrToResponse: Boolean, $adults: Int, $allInclusive: Boolean, $amenities: [String], $appCode: HotelAppCodeEnum, $authToken: ID, $bedCounts: [BedCount], $brands: [ID], $cguid: ID, $checkIn: DateString, $checkOut: DateString, $children: [String], $cityID: ID, $clientIP: String, $clusters: [ID], $cugdor: String, $currencyCode: HotelCurrencyEnum, $dealTypes: [String], $first: Int, $hotelName: String, $includePSLResponse: Boolean, $includePrepaidFeeRates: Boolean, $latitude: Float, $locationID: ID, $locationName: String, $longitude: Float, $maxLat: Float, $maxLon: Float, $maxPrice: Float, $metaHotelId: ID, $metaID: String, $minGuestRating: Float, $minLat: Float, $minLon: Float, $minPrice: Float, $multiOccDisplay: Boolean, $multiOccRates: Boolean, $offset: Int, $pageName: String, $popcountMins: Int, $preferredHotels: [ID], $productTypes: [HotelProductEnum], $propertyTypeIds: String, $rID: ID, $rateFilterParams: [String], $rateID: ID, $refClickID: String, $refURL: String, $rguid: ID, $roomCount: Int, $semSearch: String, $sortBy: HotelSortEnum, $starRatings: [StarRating], $unlockDeals: Boolean, $userCountryCode: String, $vipDeals: Boolean, $visitId: String, $packageListingsSearchQuery: HotelUnifiedSearchArguments) {\n  listings: hotelListings(addErrToResponse: $addErrToResponse, adults: $adults, allInclusive: $allInclusive, amenities: $amenities, appCode: $appCode, authToken: $authToken, bedCounts: $bedCounts, brands: $brands, cguid: $cguid, checkIn: $checkIn, checkOut: $checkOut, children: $children, cityID: $cityID, clientIP: $clientIP, clusters: $clusters, cugdor: $cugdor, currencyCode: $currencyCode, dealTypes: $dealTypes, first: $first, hotelName: $hotelName, includePSLResponse: $includePSLResponse, includePrepaidFeeRates: $includePrepaidFeeRates, latitude: $latitude, locationID: $locationID, locationName: $locationName, longitude: $longitude, maxLat: $maxLat, maxLon: $maxLon, maxPrice: $maxPrice, metaHotelId: $metaHotelId, metaID: $metaID, minGuestRating: $minGuestRating, minLat: $minLat, minLon: $minLon, minPrice: $minPrice, multiOccDisplay: $multiOccDisplay, multiOccRates: $multiOccRates, offset: $offset, pageName: $pageName, popcountMins: $popcountMins, preferredHotels: $preferredHotels, productTypes: $productTypes, propertyTypeIds: $propertyTypeIds, rID: $rID, rateFilterParams: $rateFilterParams, rateID: $rateID, refClickID: $refClickID, refURL: $refURL, rguid: $rguid, roomCount: $roomCount, semSearch: $semSearch, sortBy: $sortBy, starRatings: $starRatings, unlockDeals: $unlockDeals, userCountryCode: $userCountryCode, vipDeals: $vipDeals, visitId: $visitId, packageListingsSearchQuery: $packageListingsSearchQuery) {\n    packageComponentSummary\n    packageTripTypes\n    numberOfTravelers\n    totalPackagePricingText {\n      packagePrice\n      perText\n      __typename\n    }\n    rguid\n    errorMessage\n    offset\n    pageSize\n    totalSize\n    sortType\n    hotels {\n      debugString\n      debugHotelInfo\n      hotelId\n      pclnId\n      retailPclnId\n      brandId\n      name\n      description\n      displaySavingsPct\n      displaySavingsDisclaimer\n      displayRoomsLeft\n      overallGuestRating\n      proximity\n      signInDealsAvailable\n      signInDealsMinRate\n      propertyTypeId\n      keyFeatures\n      location {\n        address {\n          addressLine1\n          addressLine2\n          cityName\n      provinceCode\n          isoCountryCode\n          __typename\n        }\n        cityId\n        neighborhoodName\n        neighborhoodID\n        neighborhoodDescription\n        latitude\n        longitude\n        zoneId\n        __typename\n      }\n      metaSearch {\n        priceChangeCode\n        pclnPrice\n        clickedPrice\n        currency\n        __typename\n      }\n      hotelFeatures {\n        rankedAmenityList\n        highlightedAmenities\n        breakfastDetails\n        __typename\n      }\n      hotelType\n      ratesSummary {\n        displayPricePerStay\n        displaySavingsStrikePrice\n        gid\n        programName\n        payWhenYouStayAvailable\n        freeCancelableRateAvail\n        couponApplicable\n        minRateSavingsPercentage\n        minCurrencyCodeSymbol\n        merchandisingFlag\n        roomLeft\n        minPrice\n        minStrikePrice\n        minCurrencyCode\n        savingsClaimPercentage\n        savingsPct\n        preferredRateId\n        pricedOccupancy\n        rateIdentifier\n        perText\n        minRatePromos {\n          type\n          title\n          discountType\n          discountPercentage\n          displayStrikethroughPrice\n          displayStrikethroughPriceCurrency\n          isVariableMarkupPromo\n          showDiscount\n          dealType\n          __typename\n        }\n        packageTripSummary {\n          displayPricePerPerson\n          name\n          type\n          __typename\n        }\n        incrementalSign\n        __typename\n      }\n      sponsoredInfo {\n        clickTrackingUrl\n        impressionTrackingUrl\n        details\n        detailsHeadline\n        trackingData\n        __typename\n      }\n      recmdScore\n      totalReviewCount\n      metaId\n      mobileMerchandisingContent {\n        color\n        text\n        bold\n        __typename\n      }\n      thumbnailUrl\n      starRating\n      displayRoomsLeft\n      displayStrikePrice\n      cugProgramName\n      channelName\n      programDisplayType\n      partialUnlock\n      sopqImageKey\n      sopqDealName\n      bedChoiceAvailable\n      amenitiesIcons {\n        iconName\n        amenityName\n        __typename\n      }\n      packageListingKeys {\n        itemDetailsKey\n        itemKey\n        componentKey\n        componentIndex\n        __typename\n      }\n      __typename\n    }\n    tripFilterSummary {\n      amenityCounts\n      availableBrands {\n        brandID\n        name\n        count\n        __typename\n      }\n      bedCountFilterCounts\n      clusterCounts\n      dealTypeCounts\n      groupedPropertyTypes {\n        name\n        propertyTypeIds\n        count\n        __typename\n      }\n      guestRatingPlusCounts\n      maxFilterPrice\n      minFilterPrice\n      rateFilterCounts\n      similarZones\n      starRatingCounts\n      totalSizeFiltered\n      totalVipHotelCount\n      __typename\n    }\n    programNames\n    cityInfo {\n      stateCode\n      stateName\n      cityName\n      countryCode\n      countryName\n      cityId\n      displayCityName\n      superClusterInfo {\n        superClusterId\n        superClusterName\n        subclusterList {\n          subclusterId\n          subclusterName\n          __typename\n        }\n        __typename\n      }\n      searchedItemName\n      searchedLatitude\n      searchedLocationType\n      searchedLongitude\n      zonePolygonInfo\n      __typename\n    }\n    signInDealRelatedInfo {\n      numberOfAvailableSignInDeals\n      numberOfDisclosedSignInDeals\n      promptUserToSignIn\n      __typename\n    }\n    componentKeyMapFromUSP {\n      type\n      componentKey\n      index\n      __typename\n    }\n    sessionKeyfromUSP\n    __typename\n  }\n}\n',
		variables: {
			locationID: cityName,
			sortBy: 'HDR',
			visitId: '',
			addErrToResponse: true,
			checkIn: checkIn,
			checkOut: checkOut,
			clientIP: generateClientIpAddress(),
			adults: 2,
			dealTypes: dealTypes === 'EXPRESS_DEAL' ? 'EXPRESS_DEAL' : '',
			roomCount: 1,
			productTypes: ['RTL', 'SOPQ'],
			rID: '',
			currencyCode: 'USD',
			cguid: '',
			refClickID: '',
			includePrepaidFeeRates: true,
			unlockDeals: true,
			includePSLResponse: true,
			offset: 0,
			first: 500,
			appCode: 'DESKTOP',
			allInclusive: false,
			vipDeals: false,
		},
		operationName: 'getAllListings',
	};
};
export const compareExpressDealsWithOriginDealsAndFindHotel = asyncHandler(
	async (expressDeals, originDeals, checkIn, checkOut, hash, cityName) => {
		const foundHotels = [];
		try {
			expressDeals.map(async (expressDeal) => {
				originDeals.map(async (originDeal) => {
					if (
						originDeal.ratesSummary.programName !== 'Express_Deal' &&
						expressDeal.starRating === originDeal.starRating &&
						expressDeal.location.neighborhoodID ===
							originDeal.location.neighborhoodID &&
						expressDeal.overallGuestRating >=
							Math.floor(originDeal.overallGuestRating) &&
						expressDeal.overallGuestRating <=
							Math.ceil(originDeal.overallGuestRating) &&
						expressDeal.ratesSummary.minStrikePrice ===
							originDeal.ratesSummary.minPrice &&
						expressDeal.totalReviewCount >=
							Math.floor(originDeal.totalReviewCount / 100) * 100 &&
						expressDeal.totalReviewCount <=
							Math.ceil(originDeal.totalReviewCount / 100) * 100 &&
						isEqual(
							expressDeal.hotelFeatures.highlightedAmenities,
							originDeal.hotelFeatures.highlightedAmenities
						) &&
						isEqual(expressDeal.amenitiesIcons, originDeal.amenitiesIcons)
					) {
						const {
							cityId,
							neighborhoodName,
							neighborhoodID,
							neighborhoodDescription,
							latitude,
							longitude,
							zoneId,
						} = originDeal.location;

						// const Hotel = new foundHotel({
						// 	hotelName: originDeal.name,
						// 	hotelId: originDeal.hotelId,
						// 	retailPclnId: originDeal.retailPclnId,
						// 	starRating: expressDeal.starRating,
						// 	totalReviewCount: originDeal.totalReviewCount,
						// 	expressDealDailyPrice: expressDeal.ratesSummary.minPrice,
						// 	description: originDeal.description,
						// 	ratesSummary: expressDeal.ratesSummary,
						// 	location: {
						// 		cityId,
						// 		neighborhoodName,
						// 		neighborhoodID,
						// 		neighborhoodDescription,
						// 		latitude,
						// 		longitude,
						// 		zoneId,
						// 	},
						// 	pclnId: expressDeal.pclnId,
						// 	address: originDeal.location.address,
						// 	expressDealPricePerStay:
						// 		expressDeal.ratesSummary.displayPricePerStay,
						// 	overallGuestRating: originDeal.overallGuestRating,
						// 	thumbnailUrl: originDeal.thumbnailUrl,
						// 	checkIn: checkIn,
						// 	checkOut: checkOut,
						// });
						// const isSaved = await Hotel.save();
						return foundHotels.push({
							hotelName: originDeal.name,
							hotelId: originDeal.hotelId,
							retailPclnId: originDeal.retailPclnId,
							starRating: expressDeal.starRating,
							totalReviewCount: originDeal.totalReviewCount,
							expressDealDailyPrice: expressDeal.ratesSummary.minPrice,
							description: originDeal.description,
							location: {
								cityId,
								neighborhoodName,
								neighborhoodID,
								neighborhoodDescription,
								latitude,
								longitude,
								zoneId,
							},
							pclnId: expressDeal.pclnId,
							address: originDeal.location.address,
							expressDealPricePerStay:
								expressDeal.ratesSummary.displayPricePerStay,
							overallGuestRating: originDeal.overallGuestRating,
							thumbnailUrl: originDeal.thumbnailUrl,
							checkIn: checkIn,
							checkOut: checkOut,
						});
					}
				});
			});
			await persistQueriesDoesntExist(
				foundHotels,
				hash.toString(),
				cityName,
				checkIn,
				checkOut
			);
			return foundHotels;
		} catch (error) {
			console.log(error);
			return error;
		}
	}
);
let mostRecentCookie;
export const generateConfig = (cookie = mostRecentCookie) => ({
	headers: {
		'Content-Type': 'application/json',
		Accept: '*',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7',
		Dnt: '1',
		Referer: 'https://www.priceline.com',
		'Sec-Ch-Ua':
			'" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
		'Sec-Ch-Ua-Mobile': '?0',
		'Sec-Ch-Ua-Platform': '"macOS"',
		'Sec-Fetch-Dest': 'document',
		'Sec-Fetch-Mode': 'navigate',
		'Sec-Fetch-Site': 'cross-site',
		'Upgrade-Insecure-Requests': '1',
		'User-Agent':
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36',
		Cookie: `${cookie}`,
	},
});

export const generateCookies = async (pxhd) => {
	//generate 32 length string (0-9, a-f)
	const siteServerCookie = await [...Array(32)]
		.map(() => Math.random().toString(16)[2])
		.join('');
	const plInfoCookie = await siteServerCookie;
	const unixTimeStampSeconds = await Math.floor(Date.now() / 1000);
	const unixTimeStampMiliseconds = await new Date().getTime();
	mostRecentCookie = `${pxhd} g_state={"i_p":${unixTimeStampMiliseconds},"i_l":1}; PL_INFO=${plInfoCookie}~${unixTimeStampSeconds}~V2; SITESERVER=ID=${siteServerCookie}`;
	return generateConfig(mostRecentCookie);
};

export const persistCityInfoIfDoesntExist = async (cityInfoObj) => {
	const { cityId, neighborhoodName } = cityInfoObj;
	try {
		const isCityExist = await CityInfo.exists({
			cityInfo: { cityId, neighborhoodName },
		});
		if (isCityExist) return;

		const cityInfoFromPriceline = new CityInfo();
		cityInfoFromPriceline.cityInfo = cityInfoObj;
		await cityInfoFromPriceline.save();
	} catch (error) {}
};

export const persistQueriesDoesntExist = async (
	queryObj,
	hash,
	cityName,
	checkIn,
	checkOut
) => {
	try {
		const isHashQueryExist = await Queries.exists({ queryId: hash });
		const isqueryDataQueryExists = await Queries.exists({
			queryData: { cityName, checkIn, checkOut },
		});
		if (isHashQueryExist === true && isqueryDataQueryExists === true) return;
		console.log('ADDIN NEW QUERY!');
		const newQuery = new Queries();
		newQuery.data = queryObj;
		newQuery.queryId = hash;
		newQuery.queryData = { cityName, checkIn, checkOut };
		await newQuery.save();
	} catch (error) {
		console.log(error);
	}
};
