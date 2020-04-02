import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import SigInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';
import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/signin' component={SigInUpPage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
