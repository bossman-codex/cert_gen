import React, { useState } from 'react';
import styled from 'styled-components';
// import RightNav from './RightNav';
import { useHistory } from 'react-router-dom'
import auth from "./auth"

const Ul = styled.ul`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins&display=swap');
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  h3 {
    font-family: 'Poppins', serif;
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
h3:hover {
  color: lightgreen;
 
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
    width: 100%;
    padding: 7em;
    text-align:center;
    transition: transform 0.3s ease-in-out;
    h3 {
      font-family: "Lato", sans-serif;
      font-size: 20px;
      color: white;
     
    }
    h3:hover {
      color: lightgreen;
    }
  }
`;

const StyledBurger = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins&display=swap');

  font-family: 'Poppins', serif;
  width: 2rem;
  height: 2rem;
  position: sticky;
  top: 15px;
  margin-left: auto;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const toggle = () => setOpen(!open);
  const toggletwo =()=>setActive(!active)

  let history = useHistory()
const user =() =>{
  auth.login(() => history.push("/user"))
  toggletwo()
  toggle()
}

const cert =() =>{
  auth.login(() => history.push("/cert"))
  toggle()
}

const upload =() =>{
  auth.login(() => history.push("/upload"))
  toggle()
}

const viewimage =() =>{
  auth.login(() => history.push("/viewimage"))
  toggle()
}



  
  return (
    <>
      <StyledBurger  open={open} onClick={toggle}>
        <div />
        <div />
        <div />
      </StyledBurger>
     <Ul open={open}>
      
    <h3
    onClick={user} 
    >
    Add User 
    </h3>
    
    <h3
    onClick={cert} 
    >
    Add Certificate
    </h3>

    {/* <h3

    onClick={upload} 
    >
    Add Image
    </h3> */}
    {/* <h3
    onClick={viewimage}
    >
    View Image
    </h3> */}

   
    
    <h3
       onClick={() => {
       auth.logout(() => history.push("/"));
     }}
    >
    Log Out
    </h3>
    
    </Ul>
    </>
  )
}

export default Burger