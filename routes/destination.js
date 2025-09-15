const express = require('express')
const router = express.Router();

const destinationController = require('../controller/destination')

router.get('/', destinationController.allDestinations);

router.post('/', destinationController.createDestination);
router.put('/:id', destinationController.updateDestination);
router.delete('/:id', destinationController.deleteDestination);

module.exports = router;

