const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    // //#swagger.tags['Hello world']
    res.send('API is running. See /api-doc for swagger UI.');
});

router.use('/users', require('./users'));
router.use('/destination', require('./destination'));

module.exports = router;