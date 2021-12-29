import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Navbar from '../Dashboard/index';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './Nav';
import Qa from './Qa';
//import Profile from './Profile';
//import Questionlist from './QuestionList';


function Homepage() {


  return (
    <Router>
    <Container >
  
      <Nav />
      <Navbar />
      <Section />
      <Route path="/Homepage">
      <Qa/>
      </Route>
      <Route path="/trendingTask">
      <Qa/>
      </Route>

      <Route path="/myTasks">
      <Qa/>
      </Route>
     
      <Route path="/myupdates">
      <Qa/>
        </Route>
        <Route path="/educationTask">
        <Qa/>
        </Route>
        <Route path="/weatherTask">
        <Qa/>
        </Route>
        <Route path="/NutritionTask">
        <Qa/>
        </Route>
        <Route path="/TechnologyTask">
        <Qa/>
        </Route>
        <Route path="/SocialTask">
        <Qa/>
        </Route>
        <Route path="/BookTask">
        <Qa/>
        </Route>
      
     
      
    </Container>
    </Router>
    

  );
}

export default Homepage;

const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
min-height: 900px;
background-repeat: no-repeat;
background-size: cover;

`;
