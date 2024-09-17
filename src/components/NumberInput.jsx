import React from 'react';

const NumberInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label className='text-2xl'>{label} </label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        min="0"
        className='border-solid border-2 rounded-lg p-1 from-neutral-950 mb-2'
      />
    </div>
  );
};

export default NumberInput;
