/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bc from '../../assets/Back.png';
import logo from '../../assets/ENTIMO30.png';
import Il from '../../assets/illustration.png';

function Landing() {
  return (
    <Container>

      <Nav>
        <Logo />
        <Link to="/login"><Login>Log In</Login></Link>
        <Link to="/signup"><SignUp>Sign Up</SignUp></Link>
      </Nav>

      <Tagline>
        Post Tasks
        Get Updates
      </Tagline>
      <About>
        The real time platform designed to help people, to help each other:
        To ask, to update, to learn, to grow.
      </About>
      <Illustration />

    </Container>

  );
}

export default Landing;

const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
min-height: 900px;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${bc});

`;
const Nav = styled.nav`
position: absolute;
display: flex;
height: 157px;
width: 100%;
background: rgba(3,0,0,0);
margin: 0 auto;
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
const SignUp = styled.div`
position: absolute;
width: 128px;
height: 38px;
left: 1107px;
top: 61px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 37px;
/* identical to box height */

text-align: center;

color: #000000;

`;
const Login = styled.div`
position: absolute;
width: 82px;
height: 38px;
left: 900px;
top: 61px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 37px;
/* identical to box height */

text-align: center;

color: #000000;

`;
const Tagline = styled.h1`
padding: 0px;
margin-left: 120px;
position: absolute;
width: 532px;
height: 252px;

top: 145px;

font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 84.2px;
line-height: 126px;

color: #000000;

`;

const About = styled.p`
padding: 0px;
margin-left: 120px;
position: absolute;
width: 624px;
height: 123px;
top: 467px;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 27.2px;
line-height: 41px;

color: #000000;
`;
const Illustration = styled.div`position: absolute;
width: 621px;
height: 432px;
top: 324px;
margin-left: 744px;
background-image: url(${Il});`;
