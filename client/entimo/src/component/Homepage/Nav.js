import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import logo from '../../assets/ENTIMO30.png';
import SeaarchIcon from '../../assets/search.png';
import Bellicon from '../../assets/BellIcon.png';
import Profileicon from '../../assets/ProfileIcon.png';

export default function Nav() {
  const [Popup, setPopup] = useState(false);
  return (
    <Container>
      <Logo />
      <Searchbar>
        <SearchContainer placeholder="search for people task or update" />
        <SearchIcon />
        <PNU>
          <PostT onClick={() => setPopup(true)}>Post Task</PostT>
          <BellIcon />
          <ProfileIcon />
        </PNU>
      </Searchbar>
      <QAsection />
      <Post trigger={Popup} setTrigger={setPopup}>
        <h1>hello</h1>
      </Post>
    </Container>
  );
}
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
width: 800px;
height: 48px;
left: 396px;
top: 72px;
background-color: black;
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
