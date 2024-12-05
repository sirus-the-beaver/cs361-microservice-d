const { wineRecommendation, dishRecommendation } = require('../controllers/wineController');
const express = require('express');
const router = express.Router();

router.post('/wine-recommendation', wineRecommendation);
router.post('/dish-recommendation', dishRecommendation);

module.exports = router;