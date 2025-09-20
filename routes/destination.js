const express = require('express')
const router = express.Router();

const destinationController = require('../controller/destination')
const validation = require('../middleware/validate')
const { isAuthenticated } = require("../middleware/authentication")

router.get('/', destinationController.allDestinations);

router.post('/',
    isAuthenticated,
    validation.saveDestination,
    destinationController.createDestination);
router.put('/:id',
    isAuthenticated,
    validation.saveDestination,
    destinationController.updateDestination);
router.delete('/:id',
    isAuthenticated,
    validation.saveDestination,
    destinationController.deleteDestination);

module.exports = router;

