import React, { useState } from "react";
import ReactDOM from "react-dom";
import '../compstyles/modals.css'
import firebase from 'firebase'
import SignUp from "../signup";

// firebase config setup
const firebaseConfig = {
  apiKey: "AIzaSyBWZ1h_HCqqCDGWUE9wRt-kr_RrJ9qQmtQ",
  authDomain: "voyager-s-logs.firebaseapp.com",
  databaseURL: "https://voyager-s-logs.firebaseio.com/",
  projectId: "voyager-s-logs",
}
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

// firebase refereces
export const auth = firebase.auth();
export const db = firebase.firestore();


function SignUpModal () {
  
  const [signupMail, setSignupMail] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(signupMail, password).then(credentials => {
      console.log(credentials)
    })  
  }

return (
  <div id="SignupModal" className="modal">
    <div className="modal-content">
      <h3>Sign Up</h3>
      <form id="signup-form" type="submit"  onSubmit={() => {
        submitHandler();        
      }}>
        <div className="signup-field">
          <input 
          type="email" 
          id="signup-email" 
          placeholder="Input your email"
          onChange={(e) => {
            setSignupMail(e.target.value)
          }}
          ></input>
          <label for="signup-email">Email address</label>
        </div>
        <div className="signup-field">
          <input 
          type="password" 
          id="signup-password" 
          placeholder="Input a password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          ></input>
          <label for="signup-password">Choose password</label>                        
        </div>
        <button type="button" className="modal-button">Sign up</button>
      </form>
      </div> 
  </div> 
);
}


function SignUpModalPortal(props) {
  return ReactDOM.createPortal(SignUpModal(), document.body);
}

export default SignUpModalPortal
