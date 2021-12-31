/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React,{useState} from 'react';
import styled from 'styled-components';

import axios from 'axios';
function PostComment(props) {

  const [comment,setComment]=useState('');
  const [data,setData]=useState([]);

  // const getdata=()=>{
  //   axios.get('http://localhost:5000/api/allQuestion').then((response)=>{
  //     const data=response.data;
  //     setData(data);
  //     console.log("Data received!")
  //   })
  //   .catch((error)=>{
  //     console.error(error);
  //   })
  // }
  const postcommnet=async (e) =>{
      e.preventDefault();

     const form_data=new FormData();
    // const question=getdata();
     form_data.append('comment',comment);
     
          const url='http://localhost:5000/api/comment';
     try {
      
      const res=await axios.post(url,form_data,{
          withCredentials:true,
      });
      const status=res;
      window.alert(res.data.error);
      if(status===200)
      {
        console.log("Error");
        window.alert("Comment Posted ");
      }
      if(status===200)
      {
        window.alert("Comment Posted Alredy ");
      }
      
      
  } catch (error) {
    
      window.alert("Error");
  }

  // const [questions,setQuestions]=useState([]);
  //   useEffect(()=>{
  //       const url="http://localhost:5000/api/allQuestion";
       
  //       axios
  //     .get(url, { withCredentials: true })
  //     .then((response) => {
  //       setQuestions(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   });

    }
 
  return (props.trigger) ? (

    <Contain>
      <div>
        {data.map((datas)=>{
          
          return(
            
            <div>
          <h5 >{datas.owner}</h5>
         
          <h2>{datas.question}</h2>
          </div>
            );
        
     
      })}
      <button type="reset" onClick={() => props.setTrigger(false)}>
            close
          </button>
          
        <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Enter Comment" />
        
        
        
        <button onClick={postcommnet} >
          post
        </button>
        
        {props.children}
        
      </div>
    </Contain>
  ) : '';
}

export default PostComment;
const Contain = styled.div`
width: 1000px;
height: 300px;

border: 1px solid lightgray;
background-color: white;
box-shadow: 2rem 1.4rem 2rem lightgray;
top: 130%;
left: 25%;
`;
