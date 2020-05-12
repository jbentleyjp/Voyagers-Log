import React, { useState } from 'react';
import SignUpModal from './modals/signupmodal'

export default function SignUp () {

  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <div
      id="SignUp"
      onClick={() => {
        setShowModal(true)
      }}      
      >Sign up
      { showModal ? <SignUpModal /> : null }   
      </div>
    </div>
  )
}