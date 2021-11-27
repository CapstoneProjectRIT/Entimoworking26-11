import Signup from './component/SignUp/SignUp';
import Login from './component/Login/Login';

import Landing from './component/Landingpage/Landing';

import Homepage from './component/Homepage/Homepage';
import Profile from './component/Profile/Profile';
import MyTasks from './component/MyTask/MyTask';
import Education from './component/Topics/Education';
import Weather from './component/Topics/Weather';
import Nutrition from './component/Topics/Nutrition'
import TrendingTask from './component/TrendingTask/TrendingTask';
import Technology from './component/Topics/Technology';
import Social from './component/Topics/Social';
import Book from './component/Topics/Book';
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
        <Route path="/educationTask">
          <Education/>
        </Route>
        <Route path="/weatherTask">
          <Weather/>
        </Route>
        <Route path="/NutritionTask">
          <Nutrition/>
        </Route>
        <Route path="/TechnologyTask">
          <Technology/>
        </Route>
        <Route path="/SocialTask">
          <Social/>
        </Route>
        <Route path="/BookTask">
          <Book/>
        </Route>
        <Route path="/trendingTask">
          <TrendingTask/>
        </Route>
    </Router>
    
    
  );
}

export default App;
