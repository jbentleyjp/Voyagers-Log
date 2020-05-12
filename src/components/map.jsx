import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "50vh",
    latitude: 35.6804,
    longitude: 139.7690,
    zoom: 6,
  });

//   useEffect(() => {

//   } []);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/kitario/cka3cawe409mg1ilb8fivfj20"
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}