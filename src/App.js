import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Register from './components/Register';
import ContactUs from './components/ContactUs';
import Courses from './components/Courses';
import Course from './components/Course';
import CoursStudio from './components/CoursStudio';
import MyCourses from './components/MyCourses';
import Pricing from './components/Pricing';
import NotFound404 from './components/NotFound404';
import Lessons from './components/Lessons';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HistoricCours from './components/HistoricCours';
import SubscriptionHistory from './components/SubscriptionHistory';
import Report from './components/Report';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/all-courses" component={Courses} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/course-studio" component={CoursStudio} />
        <Route exact path="/my-courses" component={MyCourses} />
        <Route exact path="/course-lessons" component={Lessons} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/historicCour" component={HistoricCours} />
        <Route exact path="/historic-subscription" component={SubscriptionHistory} />
        <Route exact path="/Report" component={Report} />
        {/* <Route component={NotFound404} />*/}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
