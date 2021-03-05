import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import CashWallet from './components/pages/CashWallet';
import TransactionHistory from './components/pages/TransactionHistory';

function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/Home' exact component={Home} />
          <Route path='/cashwallet' component={CashWallet} />
          <Route path='/transaction' component={TransactionHistory} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;