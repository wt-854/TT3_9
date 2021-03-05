import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
<<<<<<< HEAD
import Register from './pages/Register';
import Transaction from "./pages/Transaction";
import Module1 from './pages/Module1';
=======
>>>>>>> origin
import ViewAsset from './pages/ViewAsset';
import Info from './pages/Info';
import History from './pages/History';

function App() {
  const [credentials, setCredentials] = useState({});

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <main>
          <Route path='/home' exact component={Home} />
          <Route
            exact
            path='/'
            component={() => <Login setCredentials={setCredentials} />}
          />
          <Route
            path='/viewinfo'
            component={() => <Info credentials={credentials} />}
          />
          <Route path='/register' component={Register} />
          <Route path='/transaction' component={ () => <Transaction credentials={credentials} />} />
          <Route path='/history' component={History} />
          <Route path='/viewAsset' component={() => <ViewAsset />} />

          {/* add modules according */}
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
