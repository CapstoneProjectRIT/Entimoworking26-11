import React from 'react';
import { useState,useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import Questionlist from './QuestionList';
import QaTrending from '../TrendingTask/TrendingTask';
import Qamyupdate from '../MyUpdate/MyUpdate';
import Qamytasks from '../MyTask/MyTask';
import QaEdjucation from '../Topics/Education';
import QaTechnology from '../Topics/Technology';
import QaNutrition from '../Topics/Nutrition';
import QaSocial from '../Topics/Social';
import QaWeather from '../Topics/Weather';
import QaBooks from '../Topics/Book';
export default function Qa() {
  const [Popup, setPopup] = useState(false);
    
    const [user,setfullname]=useState([]);
    
    useEffect(()=>{
        const url="http://localhost:5000/api/aboutus";
       
        axios
      .get(url, { withCredentials: true })
      .then((response) => {
        setfullname(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    });
  return (
    
  <Router>
    <QASection >
    <PostT onClick={() => setPopup(true)}><Name>{user.fullname}</Name><AskQ>What is your task/queston?</AskQ></PostT>
    <Post trigger={Popup} setTrigger={setPopup}>
      </Post>
      <Route path="/Homepage">
      <Questionlist />
      </Route>
      <Route path="/trendingTask">
      <QaTrending/>
      </Route>
      <Route path="/myTasks">
      <Qamytasks/>
      </Route>
     
      <Route path="/myupdates">
      <Qamyupdate/>
        </Route>
        <Route path="/educationTask">
        <QaEdjucation/>
        </Route>
        <Route path="/weatherTask">
        <QaWeather/>
        </Route>
        <Route path="/NutritionTask">
        <QaNutrition/>
        </Route>
        <Route path="/TechnologyTask">
        <QaTechnology/>
        </Route>
        <Route path="/SocialTask">
        <QaSocial/>
        </Route>
        <Route path="/BookTask">
        <QaBooks/>
        </Route>
      
      </QASection>
      </Router>
  );
}
const QASection= styled.div`


position: absolute;
width: 80%;
height: 912px;
left: 280px;
top: 120px;

background-repeat: no-repeat;
background-size: cover;
`
const PostT = styled.div`
display: flex;
&:hover {
    cursor: pointer;
  }
flex-direction: column;
font-family: Poppins;
font-style: normal;
height: 102px;
background-color:#FAF8F9;
font-size: 18.9296px;
padding-left: 20px;
align-items: space-between;
justify-content: space-evenly;
`;
const Name = styled.text`

font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 18px;
`;
const AskQ = styled.text`

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #766D6D;

`;