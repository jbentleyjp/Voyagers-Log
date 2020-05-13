import React, { useState } from 'react';
import SignUpModalPortal from './modals/signupmodal'

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
      { showModal ? <SignUpModalPortal/> : null }   
      </div>
    </div>
  )
}