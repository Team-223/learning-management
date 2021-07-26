import React , {useEffect} from 'react';
import { BrowserRouter as  Router,Route } from "react-router-dom";
import Login from './LoginCard/Login'
import './App.css';
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard';
import PrivateRoute from './PrivateRoute';
import ContextProvider
 from './Context';
function App() {
  return (
    <ContextProvider>
      <Router>
        <PrivateRoute exact path='/student-dashboard' component={StudentDashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={LandingPage} />
      </Router> 
    </ContextProvider>
  );
}

export default App;
