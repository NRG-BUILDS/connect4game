
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';
import Home from './Home';

function App() {

  return (
    <Router>
    <div className="App">
        <Home />
    </div>
    </Router>
  );
}

export default App;
