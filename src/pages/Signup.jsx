import React from 'react'
import styled from 'styled-components'
import Backimg from '../components/Backimg'
export default function Signup() {
  return (
    <Container>
      <Backimg/>
      <div className="formcontainer">
        <form action="" className="inner-form">
          <label htmlFor="username" className="formlabel">First Name:</label>
          <input type="text" className="username" />
          <label htmlFor="lastname" className="formlabel">Last Name:</label>
          <input type="text" className="lname" />
          <label htmlFor="email" className="formlabel">Email:</label>
          <input type="email" className='email'/>
          <label htmlFor="phonenum" className='phonenum'>Phone number:</label>
          <input type="text" className="phonenum" />
          <label htmlFor="password" className="formlabel">Password:</label>
          <input type="password" className="password" />
          <label htmlFor="password" className="formlabel">Confirm Password :</label>
          <input type="password" className="password" />
          <a href="/login">Already have an account?</a>
          <button className="login">Sign Up</button>
        </form>
      </div>
    </Container>
  )
}
const Container=styled.div`
 body{
      overflow:hidden;
      color:white;
    }
    .formcontainer{
      /* background-color:red; */
      display:flex;
      align-items:center;
      justify-content:center;
      height:100vh;
      position: relative;
      color:white;
    }
    .inner-form{
      background-color:rgba(0,0,0,0.5);
      display:flex;
      border-radius:5px;
      flex-direction:column;
      padding:2rem;
    }
    .formlabel{
      /* color:black; */
      padding:0.2em;
      font-family:monospace;
      font-size:1rem;
    }
    input{
      border:0px;
      padding:5px;
      border-bottom:2px solid white;
      background-color:transparent;
      margin-bottom:5px;
      width:25vw;
    }
    input[type="text"] {
      color: beige; 
    }
    a{
      padding:1em;
      padding-left:0px;
      font-size:small;
      color:beige;
      text-decoration:none;
      font-family:'Courier New', Courier, monospace
    }
    button{
      padding:0.5rem;
      background-color:#ff5100;
      border:0px;
      color:white;
      border-radius:5px;
      font-weight:700;
    }
`;
