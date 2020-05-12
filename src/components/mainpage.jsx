import React from 'react';
import './compstyles/mainpage.css';
import AddVoyage from './addvoyage.jsx';
import VoyageLog from './voyagelogs';


export default function MainPage () {




  return (
    <div id="MainPage">
      <div class="Title">
        <h1>Your Voyages</h1>
        </div>
        <div class="RightButton">
        <AddVoyage/>
      </div>
      <div class="VoyageLog">
      <VoyageLog/>
      </div>
    </div>
  )
}
