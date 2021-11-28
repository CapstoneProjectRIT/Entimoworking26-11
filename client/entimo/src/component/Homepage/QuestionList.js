import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import './QuestionList.css';
//import Comment from "../Homepage/Comment";
import PostComment from './PostComment';

const QuestionList=()=>{
    const [questions,setQuestions]=useState([]);
    const [Popup, setPopup] = useState(false);
    //const [id,setId]=useState('');
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
    useEffect(()=>{
        const url="http://localhost:5000/api/allQuestion";
       
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

      const Comment=(ID)=>{
        const url="http://localhost:5000/api/comment";
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
    //   const postquestion=async (e) =>{
    //     e.preventDefault();
  
    //    const form_data=new FormData();
       
    //    form_data.append('question',question);
    //    form_data.append('Location',location);
    //    form_data.append('Topic',topic);
    //    const url='http://localhost:5000/api/comment'
    //    try {
        
    //     const res=await axios.post(url,form_data,{
    //         withCredentials:true,
    //     });
    //     const status=res;
    //     window.alert(res.data.error);
    //     if(status===200)
    //     {
    //       console.log("Error");
    //       window.alert("Question Asked ");
    //     }
    //     if(status===200)
    //     {
    //       window.alert("Question Asked Alredy ");
    //     }
        
        
    // } catch (error) {
      
    //     window.alert("Error");
    // }
     
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
                      <Postbutton onClick={() => {
                        getID(question._id);
                        setPopup(true) 
                         }}>Update</Postbutton>
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
      );
    };

   


export default QuestionList;

const Postbutton= styled.div`
width: 144px;
height: 24.13px;
background: #16A13A;
text-align: center;
color: white;
border-radius: 12.4675px;
`