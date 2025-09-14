const express = require('express')
const router = express.Router();

const usersController = require('../controllers/users')

router.get('/', usersController.allUsers);

router.post('/', usersController.createUser);
router.put('/', usersController.updateUser);
router.delete('/', usersController.deleteUser);

module.exports = router;

