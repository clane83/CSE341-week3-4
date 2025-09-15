const express = require('express')
const router = express.Router();

const usersController = require('../controller/users')

router.get('/', usersController.allUsers);


router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;

