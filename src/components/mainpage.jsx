import React from 'react';
import './compstyles/mainpage.css';
import AddVoyage from './addvoyage.jsx';
import VoyageLog from './voyagelogs';


export default function MainPage () {




  return (
    <div id="MainPage">
      <div className="Title">
        <h1>Your Voyages</h1>
        </div>
        <div className="RightButton">
        <AddVoyage/>
      </div>
      <div className="VoyageLog">
      <VoyageLog/>
      </div>
    </div>
  )
}
