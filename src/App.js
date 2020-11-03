import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
