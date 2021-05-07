import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import auth from "./auth"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  h3 {
    display:inline-block;
    padding-right: 15px;
    padding-top: 15px;
    padding-left: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    color: black;  
    text-decoration: none;
}
.second h3:link{
    text-decoration: none;
}
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const RightNav = ({ Open ,Toggle }) => {
  let history = useHistory()
  return (
    
    <Ul open={Open}>
      
    <h3
    onClick={() => { auth.login(() => history.push("/user")) 
      }}
    >
    Add User 
    </h3>
    
    <h3
    onClick={() => {
    auth.login(() => history.push("/cert"));
   }}
    >
    Add certificate
    </h3>

    <h3
    onClick={() => {
    auth.login(() => history.push("/upload"));
   }}
    >
    Add Image
    </h3>
    <h3
    onClick={() => {
    auth.login(() => history.push("/viewimage"));
   }}
    >
    View Image
    </h3>
    
    <h3
       onClick={() => {
       auth.logout(() => history.push("/"));
     }}
    >
    Log Out
    </h3>
    
    </Ul>
  )
}

export default RightNav