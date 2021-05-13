  
const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator');

// Store schema
const StoreSchema = new mongoose.Schema({
    storeName: {type:String, required:true, unique:true},
    count: Number    
});

StoreSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator',
    message: 'Error, expected Store Name to be unique.'
});
const Store = mongoose.model('Store', StoreSchema); //convert to model named Store
module.exports = Store; //export for controller use