import React from 'react';
import SignUp from './signup.jsx';
import Login from './login.jsx';
import "./compstyles/welcome.css"


export default function Welcome() {





  return(
    <div id="Welcome">
      <h1>Welcome to Voyager's Log</h1>
      <ul className="WelcomeList">
        <li className="Wlist"><Login/></li>
        <li className="Wlist"><SignUp/></li>          
      </ul>
    </div>
  );
}