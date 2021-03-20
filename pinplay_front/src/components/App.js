import React from 'react'
import {Router, Route} from 'react-router-dom';
import ShowPlaylists from './ShowPlaylists';
import EndScreen from './EndScreen';
import Filters from './Filters';
import history from '../history';


import Header from './Header';

//TODO: convert App into header
//TODO: make header always showing via react-router
const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header/>
      
          <div>
            <Route path="/" exact component={ShowPlaylists} />
            <Route path="/endscreen/:id" exact component={EndScreen} />
            <Route path="/filters" exact component={Filters} />
          </div>
      </Router>
      
    </div>
    
    
    /*
    <p>You are authorized with token: {token}</p>
    <div>
    Email is {user.data.email}
    </div>
    <div>
    URI is {user.data.uri}
    </div>
    <div>
    URL is {user.data.external_urls.spotify}
    </div>
    <img src={user.data.images[0].url}></img>
    */
  )
};

export default App;