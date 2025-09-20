const express = require('express')
const router = express.Router();

const destinationController = require('../controller/destination')
// const validation = require('../middleware/validate')
const { isAuthenticated } = require("../middleware/authentication")

router.get('/', destinationController.allDestinations);

router.post('/', isAuthenticated, destinationController.createDestination);
router.put('/:id', isAuthenticated, destinationController.updateDestination);
router.delete('/:id', isAuthenticated, destinationController.deleteDestination);

module.exports = router;

