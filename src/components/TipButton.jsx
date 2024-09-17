import React from 'react';

const TipButton = ({ percentage, onClick }) => {
  return (
    <button onClick={() => onClick(percentage)} className='bg-green-950 hover:bg-green-700 mx-1 my-5 p-1 rounded-lg text-white'>
      {percentage}%
    </button>
  );
};

export default TipButton;
