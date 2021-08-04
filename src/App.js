import React , {useEffect, useState} from 'react';
import { BrowserRouter as  Router,Route } from "react-router-dom";
import Login from './LoginCard/Login'
import './App.css';
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard';
import PrivateRoute from './PrivateRoute'
import ContextProvider from './Context';
import courseCard from './components/courceCards/courseCard';
import TeacherDashboard from './pages/TeacherDashboard';
import AddAssignement from './pages/AddAssignment';
import ModulePage from './pages/ModulePage';
import AddAnouncement from './pages/AddAnouncement';


function App() {
  return (


    // Adding private route to the student dashboard page
    <ContextProvider>
      <Router>
        <PrivateRoute exact path='/student-dashboard' component={StudentDashboard} />
        <PrivateRoute exact path='/teacher-dashboard' component={TeacherDashboard} />
        <Route exact path='/course' component={courseCard} />
        <Route exact path='/add-assignment' component={AddAssignement} />
        <Route exact path='/course-module' component={ModulePage} />
        <Route exact path='/add-announcements' component={AddAnouncement} />
        {/* <Route exact path='/grades' component={Grades} /> */}
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={LandingPage} />
       </Router>    
    </ContextProvider>


  );
}

export default App;
