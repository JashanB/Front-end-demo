import React, { useState } from 'react';
import './App.css';

//email needs to be vaild
//can only be submitted once
//once submitted - delay 2 seconds then show Thank you 
//second form is drop down menu 
function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [signUpButton, setSignUpButton] = useState('Sign Up Now');
  const [interest, setInterest] = useState('');

  function validateEmail(inputtedEmail) {
    if (inputtedEmail.includes('.') && inputtedEmail.includes('@')) {
      return true;
    } else {
      return false;
    }
  };

  function handleSignUp() {
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
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="App">
        <h1 className="header">INTERNSHIP SIGNUP FORM</h1>
        <h3>Thanks for your interest!</h3>
        <p>We will review your application and contact you for additional information should your background and experience meet the requirements of one of our openings</p>
      </div>
    );
  } else {
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
              placeholder="Your Email Address*"
              onChange={event => {
                setEmail(event.target.value)
              }
              }
              value={email}
            />
          </form>
          <div className="dropdown">
            <form onSubmit={event => event.preventDefault()}>
              <fieldset>
                <select id="set-interest" value="Your interests" onChange={event => {
                  setInterest(event.target.value)
                }
                }>
                  <option value="Project Management">Project Management</option>
                  <option value="Web-Development">Web-Development</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </fieldset>
            </form>
          </div>
        </div >
        <button className="submit-button" onClick={handleSignUp}>{signUpButton}</button>
      </div >
    );
  }
}

export default App;
