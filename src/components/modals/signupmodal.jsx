import React from "react";
import ReactDOM from "react-dom";
import '../compstyles/modals.css'

const signUpModal = (
  <div id="SignupModal" className="modal">
    <div className="modal-content">
      <h3>Sign Up</h3>
      <form id="signup-form" >
        <div className="signup-field">
          <input type="email" id="signup-email" placeholder="Input your email"></input>
          <label for="signup-email">Email address</label>
        </div>
        <div className="signup-field">
          <input type="password" id="signup-password" placeholder="Input a password"></input>
          <label for="login-password">Choose password</label>                        
        </div>
        <button type="button" className="modal-button">Sign up</button>
      </form>
      </div> 
  </div> 
);

function SignUpModal(props) {
  return ReactDOM.createPortal(signUpModal, document.body);
}

export default SignUpModal;
