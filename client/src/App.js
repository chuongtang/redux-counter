import Counter from './components/Counter';
import CreateStore from './components/CreateStore';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import LoadingPageCom from './components/LoadingPage';

function App() {
  return (
    // <div >
      <Router>
        <Navbar />
        <Route  key='home' path='/' exact>
          <Home />
        </Route>
        <Route  key='create' path='/create'>
          <CreateStore />
        </Route>
        <Route  key='counter' path='/counter'>
          <Counter />
        </Route>
        <Route  key='loading' path='/loading'>
          <LoadingPageCom />
        </Route>
      </Router>
    // </div>
  );
}

export default App;