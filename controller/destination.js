const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');
// import java.time.LocalDate;
// import java.time.format.DateTimeFormatter;



const allDestinations = async (req, res) => {
    try {
        const result = await mongodb.getDb().collection('destination').find();
        result.toArray().then((destination) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(destination);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
};

const createDestination = async (req, res) => {
    try {
        // const desitnationId = new ObjectId(req.params.id);
        const todayYMD = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

        const destination = {
            country: req.body.country,
            cities_to_visit: req.body.cities_to_visit,
            languages: req.body.languages,
            createdby: req.body.createdby,
            createdon: todayYMD, //use formatted date to insert into database
            visited: req.body.visited
        }

        const response = await mongodb.getDb().collection('destination').insertOne(destination);
        if (response.acknowledged) {
            res.status(201).json(response);
        } else {
            res.status(500).json(response.error || 'Some error occurred while creating the destination.');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateDestination = async (req, res) => {
    try {
        const desitnationId = new ObjectId(req.params.id);
        const todayYMD = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

        const destination = {
            country: req.body.country,
            cities_to_visit: req.body.cities_to_visit,
            languages: req.body.languages,
            createdby: req.body.createdby,
            createdon: todayYMD, //use formatted date to insert into database
            visited: req.body.visited
        }

        const response = await mongodb.getDb().collection('destination').replaceOne({ _id: destinationId }, destination);
        if (response.modificatedCount > 0) {
            res.status(201).json(response);
        } else {
            res.status(500).json(response.error || 'Some error occurred while creating the destination.');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteDestination = async (req, res) => {
    try {
        const desitnationId = new ObjectId(req.params.id);
        const response = await mongodb.getDb().collection('destination').deleteOne({ _id: destinationId });
        if (response.deletedCount > 0) {
            res.status(201).json(response);
        } else {
            res.status(500).json(response.error || 'Some error occurred while creating the destination.');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    allDestinations,
    createDestination,
    updateDestination,
    deleteDestination,
};
