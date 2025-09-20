const router = require('express').Router();
const passport = require('passport');

router.use('/users', require('./users'));
router.use('/destination', require('./destination'));
router.use('/', require('./swagger'));

// router.get('/', (req, res) => {
//     //#swagger.tags = ['Hello world']
//     res.send('API is running. See /api-doc for swagger UI.');
// });

router.get('/login', passport.authenticate('github'), (req, res) => { });

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
    });
});


module.exports = router;