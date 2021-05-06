import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import compression from 'compression';
import routes from './storeRoutes'
require('dotenv').config();

const app = express();
app.use(compression()); //Compress all routes
app.use(cors());
app.use(express.json());
app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log(`HEllo, your Store server App is listening on port  ${listener.address().port}`)
})

//establish connection to database
mongoose.connect(
  process.env.MONGODB_URI,
  { 
      useFindAndModify: false, 
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useCreateIndex: true,
      // prevents heroku from returning a timeout error 503
      server: { 
          socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } 
       }, 
       replset: {
          socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } 
       }
       
  },
  function (err) {
      if (err) return console.log("Error: ", err);
      console.log(
        "MongoDB Connection -- Ready state is:",
        mongoose.connection.readyState
      );
    }
  );