import express from 'express';

// Create an express router object to set up our routes
const router  = express.Router(); 

const storeController = require('./storeController'); 

// Routes with the controller function as the callback to handle the request.
router.get('/stores', storeController.getAllStore);
router.delete('/stores', storeController.deleteAllStore);
router.post('/stores', storeController.newStore);
router.get('/stores/:storeName', storeController.getOneStore);
router.post('/stores/:storeName', storeController.newCount);


// Export the route to use in our server.js
module.exports = router;
