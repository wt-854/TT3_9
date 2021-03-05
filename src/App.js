import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Info from './pages/Info';
import History from './pages/History';

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
          <Route
            path='/viewinfo'
            component={() => <Info credentials={credentials} />}
          />
          <Route path='/register' component={Register} />
          <Route path='/history' component={History} />
          {/* add modules according */}
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
