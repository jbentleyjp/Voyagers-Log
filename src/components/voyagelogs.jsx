import React from 'react';
import './compstyles/voyagelogs.css'


export default function VoyageLog () {



  return (
    <div id="VoyageLog">
      <div className="TextBody">
        <div className="LogTitle"><h2>insert title here</h2></div>
        <div className="LogDiscription">Description: </div>
        <div className="TravelDate">Date Visited: </div>
        <div className="Lat">Latitude: </div>
        <div className="Long">Longitude: </div>
        <div className="PostDate">Date Posted: </div>
      </div>
      <div className="ImgBody">
      <div className="LogImg">
        {/* <img src="" alt="Picture of a place you traveled."></img> */}
      </div>
      </div>
    </div>
    )
};