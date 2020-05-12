import React, { useState } from 'react';
import AddVoyageModal from './modals/addvoyagemodal'
import './compstyles/addvoyage.css'


export default function AddVoyage () {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div
      id="AddVoyage"
      onClick={() => {
        setShowModal(true)
      }}      
      >Add Voyage
      { showModal ? <AddVoyageModal /> : null }   
      </div>
    </div>
  )
}







