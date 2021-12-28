import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const queriesSchema = mongoose.Schema(
	{
		data: { type: Array, required: false },
		queryId: { type: String, required: true, unique: true },
		queryData: { type: Object, required: true, unique: true },
	},
	{
		timestamps: true,
	}
);
queriesSchema.plugin(mongooseUniqueValidator);
const Hotel = mongoose.model('queries', queriesSchema);

export default Hotel;
