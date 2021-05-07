const express = require('express'); 

// Create an express router object to set up our routes
const router  = express.Router(); 

const storeController = require('../controller/storeController'); 

// Routes with the controller function as the callback to handle the request.
router.get('/stores', storeController.getAllStore);
router.delete('/stores', storeController.deleteAllStore);
router.post('/stores', storeController.newStore);
router.get('/stores/:storeName', storeController.getOneStore);
router.post('/stores/:storeName', storeController.newCount);

const Store = require('../schema/storeSchema');

// Get all Stores
router.get('/stores', async (req, res, next) => {
    let data = await Store.find({});
    console.info(`Store exist in MongoDB:`, data?.length)
    res.send(data);
  });

//  Post new store to DB
router.route('/create').post((req,res) =>{
    const storeName = req.body.storeName;
    const count = req.body.count;
    const newStore = new Store({
        storeName, 
        count
    });
    newStore.save();  //Mongoose method
});

// router.route('/stores').get((req, res)=>{
//     Store.find()
//         .then(foundStores => res.json(foundStores))
// })
// Export the route to use in server.js
module.exports = router;