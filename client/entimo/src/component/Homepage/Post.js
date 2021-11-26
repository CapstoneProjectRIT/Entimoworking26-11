/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React,{useState} from 'react';
import styled from 'styled-components';

import axios from 'axios';
function Post(props) {

  const [question,setQuestion]=useState('');
  const [location,setLocation]=useState('');
  const [topic,setTopic]=useState('');

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
      <div>
        <button type="reset" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Enter Question" />
        
        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Enter Location" />
        
        <input type="text" value={topic} onChange={(e)=>setTopic(e.target.value)} placeholder="Enter Topic" />
        
        
        <button onClick={postquestion} >
          post
        </button>
        {props.children}
      </div>
    </Contain>
  ) : '';
}

export default Post;
const Contain = styled.div`
width: 1000px;
height: 300px;
position: absolute;

border: 1px solid lightgray;
background-color: white;
box-shadow: 2rem 1.4rem 2rem lightgray;
`;