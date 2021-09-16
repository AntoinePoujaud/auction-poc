import { useState } from 'react';

// import file
import './App.css';
import { CurrentLot } from './Current_Lot/Current_Lot';
import { AllLots } from './All_Lots/All_Lots';


function App() {
  const [currentLot, setCurrentLot] = useState();
  return (
    <div className="App-header">
      <CurrentLot currentLot={currentLot}/>
      <AllLots />
    </div>
  );
}

export default App;
