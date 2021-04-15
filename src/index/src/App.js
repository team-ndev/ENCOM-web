import './App.css';
import HomeIMG from './components/Home';
import {Header} from './components/Header/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Notification} from './components/Notification/notification';
import {Channels} from './components/Channels/channels';
import {Live} from './components/Live/live';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Header/>
          <Route exact path="/"><Notification/></Route>
          <Route exact path="/channels"><Channels/></Route>
          <Route exact path="/live"><Live/></Route>
        </Router>

      <HomeIMG/>


     


      

      </header>
    </div>
  );
}

export default App;
