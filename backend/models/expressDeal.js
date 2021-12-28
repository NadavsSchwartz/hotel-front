import mongoose from 'mongoose';

const expressDealSchema = mongoose.Schema(
	{
		id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		debugHotelInfo: { type: String },
		pclnId: { type: String },
		displaySavingsPct: { type: Number, required: true, default: 0 },
		displayRoomsLeft: { type: Boolean },
		overallGuestRating: { type: Number, required: true, default: 0 },
		proximity: { type: Number, required: true, default: 0 },
		propertyTypeId: { type: Number, required: true, default: 0 },
		keyFeatures: {
			type: Object,
			required: true,
		},
		location: {
			type: Object,
			required: true,
		},
		hotelFeatures: { type: Array, required: true },
		ratesSummary: {
			type: Object,
			required: true,
		},
		totalReviewCount: { type: Number, required: true, default: 0 },
		starRating: { type: Number, required: true, default: 0 },
		displayStrikePrice: { type: Number, required: true, default: 0 },
		cugProgramName: { type: String, required: true },
		bedChoiceAvailable: { type: Boolean },
		amenitiesIcons: { type: Array, required: true },
	},
	{ timestamps: true }
);

const Hotel = mongoose.model('expressDeal', expressDealSchema);

export default Hotel;
