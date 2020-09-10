import React from 'react';
import MagicBag from './components/MagicBag'
import {normallist, hustlelist} from './wordlist'

function App() {
  return (
    <div>
      <MagicBag wordlist={normallist} count={1} />
      <MagicBag wordlist={hustlelist} count={2} />
    </div>
  );
}

export default App;
