import React , {useEffect} from 'react';
import { BrowserRouter as  Router,Route } from "react-router-dom";
import Login from './LoginCard/Login'
import Header from './components/header/Header'
import './App.css';
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard';

function App() {
//   useEffect(()=> {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//     if(authUser) {
//       // user has logged in...
//       console.log(authUser);
//       setUser(authUser);

//     } else {
//       // user has looged out
//       setUser(null)
//     }
//   })

//   return () => {
//     // perform some cleanup actions
//     unsubscribe();
//   }
// },[user, username])

  return (
    <div className="App">

      <Router>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
    
        <Route exact path='/student-dashboard' component={StudentDashboard} />
       </Router> 


   </div>
  );
}

export default App;
