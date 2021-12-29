import Signup from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import Landing from './component/Landingpage/Landing';
import Search from './component/Homepage/Search'
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
          <Homepage/>
        </Route>
        <Route path="/nav">
          <Search/>
        </Route>
        <Route path="/myupdates">
          <Homepage/>
        </Route>
        <Route path="/educationTask">
          <Homepage/>
        </Route>
        <Route path="/weatherTask">
          <Homepage/>
        </Route>
        <Route path="/NutritionTask">
          <Homepage/>
        </Route>
        <Route path="/TechnologyTask">
        <Homepage/>
        </Route>
        <Route path="/SocialTask">
          <Homepage/>
        </Route>
        <Route path="/BookTask">
          <Homepage/>
        </Route>
        <Route path="/trendingTask">
          <Homepage/>
        </Route>
    </Router>
    
    
  );
}

export default App;
