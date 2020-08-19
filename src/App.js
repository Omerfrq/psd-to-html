import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import Data from './pages/data/data';
import Navigation from './components/navigation/navigation';
import Home from './pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import OptionOne from './pages/options/option-one';

function App() {
  return (
    <div className='vh-100 d-flex flex-column'>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/data' component={Data} />
        <Route path='/option-one' component={OptionOne} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
