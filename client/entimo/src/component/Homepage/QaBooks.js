import React from 'react';
import styled from 'styled-components';
import QABooks from '../Topics/Book';

export default function Qa() {
  return (
    
  
    <QASection >
     <QABooks/>
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