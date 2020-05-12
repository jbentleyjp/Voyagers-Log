import React, { useState } from 'react';
import LoginModal from './modals/loginmodal'


export default function Login () {

const [showModal, setShowModal] = useState(false)

  return (
    <div>
       <div
      id="Login"
      onClick={() => {
        setShowModal(true)
      }}      
      >Login
      { showModal ? <LoginModal /> : null }   
      </div>
    </div>
  )
}

                    