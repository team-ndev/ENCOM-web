import './App.css';
import HomeIMG from './pages/Home';
import Login from './pages/Login/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
          <Router history={history}>
           <Switch>
           <Route exact path='/' component={Login} />
           <Route exact path="/Notification">{HomeIMG}</Route>
           <Route exact path="/live">{HomeIMG}</Route>
           <Route exact path="/channels">{HomeIMG}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
