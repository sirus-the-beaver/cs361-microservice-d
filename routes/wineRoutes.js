const { wineRecommendation } = require('../controllers/wineController');
const express = require('express');
const router = express.Router();

router.post('/wine-recommendation', wineRecommendation);

module.exports = router;