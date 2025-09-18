const validate = require('../helpers/validate');

const saveUser = (req, res, next) => {
    //Only validate for POST/PUT
    if (req.method === 'POST' || req.method === 'PUT') {
        const validationRule = {
            username: 'required|string',   // fixed key name
            password: 'required|string'
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
    } else {
        //skips validation for DELETE/GET
        return next()
    }

};


const saveDestination = (req, res, next) => {
    //Only validate for POST/PUT
    if (req.method === 'POST' || req.method === 'PUT') {
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
    } else {
        return next();
    }

};

module.exports = { saveUser, saveDestination };


