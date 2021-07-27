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

function App() {
  return (
    <ContextProvider>

      <Router>
        <Route exact path='/student-dashboard' component={StudentDashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/course' component={courseCard} />
        <Route exact path='/teacher-dashboard' component={TeacherDashboard} />
       </Router> 
    </ContextProvider>


  );
}

export default App;
