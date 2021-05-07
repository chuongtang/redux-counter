import React from 'react';
import StoreData from './ApiData'
const Home = () => {
    return (
        <div className="App" id='homepg'>
            <h1 style={{ 'text-align': 'center' }}>Project Detail</h1>
            <h3>🏡Home Page</h3>
            <p>
                <ul>
                    <li>Home page use React-router to render different components.</li>
                    <li>Pure CSS styling is in index.css.</li>

                </ul>
                <h3>🏪 Create Store</h3>
                <ul>
                    <li>Create Store will connect/post a newStore to MongoDB.</li>
                    <li>When submit is clicked, axios will send request to database and add new store or retrieve the prvious count if store exist</li>
                </ul>
                <h3>🎰 Counter</h3>
                <ul>
                    <li>Counter is the main component with full functionality of a click counter.</li>
                    <li> I use Redux Toolkit for state management. The reducer with call the dispatch action base on the onclick components.</li>
                    <li>Axios was used to make HTTP requests from the browser and handle the transformation of request and response data</li>
                </ul>
            </p>
            <StoreData />
        </div>
    );
}

export default Home;