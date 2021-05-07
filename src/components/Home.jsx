import React from 'react';
import StoreData from './ApiData'
const Home = () => {
    return (  
        <div className="App">
            <h1>Project Detail</h1>
            <h3>Home Page</h3>
            <p>
                Home page use React-router to render different components.
                Pure CSS styling is in index.css.
                Create Store will connect/post a newStore to MongoDB.
                Counter is the main component with full functionality of a click counter.
                I use Redux Toolkit for state management. The reducer with call the dispatch action base on the onclick components.
                Axios was used to make HTTP requests from the browser and handle the transformation of request and response data
            </p>
            <StoreData />
        </div>
    );
}
 
export default Home;