const express = require('express')
const router = express.Router();

const usersController = require('../controller/users')
const validation = require('../middleware/validate')

router.get('/', usersController.allUsers);


router.post('/', validation.saveUser, usersController.createUser);
router.put('/:id', validation.saveUser, usersController.updateUser);
router.delete('/:id', validation.saveUser, usersController.deleteUser);

module.exports = router;

