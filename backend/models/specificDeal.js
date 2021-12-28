import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const specificDealSchema = mongoose.Schema(
	{
		queryId: { type: String, required: true, unique: true },
		queryData: { type: Object, required: true, unique: true },
		hotel: { type: Object, required: true },
	},
	{
		timestamps: true,
	}
);
specificDealSchema.plugin(mongooseUniqueValidator);
const Hotel = mongoose.model('specificDeal', specificDealSchema);

export default Hotel;
