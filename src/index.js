import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home';
import Item from './Item';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
        <Route exact path="/item" component={Item}/>

    </div>
  </Router>,
 document.getElementById('root')
);


serviceWorker.unregister();
