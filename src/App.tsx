import React, { useState } from 'react';
import './App.css';
import MissionContainer from './components/Missions';
import MissionList from './components/MisssionInfo/';
import logo from './logo(1).jpg';

function App() {
  let [id,setId] = useState(-1);
  return (
    <div>
      <img src={logo} alt="logon" className="logo" height={50}/>
      <MissionList idInput={id}/>
      <MissionContainer setIdFunction={setId}/>
    </div>
  );
}

export default App;