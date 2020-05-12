import React from 'react';
import SignUp from './signup.jsx';
import Login from './login.jsx';
import "./compstyles/welcome.css"


export default function Welcome() {





  return(
    <div id="Welcome">
      <h1>Welcome to Voyager's Log</h1>
      <nav className="WelcomeList">
        <button type="button" className="Wlist"><Login/></button>
        <button type="button" className="Wlist"><SignUp/></button>          
      </nav>
    </div>
  );
}