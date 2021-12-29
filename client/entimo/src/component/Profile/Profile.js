import React,{useState,useEffect} from 'react';
import logo from '../../assets/ENTIMO30.png';
import styled from 'styled-components';
import axios from 'axios';
import LocationOnIcon from '@material-ui/icons/Edit';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import Qamytasks from '../MyTask/MyTask';
import Qamyupdate from '../MyUpdate/MyUpdate';
import {NavLink,} from "react-router-dom";
const Profile = () => {
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
    return (
      
   <Container >
         <Nav>
         <Logo></Logo> 
         <NavLink to="/Login"  ><Login>Log In</Login></NavLink>
         <NavLink to="/SignUp"  ><Signup>Join Now</Signup></NavLink>
         </Nav>
         <Router>
         <LeftContainer>
           <Header>
             <Profilepic/>
             <Profilinfo>
              <Name>{user.fullname}</Name>
              <Count>
              <Fcount>Followers</Fcount>
              <Fcount>Following</Fcount>
              </Count>
               </Profilinfo>
             </Header>
           <Headerbar>
           <NavLink to="/Mytasksprofile"  style={{textDecoration : 'none'}}>
             <Headerbarmytask>
               My Task
               </Headerbarmytask>
               </NavLink>
               
             <Headerbarmytask>
             <NavLink to="/Myupdatesprofile"  style={{textDecoration : 'none'}}>
               My Updates
               </NavLink>
               </Headerbarmytask>
               
             </Headerbar>
             <QASection>
            
               <Route path="/Mytasksprofile">
               <Qamytasks/>
               </Route>
               <Route path="/Myupdatesprofile">
               <Qamyupdate/>
               </Route>
               
             </QASection>
           </LeftContainer>
           <RightContainer>
             <Details>Details</Details>
             <Editicon><LocationOnIcon/><Fcount>Edit</Fcount></Editicon>
             </RightContainer>
           </Router>
  
  </Container>
  
    )
}
const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;

`;
const Nav = styled.nav`
position: absolute;
display: flex;
height: 157px;
width: 100%;
margin: 0 auto;
background: #FAF8F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Logo= styled.div
`
position: absolute;
width: 146.01px;
height: 145px;
left: 120px;
top: 8px;
text-align: center;
background-image: url(${logo});
background-size: cover;
`;
const Login= styled.div
`
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
`
const Signup= styled.div
`
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
`
export default Profile;
const LeftContainer = styled.div`
position: absolute;
width: 717px;
height: fit-content;
left: 120px;
top: 177px;
display: flex;
flex-direction: column;
align-items: center;
background: #FAF8F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;
const Header = styled.div`
width: 717px;
height: 130px;
left: 120px;
top: 177px;
display: flex;
flex-direction: row;
`;
const Headerbar = styled.div`
width: 400.25px;
height: 48px;
display: flex;
flex-direction: row;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const Headerbarmytask = styled.div`
width: 200.38px;
height: 48px;
background: #FFFFFF;
align-items: center;
    justify-content: space-evenly;
    display: flex;
    font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18.9296px;
`;
const QASection= styled.div`

width: 717px;
background-repeat: no-repeat;
background-size: cover;
`
const Profilepic = styled.div`
width: 140px;
height: 130px;
background-image: url(${logo});
background-size: cover;

`;
const Profilinfo = styled.div`
width: 602px;
height: 130px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding-left: 20px;
`;
const Name = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 34px;
`;
const Fcount = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 22px;
margin-right: 20px;
color: rgba(0, 0, 0, 0.6);
`;
const Count = styled.div`
display: flex;
flex-direction: row;

`;

const RightContainer = styled.div`
width: 498px;
position: absolute;
height: 900px;
left: 850px;
top: 177px;
background: #FAF8F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;
const Details = styled.div`
position: absolute;
left:32px;
top: 14px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 37px;
/* identical to box height */


color: #000000;
`;
const Editicon= styled.div`
position: absolute;
display: flex;
flex-direction: row;
width:100px;
justify-content: space-evenly;
left:159px;
top:23px;
`;
