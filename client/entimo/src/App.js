import Signup from './component/SignUp/SignUp';
import Login from './component/Login/Login';

import Landing from './component/Landingpage/Landing';

import Homepage from './component/Homepage/Homepage';
import Profile from './component/Homepage/Profile';
import MyTasks from './component/Homepage/MyTask';
import "./App.css";
import {Route,BrowserRouter as Router} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
function App() {
  const [auth_status,setAuthStatus]=useState(false);
  useEffect(()=>{

    const url='http://localhost:5000/api/isuserLoggedIn'
    
        axios.get(url,{
            withCredentials:true
        }).then(res=>{
          setAuthStatus(res.data.auth_status);
        })
      . catch ((error) => {
        window.alert("Error");
        console.log(error);
    });

  });
  return (
    <Router>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/SignUp">
          <Signup/>
          </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Homepage">
          <Homepage auth_status={auth_status} />
        </Route>
        <Route path="/aboutus">
          <Profile/>
        </Route>
        <Route path="/mytasks">
          <MyTasks/>
        </Route>
    </Router>
    
    
  );
}

export default App;