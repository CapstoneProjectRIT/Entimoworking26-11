import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import '../Homepage/QuestionList.css';
//import Comment from "../Homepage/Comment";
//import PostComment from '../Homepage/PostComment';
const Book=()=> {
    const [questions,setQuestions]=useState([]);
    useEffect(()=>{
        const url="http://localhost:5000/api/BookTask";
     
        axios
      .get(url, { withCredentials: true })
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    });
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
    return (
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
                        <Postbutton>Update</Postbutton>
                      
                      
                    
                      
                    </div>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    };
export default Book;
const Postbutton= styled.div`
width: 144px;
height: 24.13px;
background: #16A13A;
text-align: center;
color: white;
border-radius: 12.4675px;
`