import React from 'react';
import './compstyles/voyagelogs.css'


export default function VoyageLog () {



  return (
    <div id="VoyageLog">
      <div className="TextBody">
        <div className="LogTitle"><h2>My Trip to New Zealand</h2></div>
        <div className="LogDiscription">Description: I stayed here for two weeks just driving and camping around the country in a camper van. </div>
        <div className="TravelDate">Date Visited: 2019-12-05 </div>
        <div className="Lat">Latitude: -45.031162 </div>
        <div className="Long">Longitude: 168.662643</div>
        <div className="PostDate">Date Posted: 2020-05-13 </div>
      </div>
      <div className="ImgBody">
      <div className="LogImg">
        {/* <img src="" alt="Picture of a place you traveled."></img> */}
      </div>
      </div>
    </div>
    )
};