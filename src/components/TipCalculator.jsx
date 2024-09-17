import React, { useState } from 'react';
import TipButton from './TipButton';
import NumberInput from './NumberInput';

const tipPercentages = [5, 10, 15, 25, 50];

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState('');

  const handleTipClick = (percentage) => {
    setTip(percentage);
    setCustomTip(''); // Custom inputni tozalash
  };

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
  };

  const handleCustomTipChange = (e) => {
    setCustomTip(e.target.value);
    setTip(e.target.value ? parseFloat(e.target.value) : 0);
  };

  // Hisoblashdan oldin inputlar to'ldirilganligini tekshiramiz
  const isInputsValid = bill !== '' && people !== '' && people > 0;

  const tipAmount = isInputsValid ? ((bill * tip) / 100) / people : 0;
  const total = isInputsValid ? (bill * (1 + tip / 100)) / people : 0;

  return (
    <div className='flex  justifiy-center gap-5 flex-col md:flex-row'>
      <div>
        <NumberInput
          label="Bill"
          value={bill}
          onChange={handleBillChange}
        />
        <div className='flex flex-row flex-wrap w-64'>
            <h2>Select tip %</h2>
          <div>
          {tipPercentages.map((percentage) => (
            <TipButton
              key={percentage}
              percentage={percentage}
              onClick={handleTipClick}
            />
          ))}
          <button className='border-solid border-2 rounded-lg p-2 mb-2'>
            <input
              type="number"
              placeholder='Custom'
              value={customTip}
              onChange={handleCustomTipChange}
            />
          </button>
          </div>
        </div>
        <NumberInput
          label="Number of People"
          value={people}
          onChange={handlePeopleChange}
        />
      </div>
      <div className='bg-teal-950 rounded-lg w-96 flex  flex-col justify-around items-center min-h-max'>
        <p className='text-white si'>Tip Amount:  ${isInputsValid ? tipAmount.toFixed(2) : '0.00%'}</p>
        <p className='text-white si'>Total:  ${isInputsValid ? total.toFixed(2) : '0.00%'}</p>
        <button
          className='bg-blue-500 text-white rounded-lg p-2 w-16'
          onClick={() => {
            setBill('');
            setPeople('');
            setTip(0);
            setCustomTip('');
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TipCalculator;
