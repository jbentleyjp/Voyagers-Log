import React from "react";
import ReactDOM from "react-dom";
import '../compstyles/modals.css'

const loginModal = (
  <div id="LoginModal" className="modal">
    <div className="modal-content">
      <h3>Login</h3>
      <form id="login-form" >
        <div className="login-field">
          <input type="email" id="login-email" placeholder="Input your email"></input>
          <label for="login-email">Email address</label>
        </div>
        <div className="login-field">
          <input type="password" id="login-password" placeholder="Input your password"></input>
          <label for="login-password">Your password</label>                        
        </div>
        <button type="button" className="modal-button">Login</button>
      </form>
      </div> 
  </div> 
);

function LoginModal(props) {
  return ReactDOM.createPortal(loginModal, document.body);
}

export default LoginModal;
