//Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose');

// Instantiate ExpressApp Object
const app = express();

//Define Port for the API to run on
const port = process.env.PORT || 5001;

// Start the server and listen for requests on the given port
app.listen(port, () => console.log(`blogy is listening on port ${port}`))
