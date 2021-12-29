/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import img from '../../assets/Rectangle.png';
import logo from '../../assets/ENTIMO30.png';
import Credential from './Credential';
import Data from './data';

function SignUp() {
  return (
    <Container>
      <Leftcontainer>

        <Logo />
        <Credential />
        <Data />

      </Leftcontainer>
    </Container>

  );
}
export default SignUp;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 900px;
background-repeat: no-repeat;
background-size: cover;
background: white;
margin: 0 auto;

`;
const Leftcontainer = styled.div`
position: absolute;
width: 720px;
height: 100%;
background-repeat: no-repeat;
background-size: cover;
min-height: 900px;
left: 0px;
top: 0px;

background-image: url(${img});
`;

const Logo = styled.div`
position: absolute;
width: 146.01px;
height: 145px;
left: 120px;
top: 8px;
text-align: center;
background-image: url(${logo});
background-size: cover;
`;
