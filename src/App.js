import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Register from './components/Register';
import ContactUs from './components/ContactUs';
import Courses from './components/Courses';
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
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/courses" component={Courses} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
