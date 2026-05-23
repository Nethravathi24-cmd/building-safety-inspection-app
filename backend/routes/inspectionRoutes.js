const express = require('express');

const router = express.Router();

const {
    getInspections,
    addInspection
} = require('../controllers/inspectionController');

router.get('/', getInspections);

router.post('/', addInspection);

module.exports = router;