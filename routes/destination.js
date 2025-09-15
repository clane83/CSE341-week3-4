const express = require('express')
const router = express.Router();

const destinationController = require('../controller/destination')
const validation = require('../middleware/validate')

router.get('/', destinationController.allDestinations);

router.post('/', validation.saveDestination, destinationController.createDestination);
router.put('/:id', validation.saveDestination, destinationController.updateDestination);
router.delete('/:id', validation.saveDestination, destinationController.deleteDestination);

module.exports = router;

