import express from 'express';
import {getStatistics} from '../controllers/statisticsController.js'

const router = express.Router();

// Get overall statistics
router.route('/').get(getStatistics);

export default router;