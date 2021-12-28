import SpecificDeal from '../models/specificDeal.js';
export const specificDealQueryData = (checkIn, checkOut, pclnId, hotelId) => {
	return {
		query:
			'query getHotelDetails($hotelID: ID, $allInclusive: Boolean, $checkIn: String, $checkOut: String, $roomsCount: Int, $cguid: ID, $cugdor: String, $currencyCode: String, $pclnID: ID, $metaID: ID, $metaHotelId: ID, $rehabRateKey: ID, $preferredRateID: ID, $rID: ID, $rateDisplayOption: String, $rguid: ID, $visitId: String, $refClickID: String, $reviewCount: Float, $paymentRateMerge: Boolean, $multiOccDisplay: Boolean, $multiOccRates: Boolean, $appCode: String, $adults: Int, $children: [String], $unlockDeals: Boolean, $authToken: ID, $responseOptions: String, $includePrepaidFeeRates: Boolean, $addErrToResponse: Boolean, $packagesDetailsSearchQuery: HotelPsapiDetailsArguments) {\n  details: hotelDetails(hotelID: $hotelID, checkIn: $checkIn, checkOut: $checkOut, roomsCount: $roomsCount, cguid: $cguid, cugdor: $cugdor, currencyCode: $currencyCode, pclnID: $pclnID, metaID: $metaID, metaHotelId: $metaHotelId, rehabRateKey: $rehabRateKey, preferredRateID: $preferredRateID, rID: $rID, rateDisplayOption: $rateDisplayOption, rguid: $rguid, visitId: $visitId, refClickID: $refClickID, reviewCount: $reviewCount, paymentRateMerge: $paymentRateMerge, multiOccDisplay: $multiOccDisplay, multiOccRates: $multiOccRates, appCode: $appCode, adults: $adults, children: $children, allInclusive: $allInclusive, unlockDeals: $unlockDeals, authToken: $authToken, responseOptions: $responseOptions, includePrepaidFeeRates: $includePrepaidFeeRates, addErrToResponse: $addErrToResponse, packagesDetailsSearchQuery: $packagesDetailsSearchQuery) {\n    rguid\n    errorMessage\n    hotel {\n      name\n        pkgComponentIndex\n      maxPricedOccupancy\n      maxOccupancy\n      merchandisingInfo {\n        color\n        badgeText\n        bannerHeader\n        bannerText\n        __typename\n      }\n      reasonsToBook {\n        color\n        icon\n        header\n        substring\n        __typename\n      }\n      hotelViewCount {\n        cumulativeViewCount\n        __typename\n      }\n      commonRoomAmenities {\n        type\n        __typename\n      }\n      recmdScore\n      totalReviewCount\n      overallGuestRating\n      rooms {\n        isUnlockedMemberDeal\n        displayableRates {\n          originalRates {\n            gid\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      transformedRooms {\n        maxPricedOccupancy\n        roomDisplayName\n        maxOccupancy\n        isGreatForFamily\n        roomId\n        longDescription\n        roomFacilities\n        cleanliness {\n          score\n          totalReviews\n          __typename\n        }\n        beddingOption\n        bedCount\n        roomThumbnailUrl\n        roomSize\n        amenities {\n          code\n          __typename\n        }\n        imageUrls {\n          largeUrl\n          mediumUrl\n          __typename\n        }\n        roomOccupancies {\n          roomCode\n          numberOfAdults\n          numberOfChildren\n          numberOfBeds\n          numberOfRooms\n          __typename\n        }\n        roomRates {\n          cartToken\n          pkgPriceInformation {\n            totalCost\n            totalCostPerTraveler\n            totalCostWithHotelMandatoryFees\n            totalPayNow\n            totalPayLater\n            totalSavings\n            originalCostPerTraveler\n            totalStrikethrough\n            totalHotelMandatoryFees\n            roomMandatoryFees\n            __typename\n          }\n          preferredRateFlag\n          pricedOccupancy\n          couponApplicable\n          suggestedNumOfRooms\n          mergedRate {\n            isFullyUnlocked\n            rateIdentifier\n            price\n            grandTotal\n            currencySymbol\n            roomsLeft\n            cancellationPolicy\n            cancellationPolicyLongText\n            cancellationMsg\n            refundPolicy\n            debugString\n            paymentOptionsText\n            feeAmount\n            isPayLater\n            isUniversalCartEligible\n            isXSellEligible\n            __typename\n          }\n          isPayLater\n          rateIdentifier\n          isBestDeal\n          price\n          grandTotal\n          currencySymbol\n          roomsLeft\n          strikeThroughPrice\n          isFreeCancellation\n          cancellationPolicy\n          cancellationPolicyLongText\n          cancellationMsg\n          ccRequired\n          refundPolicy\n          savingPct\n          payLaterMessage\n          feeAmount\n          bannerText\n          programName\n          merchandisingFlag\n          rateLevelAmenities {\n            name\n            isHighlighted\n            __typename\n          }\n          totalPriceExcludingTaxesAndFeePerStay\n          paymentOptionsText\n          disclaimerMessage\n          debugString\n          promos {\n            promoType\n            isVariableMarkupPromo\n            title\n            desc\n            isHighlighted\n            __typename\n          }\n          isFullyUnlocked\n          incrementalPricingIconName\n          isUniversalCartEligible\n          basketPriceKey\n          isXSellEligible\n          itemDetailsKey\n          bundlePriceKey\n          rateKey\n          __typename\n        }\n        cartToken\n        basketPriceKey\n        itemDetailsKey\n        priceKey\n        bundlePriceKey\n        token\n        planCode\n        rateTypeCode\n        gdsName\n        __typename\n      }\n      guestReviews {\n        firstName\n        overallScore\n        reviewTextGeneral\n        reviewTextNegative\n        reviewTextPositive\n        sourceCode\n        travelerType\n        travelerTypeId\n        creationDate\n        __typename\n      }\n      reviewRatingSummary {\n        ratings {\n          description\n          label\n          score\n          summaryCount\n          summaryValue\n          __typename\n        }\n        travelerType {\n          count\n          id\n          type\n          __typename\n        }\n        __typename\n      }\n      signInDealsAvailable\n      signInDealsMinRate\n      ratings {\n        category\n        score\n        __typename\n      }\n      bookings {\n        firstName\n        lastNameInitial\n        bookedPrice\n        bookedCurrencyCode\n        justBookedBadge\n        __typename\n      }\n      ratesSummary {\n        pricedOccupancy\n        suggestedNumOfRooms\n        freeCancelableRateAvail\n        minPrice\n        totalCostPerTraveler\n        minStrikePrice\n        promptUserToNativeApp\n        savingsClaimStrikePrice\n        savingsClaimDisclaimer\n        savingsClaimPercentage\n        minCurrencyCodeSymbol\n        minCurrencyCode\n        roomLeft\n        payWhenYouStayAvailable\n        pclnId\n        programName\n        merchandisingFlag\n        preferredRateId\n        rateIdentifier\n        showRecommendation\n        suggestedNumOfRooms\n        status\n        __typename\n      }\n      hasNodateRooms\n      isAllInclusiveHotel\n      location {\n                address {\n          addressLine1\n          addressLine2\n          cityName\n          provinceCode\n          isoCountryCode\n          __typename\n        }\n        cityId\n        neighborhoodName\n        neighborhoodID\n        neighborhoodDescription\n        latitude\n        longitude\n        zoneId\n        __typename\n      }\n      hotelFeatures {\n        features\n        highlightedAmenities\n        hotelAmenities {\n          code\n          displayable\n          free\n          name\n          type\n          __typename\n        }\n        topAmenities\n        breakfastDetails\n        __typename\n      }\n      policies {\n        checkInTime\n        checkOutTime\n        petDescription\n        childrenDescription\n        importantInfo\n        __typename\n      }\n      itemKey\n      basketItemKey\n      componentKey\n      retailPrice {\n        pricePerPerson\n        displayPricePerPerson\n        amount\n        displayAmount\n        __typename\n      }\n      images {\n        imageHDURL\n        imageURL\n        __typename\n      }\n      __typename\n    }\n    componentKeyMap\n    los\n    signInDealRelatedInfo {\n      promptUserToSignIn\n      __typename\n    }\n    __typename\n  }\n}\n',
		variables: {
			appCode: 'DESKTOP',
			cguid: '',
			checkIn: checkIn,
			checkOut: checkOut,
			rID: '',
			roomsCount: 1,
			currencyCode: 'USD',
			refClickID: '',
			unlockDeals: true,
			includePrepaidFeeRates: true,
			visitId: '',
			addErrToResponse: true,
			allInclusive: false,
			adults: 2,
			paymentRateMerge: false,
			multiOccDisplay: true,
			multiOccRates: true,
			hotelID: hotelId,
			pclnID: pclnId,
			rateDisplayOption: 'S',
			reviewCount: 5,
			responseOptions:
				'POP_COUNT,REVIEWS,CUSTOM_DESC,RATE_SUMMARY,RATINGS,DETAILED_ROOM,HOTEL_IMAGES,RATE_IMPORTANT_INFO,RATE_CHARGES_DETAIL,PROXIMITY,BOOKINGS,NORATEROOMS,REFUND_INFO',
		},
		operationName: 'getHotelDetails',
	};
};

export const persistSpecificDealIfDoesntExist = async (
	SpecificDealObj,
	queryId,
	queryData
) => {
	const { hotel } = SpecificDealObj;

	console.log('persist check~~~~~~');
	try {
		const isSpecificDealExist = await SpecificDeal.find({
			hotel: hotel,
		});
		if (isSpecificDealExist.length !== 0) return;
		console.log('persisting new hotel');
		const hotelDataFromPriceline = new SpecificDeal();
		hotelDataFromPriceline.hotel = await hotel;
		hotelDataFromPriceline.queryData = await queryData;
		hotelDataFromPriceline.queryId = await queryId;
		await hotelDataFromPriceline.save();
	} catch (error) {
		console.log(error);
	}
};

export const queueForSpecificDeals = async () => {
	let hotelDealsToQueue = [];
	//find if deal is already in the Queue list
};
