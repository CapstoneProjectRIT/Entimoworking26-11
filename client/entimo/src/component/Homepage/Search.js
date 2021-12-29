import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import logo from '../../assets/ENTIMO30.png';
import SeaarchIcon from '../../assets/search.png';
import Bellicon from '../../assets/BellIcon.png';
import Profileicon from '../../assets/ProfileIcon.png';

import axios from 'axios';
import Section from './Section';
import Navbar from '../Dashboard/index';
import moment from "moment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ChatIcon from "@material-ui/icons/Chat";
import PostComment from './PostComment';
import './QuestionList.css';
import QuestionList from './QuestionList';
import {Route,BrowserRouter as Router} from 'react-router-dom';
export default function Nav() {
  
  const [Popup, setPopup] = useState(false);
  const [questions,setQuestions]=useState([]);
  const [skip,setSkip]=useState(false);
  const filterContent=(posts,searchTerm)=> {
    
    const result=posts.filter((post)=>post.Topic.toLowerCase().includes(searchTerm) ||
                 post.name.toLowerCase().includes(searchTerm) ||
                 post.Location.toLowerCase().includes(searchTerm) ||
                 post.question.toLowerCase().includes(searchTerm)
    );
 
    setQuestions(result);
   
  }
 const handleTextChange=(e)=>{
    const searchTerm=e.currentTarget.value
  
    const url="http://localhost:5000/api/allQuestion";
       setSkip(true);
    axios
  .get(url, { withCredentials: true })
  .then((response) => {
    if(response.data){
     const posts=response.data
     filterContent(posts,searchTerm);
    }
  
  })

  }
  const Dislike = (ID) => {
    const url = "http://localhost:5000/api/dislike";

    const data = new FormData();
    data.append("id", ID);

    axios
      .post(url, data, { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Like = (ID) => {
    const url = "http://localhost:5000/api/likes";

    const data = new FormData();
    data.append("id", ID);

    axios
      .post(url, data, { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getID=(ID)=>{
    const url='http://localhost:5000/api/questionID'
    const data = new FormData();
      data.append("id", ID);
  
      axios
        .post(url, data, { withCredentials: true })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  const logout = () => (
    fetch("api/logout", { method: "DELETE" })
  );
  return (
    <Container1>
    <Container>
      <Logo />
      <Searchbar >
        <SearchContainer placeholder="search for people task or update" onChange={handleTextChange} />
        <SearchIcon />
        <PNU>
          <PostT onClick={() => setPopup(true)}>Post Task</PostT>
          <BellIcon />
          <ProfileIcon />
        </PNU>
      </Searchbar>
     
      <Post trigger={Popup} setTrigger={setPopup}>
        
      </Post>
      
      </Container>
      <Navbar/>
      <Section/>
      <QAsection>
      <PostQ onClick={() => setPopup(true)}><Name>User Name</Name><AskQ>What is your task/queston?</AskQ></PostQ>
    <Post trigger={Popup} setTrigger={setPopup}>
      </Post>
      <div className="QuestionList">
          {questions && (
            <div className="Questions">
              {questions.map((question) => {
                return (
                  <div className="question" key={question._id}>
                    <div className="question__profile">
                      
                      <h4>{question.name}</h4>
                      <h5>Location: {question.Location}</h5>
                      <h5>Topic: {question.Topic}</h5>
                      <h5>{moment(question.date).format('LLLL')}</h5>
                    </div>
                    <div className="question__info">
                      <div className="question__question">
                        <h4>{question.question}</h4>
                      </div>
                      <div className="question__stats">
                        <div className="likes" style={{ cursor: "pointer" }}>
                          <ThumbUpIcon onClick={() => Like(question._id)} />
                          <h4>{question.upvotes}</h4>
                        </div>
                        <div className="dislikes" style={{ cursor: "pointer" }}>
                          <ThumbDownIcon onClick={() => Dislike(question._id)} />
                          <h4>{question.downvotes}</h4>
                        </div>
                        
                        <div className="comments" style={{ cursor: "pointer" }}>
                      <ChatIcon onClick={() => {
                        getID(question._id);
                        setPopup(true) 
                         }}></ChatIcon>
                      <PostComment trigger={Popup} setTrigger={setPopup}></PostComment>
                    
                      
                    </div>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </QAsection>
        </Container1>
  );
};
const Container = styled.nav`
position: absolute;
width: 1440px;
display: flex;
height: 120px;
left: 0px;
top: 0px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
margin: 0 auto;
`;
const SearchIcon = styled.div`
position: absolute;
left: 70.04%;
right: 3.79%;
top: 19.44%;
bottom: 25%;
background-image: url(${SeaarchIcon});
background-repeat: no-repeat;

`;
const SearchContainer = styled.input`
width: 900px;
height:100%;
border: none;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18.9296px;
line-height: 28px;


color: rgba(0, 0, 0, 0.7);

/* Background */

background: linear-gradient(0deg, rgba(243, 215, 215, 0.2), rgba(243, 215, 215, 0.2));
border-radius: 30px;
`;
const Logo = styled.div`
position: absolute;
width: 115px;
height: 115px;
left: 120px;
top: 4px;
text-align: center;
background-image: url(${logo});
background-size: cover;
`;
const Searchbar = styled.div`
position: absolute;
width: 1240px;
height: 40px;
left: 300px;
top: 20px;
background-color: white;
`;
const QAsection = styled.div`
position: absolute;
width: 80%;
height: 912px;
left: 280px;
top: 120px;

background-repeat: no-repeat;
background-size: cover;
`;
const PNU = styled.div`
display: flex;
position: absolute;
left: 79.8%;
right: 1.62%;
top: 15%;
bottom: 15%;

`;
const PostT = styled.button`

font-family: Poppins;
font-style: normal;
font-weight: 500;
border: none;
color: none;
font-size: 18.9296px;
line-height: 28px;
text-align: center;
`;
const PostQ = styled.div`

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
margin:1rem;
align-items: space-between;
justify-content: space-evenly;
`;
const BellIcon = styled.div`

position: absolute;
    left: 50.16%;
    right: 6.81%;
    top: 0%;
    align-content: flex-start;
    bottom: 0%;
    background-repeat: no-repeat;
background-image: url(${Bellicon});

`;
const ProfileIcon = styled.div`

position: absolute;
    left: 70.35%;
    right: 2.62%;
    top: 0%;
    background-repeat: no-repeat;
    background-image: url(${Profileicon});
    bottom: 0%;
`;
const Container1 = styled.div`
position: absolute;
width: 100%;
height: 100%;
min-height: 900px;
background-repeat: no-repeat;
background-size: cover;

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