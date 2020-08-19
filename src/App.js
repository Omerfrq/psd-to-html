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

function App() {
  return (
    <div className='vh-100 d-flex flex-column'>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/data' component={Data} />
        <Route exact path='/option-one' component={OptionOne} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
