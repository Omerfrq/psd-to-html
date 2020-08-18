import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import Data from './pages/data/data';
import Navigation from './components/navigation/navigation';
import Home from './pages/home/home';
import Header from './components/header/header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/data' component={Data} />
      </Switch>
    </div>
  );
}

export default App;
