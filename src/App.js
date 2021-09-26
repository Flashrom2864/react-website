import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
      
      <Router>
        <Navbar />
        <div className = 'container' id = 'container'> 
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        </div>
      </Router>
      
  );
}

export default App;