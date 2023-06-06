
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gameboard from './Gameboard';
import Rules from './Rules';
import Menu from './Menu';
import Create from './Create';
import TopMenu from './TopMenu';

function App() {

  return (
    <Router>
    <div className="App">
        <Switch>
            <Route exact path='/'>
                <Menu />
            </Route>
            <Route path='/play/:redPlayer/:yellowPlayer/:gameType'>
                <TopMenu />
                <Gameboard />
            </Route>
            <Route path='/rules'>
                <Rules />
            </Route>
            <Route path='/create-players'>
                <Create />
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
