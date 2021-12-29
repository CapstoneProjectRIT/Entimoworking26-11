/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React,{useState,useEffect} from 'react';
import closeicon from '../../assets/close.png'
import styled from 'styled-components';

import axios from 'axios';
function Post(props) {

  const [question,setQuestion]=useState('');
  const [location,setLocation]=useState('');
  const [topic,setTopic]=useState('');
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
  const postquestion=async (e) =>{
      e.preventDefault();

     const form_data=new FormData();
     
     form_data.append('question',question);
     form_data.append('Location',location);
     form_data.append('Topic',topic);
     const url='http://localhost:5000/api/askquestion'
     try {
      
      const res=await axios.post(url,form_data,{
          withCredentials:true,
      });
      const status=res;
      window.alert(res.data.error);
      if(status===200)
      {
        console.log("Error");
        window.alert("Question Asked ");
      }
      if(status===200)
      {
        window.alert("Question Asked Alredy ");
      }
      
      
  } catch (error) {
    
      window.alert("Error");
  }

 

    }
 
  return (props.trigger) ? (

    <Contain>
      <Close type="reset" onClick={() => props.setTrigger(false)}>
        </Close>
        <h2>{user.fullname}</h2>
        
        <input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Enter Question" />
        
        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Enter Location" />
        
        <input type="text" value={topic} onChange={(e)=>setTopic(e.target.value)} placeholder="Enter Topic" />
        
        
        <button onClick={postquestion} >
          post
        </button>
        {props.children}
    </Contain>
  ) : '';
}

export default Post;
const Contain = styled.div`
width: 1000px;
height: 300px;

border: 1px solid lightgray;
background-color: white;
box-shadow: 2rem 1.4rem 2rem lightgray;
`;
const Close = styled.div`
width: 30px;
height: 30px;
background-image: url(${closeicon});
border: 1px solid rgba(255,255,255);
box-shadow: 2rem 1.4rem 2rem lightgray;
`;