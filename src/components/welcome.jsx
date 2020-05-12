import React from 'react';
import SignUp from './signup.jsx';
import Login from './login.jsx';
import "./compstyles/welcome.css"


export default function Welcome() {





  return(
    <div id="Welcome">
      <h1>Welcome to Voyager's Log</h1>
      <ul class="WelcomeList">
        <li class="Wlist"><Login/></li>
        <li class="Wlist"><SignUp/></li>          
      </ul>
    </div>
  );
}