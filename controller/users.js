// controller/users.js
const { ObjectId } = require('mongodb');
const dbClient = require('../data/database');

async function allUsers(_req, res) {
    try {
        const users = await dbClient.getDb().collection('users').find({}).toArray();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createUser(req, res) {
    try {
        const user = { username: req.body.username, password: req.body.password };
        const result = await dbClient.getDb().collection('users').insertOne(user);
        res.status(201).json({ _id: result.insertedId, ...user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function updateUser(req, res) {
    try {
        const id = new ObjectId(req.params.id);
        const payload = { username: req.body.username, password: req.body.password };
        const r = await dbClient.getDb().collection('users').replaceOne({ _id: id }, payload);
        if (r.modifiedCount === 0) return res.status(404).json({ message: 'Not found or no changes' });
        res.status(200).json({ _id: id, ...payload });
    } catch (err) {
        res.status(400).json({ message: 'Invalid id' });
    }
}

async function deleteUser(req, res) {
    try {
        const id = new ObjectId(req.params.id);
        const r = await dbClient.getDb().collection('users').deleteOne({ _id: id });
        if (r.deletedCount === 0) return res.status(404).json({ message: 'Not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: 'Invalid id' });
    }
}

module.exports = {
    allUsers,
    createUser,
    updateUser,
    deleteUser
};
