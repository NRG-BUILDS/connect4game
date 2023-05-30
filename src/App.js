
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Destination from './views/Destination';
import Crew from './views/Crew';
import Technology from './views/Technology';
function App() {

  return (
    <Router>
    <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/destination/:place'>
                <Destination />
              </Route>
              <Route path='/crew'>
                <Crew />
              </Route>
              <Route path ='/technology'>
                <Technology />
              </Route>
          </Switch>
        </div> 
    </div>
    </Router>
  );
}

export default App;
