import React, { useState } from 'react';
import './App.css';
const FontAwesome = require('react-fontawesome');


//email needs to be vaild
//can only be submitted once
//once submitted - delay 2 seconds then show Thank you 
//second form is drop down menu 
const App = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [signUpButton, setSignUpButton] = useState('Sign Up Now');
  const [interest, setInterest] = useState('');
  const [listOpen, setListOpen] = useState(false);
  const [interestHeaderTitle, setInterestHeaderTitle] = useState('Your interests');

  const validateEmail = (inputtedEmail) => {
    if (inputtedEmail.includes('.') && inputtedEmail.includes('@')) {
      return true;
    } else {
      return false;
    }
  };
  const handleInterestSelect = (value) => {
    setInterest(state => value);
    setInterestHeaderTitle(state => value);
    setListOpen(state => false);
  };
  const handleSignUp = () => {
    setSignUpButton(state => 'Submitting...');
    if (validateEmail(email)) {
      console.log('email:', email);
      console.log('interests:', interest);
      setTimeout(function () {
        setSubmitted(state => true);
      }, 2000);
    } else {
      setTimeout(function () {
        setError(state => 'Please enter a valid email address.');
        setSignUpButton(state => 'Sign Up Now');
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="App">
        <div className="container">
          <h1 className="header">INTERNSHIP SIGNUP FORM</h1>
          <div className="header-border"></div>
          <h3>Thanks for your interest!</h3>
          <p className="paragraph">We will review your application and contact you for additional information should your background and experience meet the requirements of one of our openings</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="container">
          <h1 className="header">INTERNSHIP SIGNUP FORM</h1>
          <div className="header-border"></div>
          <p className="paragraph">Prepare for your career with a Project Management, Web-Development, Graphic Design, or Digital Marketing Internship at Northern</p>
          <div className="input-fields">
            <div className="email">
              <section className="email-validation">{error}</section>
              <form autoComplete="off" className="email-form" onSubmit={event => event.preventDefault()}>
                <input
                  type="text"
                  name={email}
                  placeholder="Your Email Address*"
                  onChange={event => {
                    setEmail(event.target.value)
                  }
                  }
                  value={email}
                />
              </form>
            </div>
            <div className="drop-down-container">
              <button className="drop-down button" onClick={() => listOpen ? setListOpen(state => false) : setListOpen(state => true)}
              >{interestHeaderTitle}</button>
              {listOpen &&
                <div className="dropdown">
                  <button value="Project Management" onClick={event => handleInterestSelect(event.target.value)}>Project Management</button>
                  <button value="Web-Development" onClick={event => handleInterestSelect(event.target.value)}>Web-Development</button>
                  <button value="Graphic Design" onClick={event => handleInterestSelect(event.target.value)}>Graphic Design</button>
                  <button value="Digital Marketing" onClick={event => handleInterestSelect(event.target.value)}>Digital Marketing</button>
                </div>
              }
            </div>
          </div>
          <div>
            <button className="submit-button" onClick={handleSignUp}>{signUpButton}</button>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
