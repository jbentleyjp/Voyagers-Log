import React from 'react';
import './App.css';
import Map from './components/map.jsx';
import Welcome from './components/welcome.jsx';
import MainPage from './components/mainpage.jsx';


function App() {
  return (
    <div className="App">
      <Map/>
      <Welcome/>
      <MainPage/>

    </div>
  );
}

export default App;
