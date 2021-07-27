import React , {useEffect} from 'react';
import { BrowserRouter as  Router,Route } from "react-router-dom";
import Login from './LoginCard/Login'
import './App.css';
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard';
import PrivateRoute from './PrivateRoute'
import ContextProvider from './Context';
import courseCard from './component/courseCard';
import TeacherDashboard from './pages/TeacherDashboard';
import AddAssignement from './pages/AddAssignment';
import StudentModules from './components/studentModules/StudentModules';
import AddAnouncement from './pages/AddAnouncement';

function App() {
  return (
    <ContextProvider>

      <Router>
        <Route exact path='/student-dashboard' component={StudentDashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/course' component={courseCard} />
        <Route exact path='/teacher-dashboard' component={TeacherDashboard} />
        <Route exact path='/add-assignment' component={AddAssignement} />
        <Route exact path='/course-module' component={StudentModules} />
        <Route exact path='/add-announcements' component={AddAnouncement} />
        {/* <Route exact path='/grades' component={Grades} /> */}
       </Router> 
    </ContextProvider>


  );
}

export default App;
