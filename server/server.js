require('dotenv').config();
const express = require('express');
const routes = require('./routes/storeRoutes');
const mongoose = require('mongoose');
const compression = require('compression');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(compression()); //Compress all routes
app.use(cors());
app.use('/', routes); //to use the routes



//establish connection to database
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    // // prevents heroku from returning a timeout error 503
    // server: { 
    //     socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } 
    //  }, 
    //  replset: {
    //     socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } 
    //  }

  },
  function (err) {
    if (err) return console.log("Error: ", err);
    console.log(
      "MongoDB Connection -- Ready state is:",
      mongoose.connection.readyState
    );
  }
);

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log(`HEllo, your Store server App is listening on port  ${listener.address().port}`)
})