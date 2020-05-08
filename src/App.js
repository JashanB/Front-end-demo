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
          <div className="drop-down-container">
            <button className="drop-down button" onClick={() => listOpen ? setListOpen(state => false) : setListOpen(state => true)}>{interestHeaderTitle}<i className="fas fa-angle-up"></i></button>
            {listOpen &&
              <div className="dropdown">
                <button value="Project Management" onClick={event => handleInterestSelect(event.target.value)}>Project Management</button>
                <button value="Web-Development" onClick={event => handleInterestSelect(event.target.value)}>Web-Development</button>
                <button value="Graphic Design" onClick={event => handleInterestSelect(event.target.value)}>Graphic Design</button>
                <button value="Digital Marketing" onClick={event => handleInterestSelect(event.target.value)}>Digital Marketing</button>
              </div>
            }
          </div>
          {/* <div className="dropdown">
            <form onSubmit={event => event.preventDefault()}>
              <fieldset placeholder="Your interests">
                <select id="set-interest" onChange={event => {
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
          </div> */}
          {/* <div className="dd-wrapper">
            <div className="dd-header" onClick={() => setListOpen(state => true)}>
              <div className="dd-header-title">{interestHeaderTitle}</div>
              {listOpen
                ? <FontAwesome name="angle-up" size="2x" />
                : <FontAwesome name="angle-down" size="2x" />
              }
            </div>
            {listOpen && <ul className="dd-list">
                <li value="Project Management" onClick={event => setInterest(event.target.value)}>Project Management</li>
                <li value="Web-Development" onClick={event => setInterest(event.target.value)}>Web-Development</li>
                <li value="Graphic Design" onClick={event => setInterest(event.target.value)}>Graphic Design</li>
                <li value="Digital Marketing" onClick={event => setInterest(event.target.value)}>Digital Marketing</li>
              </ul>}
          </div> */}
        </div >
        <button className="submit-button" onClick={handleSignUp}>{signUpButton}</button>
      </div >
    );
  }
}

export default App;
