import React from 'react';
import { Header } from '../components/Header/header';
import { Notification } from '../components/Notification/notification';
import {Channels} from '../components/Channels/channels';
import {Live} from '../components/Live/live';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function HomeIMG() {

  return (
    <div>
     <header className="App-header">
     <Router>
          <Header/>
          <Route exact path="/Notification"><Notification/></Route>
          <Route exact path="/channels"><Channels/></Route>
          <Route exact path="/live"><Live/></Route>
        </Router>
     </header>
     </div>
  );
}

export default HomeIMG;
