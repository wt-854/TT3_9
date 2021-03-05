import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Transaction from "./pages/Transaction";

function App() {
  const [credentials, setCredentials] = useState({});

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <main>
          <Route path='/' exact component={Home} />
          <Route
            path='/login'
            component={() => <Login setCredentials={setCredentials} />}
          />
          <Route path='/register' component={Register} />
          <Route path='/transaction' component={Transaction} />
          {/* add modules according */}
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
