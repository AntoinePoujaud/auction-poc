import './App.css';
import {Current_Lot} from './Current_Lot/Current_Lot';
import { useState } from 'react';

function App() {
  const [photo, setPhoto] = useState("http://placekitten.com/g/250/200");
  const [currentLot, setCurrentLot] = useState();
  return (
    <div className="App-header">
      <Current_Lot currentLot={currentLot} photo={photo}/>
    </div>
  );
}

export default App;
