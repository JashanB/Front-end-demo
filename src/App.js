import React, { useState } from 'react';
import './App.css';

//email needs to be vaild
//can only be submitted once
//once submitted - delay 2 seconds then show Thank you 
//second form is drop down menu 
function App() {
  return (
    <div className="App">
      <h1 className="header">INTERNSHIP SIGNUP FORM</h1>
      <p>Prepare for your career with a Project Management, Web-Development, Graphic Design, or Digital Marketing Internship at Northern</p>
      <div className="forms">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            name={search}
            placeholder="Search here"
            onChange={(event) => {
              setSearch(event.target.value)
              setError('');
            }
            }
            value={search}
          />
          <section className="search-validation">{error}</section>
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
            <button>Sign Up Now</button>
    </div>
  );
}

export default App;
