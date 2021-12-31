import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const pricelineCityInfoSchema = mongoose.Schema(
	{
		cityInfo: {
			type: Object,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);
pricelineCityInfoSchema.plugin(mongooseUniqueValidator);
const Hotel = mongoose.model('cityInfo', pricelineCityInfoSchema);

export default Hotel;
