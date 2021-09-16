import { useState } from 'react';

// import file
import './App.css';
import { CurrentLot } from './Current_Lot/Current_Lot';
import { AllLots } from './All_Lots/All_Lots';
import { db } from './Database/database';

function App() {

  for (let auction in db.auctions) {
    console.log(db.auctions[auction].id);
    if (db.auctions[auction].id === 1) {
      
    }
  }
  const [currentLot, setCurrentLot] = useState();
  const [otherLots, setOtherLots] = useState();
  return (
    <div className="App-header">
      <CurrentLot currentLot={currentLot}/>
      <AllLots otherLots={otherLots}/>
    </div>
  );
}

export default App;
