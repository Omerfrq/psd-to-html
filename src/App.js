import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

// Pages
import Data from './pages/data/data';
import Navigation from './components/navigation/navigation';
import Home from './pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import OptionOne from './pages/options/option-one';
import { Login } from './pages/login/login';
import { OptionThree } from './pages/options/option-three';
import { OptionTwo } from './pages/options/option-two';
import OptionFour from './pages/options/option-four';
import OptionFive from './pages/options/option-five';

function App() {
  return (
    <div className='vh-100 d-flex flex-column'>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/data' component={Data} />
        <Route exact path='/data/option-one' component={OptionOne} />
        <Route exact path='/data/option-two' component={OptionTwo} />
        <Route exact path='/data/option-three' component={OptionThree} />
        <Route exact path='/data/option-four' component={OptionFour} />
        <Route exact path='/data/option-five' component={OptionFive} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
