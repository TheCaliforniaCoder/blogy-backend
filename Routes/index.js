//Require necessary NPM packages
const express = require('express');

//Instantiate a Router (a mini app that only handles routes)
const router = express.Router();

/* Action:         Index
   Method:         Get
   URI:            /
   Description:    Get the Root Route
   */

   router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Blogy'})
   })

// Export the Router so we can use it in the `server.js`file
module.exports = router;

