import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/home-page.component';

const HatsPage = () => (
    <h1>Sample of Hats Page</h1>
);

const JacketsPage = () => (
  <h1>Sample of Jackets Page</h1>
);

const SneakersPage = () => (
  <h1>Sample of Sneakers Page</h1>
);

const WomensPage = () => (
  <h1>Sample of Womens Page</h1>
);

const MensPage = () => (
  <h1>Sample of Mens Page</h1>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/jackets' component={JacketsPage} />
        <Route exact path='/sneakers' component={SneakersPage} />
        <Route exact path='/womens' component={WomensPage} />
        <Route exact path='/mens' component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
