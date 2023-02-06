//Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose');

// Rewuire DB Configuration File
const db = require('./config/db')

// Establish Database Connection
mongoose.connect(db, { useNewUrlParser: true});
mongoose.connection.once('open', () => console.log('Connected to MongoDB'))

//Require Route Files
const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles')

// Instantiate Express Application Object
const app = express();

//Define Port for the API to run on
const port = process.env.PORT || 5001;

/**
 * Routes
 * 
 * Mount imported Routers
 */
//mounting after requiring
//restart the server
app.use(indexRouter);
app.use(articlesRouter)


// Start the server and listen for requests on the given port
app.listen(port, () => console.log(`blogy is listening on port ${port}`))

