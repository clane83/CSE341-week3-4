const express = require('express');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3500;

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('API is running.  See /api-docs for swagger UI.');

});

app.use(bodyParser.json())
    .use('/', require('./routes'))
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });

process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

mongodb.initDb((err) => {
    if (err) {
        console.error('Failed to initialize DB', err);
        process.exit(1);
    } else {
        app.listen(port, () => {
            console.log(`Server listening on http://localhost:${port}`);
        });
    }
});