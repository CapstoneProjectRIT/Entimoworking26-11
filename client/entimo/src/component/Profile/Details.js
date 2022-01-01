import React from 'react'
import {useState} from 'react';
import styled from 'styled-components';
import closeicon from '../../assets/closeicon.png'
import axios from 'axios';
export default function Details(props) {
    const [mobile,setmobile]=useState('');
    const [occupition,setoccupition]=useState('');
    const [location,setlocation]=useState('');
    const [achievments,setachievments]=useState('');
    const EditProfile=async(e)=>{
        e.preventDefault();
        const form_data=new FormData();
        form_data.append('mobile',mobile);
        form_data.append('occupition',occupition);
        form_data.append('location',location);
        form_data.append('achievments',achievments);
    
        const url='http://localhost:5000/api/EditProfile'
        try {
            console.log(form_data);
            const response=await axios.post(url,form_data,{
                withCredentials:true,
            });
            const {status}=response;
        if(status===201)
        {
            window.alert("Profile Edit successfull");
            
        }
           
        } catch (error) {
            window.alert("Invalid Credentials: Please Insert All Fields");
        }
    }
    
    return (props.trigger) ?(
        <form method="POST">
            <Background>
            <Text><TextDetails>Details</TextDetails>
            <MoNo  >Mo.No</MoNo>
            <Occupation>Location</Occupation>
            <Location>Occupation</Location>
            <Achievement>Achievments</Achievement>
            <InputMoNo value={mobile}
                 onChange={e=>setmobile(e.target.value)}
                placeholder="Enter Mobile No."  name="mobile" id="mobile" required></InputMoNo>
            <InputLocation value={location}
                 onChange={e=>setlocation(e.target.value)}
                placeholder="Enter Location"  name="location" id="location" required></InputLocation>
            <Submit onClick={EditProfile}>Submit</Submit>
            <InputOccupation value={occupition}
                 onChange={e=>setoccupition(e.target.value)}
                placeholder="Enter Your Occupation"  name="Occupation" id="Occupation" required></InputOccupation>
            <InputAchievment value={achievments}
                 onChange={e=>setachievments(e.target.value)}
                placeholder="Enter Your achievments"  name="achievments" id="achievments" required ></InputAchievment>
            <Close type="reset" onClick={() => props.setTrigger(false)}></Close>
            </Text>
        </Background>
        </form>
        
    ): '';
}
const Background= styled.div
`
position: absolute;
width: 601px;
height: 484px;
top: 200px;
left:500px;
background: #FAF8F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Text= styled.div
`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #000000;
`
const TextDetails= styled.div
`
position: absolute;
top: 42px;
left: 273px;
`
const MoNo= styled.div
`
position: absolute;
top: 112px;
left: 88px;
`
const Occupation= styled.div
`
position: absolute;
top: 164px;
left: 88px;

`
const Submit= styled.button
`
position: absolute;
top: 393px;
left: 273px;
width: 144px;
height: 24.13px;
background: #16A13A;
text-align: center;
color: white;
border-radius: 12.4675px;
`
const Close= styled.div
`
position: absolute;
width: 54px;
height: 54px;
left: 547px;
background-image: url(${closeicon});
top: 0px;

`
const Location= styled.div
`
position: absolute;
top: 218px;
left: 88px;
`
const Achievement= styled.div
`
position: absolute;
top: 270px;
left: 88px;

`
const InputMoNo= styled.input
`
width: 235px;
height: 24px;
position: absolute;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
top: 112px;
left: 235px;
`
const InputLocation= styled.input
`
width: 235px;
height: 24px;
position: absolute;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
top: 164px;
left: 235px;
`
const InputOccupation= styled.input
`
width: 235px;
height: 24px;
position: absolute;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
top: 218px;
left: 235px;
`
const InputAchievment= styled.input
`
width: 235px;
height: 77px;
position: absolute;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
top: 270px;
left: 235px;
`
