const mongoose = require('mongoose');

// Store schema
const StoreSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  count: Number
});

const Store = mongoose.model('Store', StoreSchema); //convert to model named Store
module.exports = Store; //export for controller use