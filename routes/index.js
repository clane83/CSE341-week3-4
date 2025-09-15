const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/destination', require('./destination'));
router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags = ['Hello world']
    res.send('API is running. See /api-doc for swagger UI.');
});


module.exports = router;