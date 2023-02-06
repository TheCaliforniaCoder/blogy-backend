// Creating a base name for the MongoDB
const mongooseBaseName = 'blogy';

//Create the MongoDB URI for the Dev amd Test
const database = {
    development: `mongodb://localhost:27017/${mongooseBaseName}-development`,
    test: `mongodb://localhost:27017/${mongooseBaseName}-test`
};


// Identify if development environment is Test or Dev
// Select a Database based on whether a test file was executed before server.js
const localDB = process.env.TESTENV ? database.test : database.development;

// Environment variable MONGODB_URI will be available in 
// Heroku production environment . Otherwise use Test or
// Development database.
const currentDB = process.env.MONGODB_URI || localDB;

// Export the appropriate database based on the current environment

module.exports = currentDB;