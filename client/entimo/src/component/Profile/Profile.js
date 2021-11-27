import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
        <div>
            {
           
               
                    <div>
                      
                    <h2>{user.fullname}</h2>
                    <h2>{user.email}</h2>
                    
                    </div>
                    
                
            }
        
        </div>
    )
}
export default Profile