import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';
import './App.css';

import Header from './components/header/header.component';
import SigInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';
import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/signin' component={SigInUpPage}/>
          <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
