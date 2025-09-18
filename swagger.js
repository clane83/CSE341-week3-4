const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users API Information'
    },
    host: 'cse341-week3-4-e6vp.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc);