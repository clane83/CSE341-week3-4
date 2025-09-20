const express = require('express')
const router = express.Router();

const usersController = require('../controller/users')
// const validation = require('../middleware/validate')
const { isAuthenticated } = require("../middleware/authentication")

router.get('/', usersController.allUsers);


router.post('/', isAuthenticated, usersController.createUser);
router.put('/:id', isAuthenticated, usersController.updateUser);
router.delete('/:id', isAuthenticated, usersController.deleteUser);

module.exports = router;

