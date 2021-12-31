import mongoose from 'mongoose';

const foundHotelSchema = mongoose.Schema(
	{
		hotelId: { type: String },
		pclnId: { type: String },
		location: {
			type: Object,
		},
		description: {
			type: String,
		},
		overallGuestRating: {
			type: Number,
			required: true,
			default: 0,
		},
		ratesSummary: {
			type: Object,
		},
		hotelName: { type: String },
		totalReviewCount: { type: Number, required: true, default: 0 },
		starRating: { type: Number, required: true, default: 0 },
		dailyPrice: { type: String },
		totalPrice: { type: String },
		thumbnailUrl: { type: String },
		checkIn: { type: String },
		checkOut: { type: String },
		address: {
			type: Object,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Hotel = mongoose.model('foundHotel', foundHotelSchema);

export default Hotel;
