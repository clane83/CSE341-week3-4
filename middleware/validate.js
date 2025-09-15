const validate = require('../helpers/validate');

const saveUser = (req, res, next) => {
    const validationRule = {
        username: 'required|string',   // fixed key name
        passwrod: 'required|string'
    };
    validate(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            return next();
        }
    });
};


const saveDestination = (req, res, next) => {
    const validationRule = {
        country: 'required|string',   // fixed key name
        cities_to_visit: 'required|array',
        languages: 'required|array',
        createdby: 'required|string',
        // createdon: 'required|date',  //set by the server
        visited: 'required|string',

    };
    validate(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            return next();
        }
    });
};

module.exports = { saveUser, saveDestination };


