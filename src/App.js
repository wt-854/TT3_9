import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
// import Footer from './components/Footer';
import CashWallet from './components/pages/CashWallet';
import TransactionHistory from './components/pages/TransactionHistory';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/Home' exact component={Home} />
          <Route path='/cashwallet' component={CashWallet} />
          <Route path='/transaction' component={TransactionHistory} />
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
        
      </Router>
    </>
  );
}

export default App;