import express from 'express';
import {
	getDealFromPriceline,
	getRecentDeals,
	getRecentSearchQueries,
	getSpecificDeal,
} from '../controllers/hotelController.js';
const router = express.Router();

router.route('/hotelDeals').post(getDealFromPriceline);
router.route('/recent-queries').get(getRecentSearchQueries);
router.route('/deal').post(getSpecificDeal);
router.route('/recent-deals').get(getRecentDeals);
export default router;
