//import Store model
import Store from './storeSchema'


//GET '/Store'
const getAllStore = (req, res) => {
    Store.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/Store'
const newStore = (req, res) => {
    //check if the Store name already exists in db
    Store.findOne({storeName:req.body.storeName},(data)=>{

        //if Store not in db, add it
        if(data===null){
            //create a new Store object using the Store model and req.body
            const newStore = new Store({
                storeName:req.body.storeName,
                count:0,
            })

            // save this object to database
            newStore.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //if Store is in db, return a message to inform it exists            
        }else{
            return res.json({message:"Store already exists. Count is from previous"});
        }
    })    
};


//DELETE '/store'
const deleteAllStore = (req, res) => {
    Store.deleteMany({}, err => {
        if(err) {
          return res.json({message: "Failed DELETING ALL"});
        }
        return res.json({message: "DELETED ALL obj in database"});
    })
};

//GET '/Store/:name'
const getOneStore = (req, res) => {
    let name = req.params.name; //get the Store name

    //find the specific Store with that name
    Store.findOne({name:name}, (err, data) => {
    if(err || !data) {
        return res.json({message: "Store doesn't exist. Check Store name"});
    }
    else return res.json(data); //return the Store object if found
    });
};

//Update Store Count
const newCount = (req, res) => {
    let storeName = req.params.storeName; //get the Store to update Count
    let newCount = req.body.count; //get the count
    
    //find the STore object
    Store.findOne({storeName}, (err, data) => {
        if(err || !data || !newCount) {
            return res.json({message: "No Store found. Check name again"});
        }
        else {
            //update NewCount to  the Store object
            data.count=newCount;
            //save changes to db
            data.save(err => {
                if (err) { 
                return res.json({message: "NewCount failed to update.", error:err});
                }
                return res.json(data);
            })  
        } 
    })
  };
  

//export controller functions
module.exports = {
    getAllStore,
    newStore,  
    deleteAllStore,
    getOneStore,
    newCount
};