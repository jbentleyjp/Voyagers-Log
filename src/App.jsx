import React from 'react';
import firebase from 'firebase'
import './App.css';
import Map from './components/map.jsx';
import Welcome from './components/welcome.jsx';
import MainPage from './components/mainpage.jsx';

//firebase config setup
const firebaseConfig = {
  apiKey: "AIzaSyBWZ1h_HCqqCDGWUE9wRt-kr_RrJ9qQmtQ",
  authDomain: "voyager-s-logs.firebaseapp.com",
  databaseURL: "https://voyager-s-logs.firebaseio.com/",
  projectId: "voyager-s-logs",
}
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
// firebase refereces
export const auth = firebase.auth();
export const db = firebase.firestore();


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
