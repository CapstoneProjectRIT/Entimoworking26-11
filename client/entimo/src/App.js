import Signup from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import Homepagetrending from './component/Homepage/Homepagetrending';
import HomepageMytasks from './component/Homepage/Homepagemytasks';
import HomepageEdjucation from './component/Homepage/HomepageEducation';
import HomepageSocial from './component/Homepage/HomepageSocial';
import HomepageBooks from './component/Homepage/HomepageBooks';
import HomepageNutrion from './component/Homepage/HomepageNutrition';
import HomepageTechnology from './component/Homepage/HomepageTechnology';
import HomepageWeather from './component/Homepage/HomepageWeather';
import Landing from './component/Landingpage/Landing';

import Homepage from './component/Homepage/Homepage';
import Profile from './component/Profile/Profile';
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
          <HomepageMytasks/>
        </Route>
        <Route path="/educationTask">
          <HomepageEdjucation/>
        </Route>
        <Route path="/weatherTask">
          <HomepageWeather/>
        </Route>
        <Route path="/NutritionTask">
          <HomepageNutrion/>
        </Route>
        <Route path="/TechnologyTask">
        <HomepageTechnology/>
        </Route>
        <Route path="/SocialTask">
          <HomepageSocial/>
        </Route>
        <Route path="/BookTask">
          <HomepageBooks/>
        </Route>
        <Route path="/trendingTask">
          <Homepagetrending/>
        </Route>
    </Router>
    
    
  );
}

export default App;
