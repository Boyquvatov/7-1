import React from 'react';
import TipCalculator from './components/TipCalculator';
import "./App.css"
function App() {
  return (
    <div className="App">
      <h1 className='text-white text-3xl mb-4'>SPLITTER</h1>
      <div className="tipcalculator">
      <TipCalculator />
      </div>
    </div>
  );
}

export default App;
