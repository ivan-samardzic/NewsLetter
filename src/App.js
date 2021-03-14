import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './routes/Home/Home'
import Business from './routes/Business/Business'
import Media from './routes/Media/Media'
import Sports from './routes/Sports/Sports'
import Science from './routes/Science/Science'
import Tech from './routes/Tech/Tech'
import Health from './routes/Health/Health'
import Filter from './routes/Filter/Filter'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/business' component={Business} />
        <Route exact path='/media' component={Media} />
        <Route exact path='/sports' component={Sports} />
        <Route exact path='/science' component={Science} />
        <Route exact path='/tech' component={Tech} />
        <Route exact path='/health' component={Health} />
        <Route path='/:query' component={Filter} />
      </Switch>
    </Router>
  );
}

export default App;
