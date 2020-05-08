import React, { useState } from 'react';
import './App.css';

//email needs to be vaild
//can only be submitted once
//once submitted - delay 2 seconds then show Thank you 
//second form is drop down menu 
function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [signUpButton, setSignUpButton] = useState('Sign Up Now')

  function validateEmail(email) {
    if (email.includes('.') && email.includes('@')) {
      return true;
    } else {
      return false;
    }
  };

  function handleSignUp () {
    if (validateEmail(email)) {
      setError(state => '');
      setTimeout(function() {
        setSubmitted(state => true);
      }, 2000)
    } else {
      setError(state => 'Please enter a valid email address.');
    }
  };

  if (submitted) {
    return (
      <div className="App">
        <h1 className="header">INTERNSHIP SIGNUP FORM</h1>
        <p>Prepare for your career with a Project Management, Web-Development, Graphic Design, or Digital Marketing Internship at Northern</p>
        <div className="forms">
          <section className="email-validation">{error}</section>
          <form autoComplete="off" onSubmit={event => event.preventDefault()}>
            <input
              type="text"
              name={email}
              placeholder="Search here"
              onChange={(event) => {
                setEmail(event.target.value)
              }
              }
              value={email}
            />
          </form>
          <div class="dropdown">
            <button onclick={dropDown} className="dropbtn">Your Interests</button>
            <div className="dropdown-content">
              <button className="select-options" onClick={interest}>Project Management</button>
              <button className="select-options" onClick={interest}>Web-Development</button>
              <button className="select-options" onClick={interest}>Graphic Design</button>
              <button className="select-options" onClick={interest}>Digital Marketing</button>
            </div>
          </div>
        </div>
        <button className="submit-button" onClick={handleSignUp}>{signUpButton}</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1 className="header">INTERNSHIP SIGNUP FORM</h1>
        <h3>Thanks for your interest!</h3>
        <p>We will review your application and contact you for additional information should your background and experience meet the requirements of one of our openings</p>
      </div>
    );
  }
}

export default App;
