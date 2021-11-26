import React from 'react';
import { useState } from 'react';
import Post from './Post';
import styled from 'styled-components';
import Questionlist from './QuestionList';
export default function Qa() {
  const [Popup, setPopup] = useState(false);
  return (
    
  
    <QASection >
    <PostT onClick={() => setPopup(true)}>Post Task</PostT>
    <Post trigger={Popup} setTrigger={setPopup}>
        <h1>hello</h1>
      </Post>
      <Questionlist />
      </QASection>
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
const PostT = styled.button`

font-family: Poppins;
font-style: normal;
font-weight: 500;
margin-top: 20px;
margin-left: 47%;
border: none;
color: none;
font-size: 18.9296px;
line-height: 28px;
text-align: center;
`;