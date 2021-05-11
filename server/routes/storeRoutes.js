const express = require('express');

// Create an express router object to set up our routes
const router = express.Router();

const storeController = require('../controller/storeController'); 

// Routes with the controller function as the callback to handle the request.
router.get('/stores', storeController.getAllStore);
router.delete('/stores', storeController.deleteAllStore);
router.post('/stores', storeController.newStore);
router.delete('/stores/:id', storeController.deleteOne);
router.get('/stores/:storeName', storeController.getOneStore);
router.post('/stores/:storeName', storeController.newCount);



// >>>>>
// const Store = require('../schema/storeSchema');

// // Get all Stores
// router.get('/stores', async (req, res, next) => {
//     let data = await Store.find({});
//     console.info(`Store exist in MongoDB:`, data?.length)
//     res.send(data);
// });

// //  Post new store to DB
// router.post('/create', (req, res) => {
//     //check if the Store name already exists in db
//     Store.findOne({ storeName: req.body.storeName }, (data) => {
//         //if Store not in db, add it
//         if (data === null) {
//             //create a new Store object using the Store model and req.body
//             const newStore = new Store({
//                 storeName: req.body.storeName,
//                 count: req.body.count,
//             })
//             // save this object to database
//             // console.log('this is the LOG',req.body);
//             newStore.save((err, data) => {
//                 if (err) return res.json({ Error: err });
//                 return res.json(data);
//             })
//             //if Store is in db, return a message to inform it exists            
//         } else {
//             return res.json({ message: "Store already exists. Count is from previous" });
//         }
//     })
// }
    // const storeName = req.body.storeName;
    // const count = req.body.count;
    // const newStore = new Store({
    //     storeName, 
    //     count
    // });

    // console.log('this is new store', newStore);
    // newStore.save();  //Mongoose method
// );

module.exports = router;