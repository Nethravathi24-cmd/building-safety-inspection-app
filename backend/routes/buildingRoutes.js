const express = require('express');

const router = express.Router();

const {
    getBuildings,
    addBuilding
} = require('../controllers/buildingController');

router.get('/', getBuildings);

router.post('/', addBuilding);

module.exports = router;