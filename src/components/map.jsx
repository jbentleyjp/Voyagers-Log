import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import "./compstyles/map.css"

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "50vh",
    latitude: 35.6804,
    longitude: 139.7690,
    zoom: 2,
  });


  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/kitario/cka3cawe409mg1ilb8fivfj20"
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
     {
       <Marker longitude={168.66} latitude={-45.03} offsetLeft={-12} offsetTop={-24}>
         <svg 
         className="marker" 
         viewBox="0 0 24 24"
         width="32" height="32"
         stroke-width="3"
         fill="none"
         stroke-linecap="round"
         stroke-linejoin="round"
         ><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
   
       </Marker>
         

     } 

    </ReactMapGL>
    
  );
}