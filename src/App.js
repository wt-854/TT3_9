import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Module1 from "./pages/Module1";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <main>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/module1' component={Module1} />
          {/* add modules according */}
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

//test